const seedUsers = require('./users');
const seedPosts = require('./posts');
const seedComments = require('./comments');
const seedVotes = require('./votes');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('------- DATABASE SYNCED -------');
  await seedUsers();
  console.log('------- USERS SEEDED -------');

  await seedPosts();
  console.log('------- POSTS SEEDED -------');

  await seedComments();
  console.log('------- COMMENTS SEEDED -------');

  await seedVotes();
  console.log('------- VOTES SEEDED -------');

  process.exit(0);
};

seedAll();
