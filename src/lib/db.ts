import { Redis } from "@upstash/redis";

// @ts-ignore
export const db: Redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
})