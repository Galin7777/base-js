/**
 * @typedef {import('./types').Votes} MyVotes
 */

/**
 * @function getVoteCount
 * @param {MyVotes} votes
 * @returns {number}
 */

export const getVoteCount = (votes) => votes.upvotes - votes.downvotes;
