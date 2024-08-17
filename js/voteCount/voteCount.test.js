import { voteCount } from './voteCount.js';

describe('voteCount', () => {
  test('Unit test 1', () => {
    const input = { voteFor: 13, votesAgainst: 0 };
    const result = voteCount(input);
    expect(result).toBe(13);
  });
});

test('Unit test 2', () => {
  const input = { voteFor: 0, votesAgainst: 0 };
  const result = voteCount(input);
  expect(result).toBe(0);
});
