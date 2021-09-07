const { User } = require('../models');

const userSeeds = [
  {
    id: 1,
    username: 'OGUser',
    email: 'OGUser123@mail.ru',
    password: 'Password' 
  },
  {
    id: 2,
    username: 'CoolUser',
    email: 'CoolUser@mail.ru',
    password: 'Password1234' 
  },
  {
    id: 3,
    username: 'BestUser',
    email: 'BestUser@mail.ru',
    password: 'Password5678' 
  }
]

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;