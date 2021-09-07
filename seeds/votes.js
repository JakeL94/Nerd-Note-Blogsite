const { Vote } = require('../models');

const voteSeeds = [
    {
        id: 1,
        user_id: 3,
        post_id: 1
    },
    {
        id: 2,
        user_id: 1,
        post_id: 2
    },
    {
        id: 3,
        user_id: 2,
        post_id: 3
    },
]

const seedVotes = () => Vote.bulkCreate(voteSeeds);

module.exports = seedVotes;