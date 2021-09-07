const { Post } = require('../models');

const postSeeds = [
  {
    id: 1,
    title: 'Post :3',
    post_url: 'this is a post',
    user_id: 1
  },
  {
    id: 2,
    title: 'Posting a post',
    post_url: 'I made this post :)',
    user_id: 2
  },
  {
    id: 3,
    title: 'Post posterson',
    post_url: 'Making this post for fun',
    user_id: 3
  }
]

const seedPosts = () => Post.bulkCreate(postSeeds);

module.exports = seedPosts;