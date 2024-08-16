import { calcSum } from './calcSum.js';

describe('calcSum', () => {
  test('Unit test 1', () => {
    const num1 = 4;
    const num2 = 3;
    const result = calcSum(num1, num2);
    expect(result).toBe(7);
  });
});
