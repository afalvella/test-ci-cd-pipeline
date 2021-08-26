import { sum } from '../calc';

describe('calc', () => {
  describe('sum', () => {
    it('should return the sum of 2 numbers', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});
