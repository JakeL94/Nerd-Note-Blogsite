const { Comment } = require('../models');

const commentSeeds = [
  {
    id: 1,
    comment_text: 'this is a comment',
    user_id: 1,
    post_id: 2,
  },
  {
    id: 2,
    comment_text: 'this is another comment',
    user_id: 2,
    post_id: 3,
  },
  {
    id: 3,
    comment_text: 'this is yet another comment',
    user_id: 3,
    post_id: 1,
  },
]

const seedComments = () => Comment.bulkCreate(commentSeeds);

module.exports = seedComments;