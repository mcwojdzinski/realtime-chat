import Button from '@/components/ui/Button'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const Page = async ({}) => {
  const session = await getServerSession(authOptions)

  return <h1>Hi</h1>
}

export default Page
