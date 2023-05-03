import { FC } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import { fetchRedis } from '@/helpers/redis'
import { messageArrayValidator } from '@/lib/validations/message'

interface PageProps {
  params: {
    chatId: string
  }
}

async function getChatMessages(chatId: string) {
  try {
    const results: string[] = await fetchRedis(
      'zrange',
      `chat:${chatId}:messages`,
      0,
      -1
    )

    const dbMessages = results.map((message) => JSON.parse(message) as Message)

    const reversedDbMessages = dbMessages.reverse()

    const messages = messageArrayValidator.parse(reversedDbMessages)

    return messages
  } catch (error) {
    notFound()
  }
}
const Page = async ({ params }: PageProps) => {
  const { chatId } = params
  const session = await getServerSession(authOptions)

  if (!session) notFound()

  const { user } = session
  const [userId1, userId2] = chatId.split('--')

  if (user.id !== userId1 && user.id !== userId2) notFound()

  const chatPartnerId = user.id === userId1 ? userId2 : userId1
  const chatPartner = (await db.get(`user:${chatPartnerId}`)) as User

  const initialMessages = await getChatMessages(chatId)

  return <h1>{params.chatId}</h1>
}

export default Page
