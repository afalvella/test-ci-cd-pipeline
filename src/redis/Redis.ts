import IoRedis from 'ioredis';

export class Redis {
  private redis: IoRedis.Redis;

  constructor() {
    this.redis = new IoRedis();
  }

  async set(key: string, value: string): Promise<void> {
    await this.redis.set(key, value);
  }

  async get(key: string): Promise<string> {
    const value = await this.redis.get(key) as string;
    return value;
  }

  async close() {
    await this.redis.quit();
  }
}
