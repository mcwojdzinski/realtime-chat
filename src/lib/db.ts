import { Redis } from "@upstash/redis";

// @ts-ignore
export const db: Redis = Redis.fromEnv()