const { Walker } = require('../models');

const walkerData = [
  {
    walker_name: 'Justin',
    password: '34iVB#',
    user_name: 'JustinWalker',
    email: 'justinwalker@gmail.com',
    phone: '989093884',
    hourly_rate: '20.00',
    times_available: 'MOmTUmWEmTHmFRm',
  },
  {
    walker_name: 'Hailey',
    password: '9024io4#',
    user_name: 'CptWalker',
    email: 'cptwalker@gmail.com',
    phone: '837849229',
    hourly_rate: '15.00',
    times_available: 'SAmSUmSUaSUe',
  },
];

const seedWalkers = () => Walker.bulkCreate(walkerData);

module.exports = seedWalkers;
