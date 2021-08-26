import dotenv from 'dotenv';

dotenv.config();

export const config = {
  REDIS_PORT: +(process.env.REDIS_PORT || 6379),
  REDIS_HOST: process.env.REDIS_HOST || 'redis'
};
