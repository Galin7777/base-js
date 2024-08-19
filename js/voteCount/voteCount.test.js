import { getVoteCount } from './voteCount.js';

describe('getVoteCount', () => {
  test('Unit test 1', () => {
    const input = { upvotes: 13, downvotes: 0 };
    const result = getVoteCount(input);
    expect(result).toBe(13);
  });
});

test('Unit test 2', () => {
  const input = { upvotes: 0, downvotes: 0 };
  const result = getVoteCount(input);
  expect(result).toBe(0);
});
