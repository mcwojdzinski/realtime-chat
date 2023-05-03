import { fetchRedis } from '@/helpers/redis'

export const getFriendsByUserId = async (userId: string) => {
  const friendIds = (await fetchRedis(
    'smembers',
    `user:${userId}:friends`
  )) as string[]

  const friends: User[] = await Promise.all(
    friendIds.map(async (friendId) => {
      const friend: User = await fetchRedis('get', `user:${friendId}`)
      return friend
    })
  )

  return friends
}
