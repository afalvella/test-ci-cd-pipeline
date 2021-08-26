import { Redis } from '../../../redis/Redis';

describe('Redis', () => {
  const redis = new Redis();

  afterAll(() => {
    redis.close();
  });

  it('should set and get a key value pair', async() => {
    await redis.set('foo', 'bar');
    expect(await redis.get('foo')).toBe('bar');
  });
});
