/**
 *@function voteCount
 * @param {object} nums
 * @param {number}  nums voteFor
 * @param {number}  nums votesAgainst
 * @returns {number}
 */

export const voteCount = (nums) => {
  const { voteFor, votesAgainst } = nums;
  return (voteFor - votesAgainst);
};
