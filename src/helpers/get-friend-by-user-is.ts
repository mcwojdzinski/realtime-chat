import { fetchRedis } from '@/helpers/redis'

export const getFriendsByUserId = async (userId: string) => {
  const friendIds = (await fetchRedis(
    'smembers',
    `user:${userId}:friends`
  )) as string[]

  const friends: User[] = await Promise.all(
    friendIds.map(async (friendId) => {
      const friend: string = await fetchRedis('get', `user:${friendId}`)
      const parsedFriend: User = JSON.parse(friend)
      return parsedFriend
    })
  )

  return friends
}
