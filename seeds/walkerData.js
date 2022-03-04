const { Walker } = require('../models');

const walkerData = [
  {
    walker_name: 'Justin',
    password: '34iVB#',
    email: 'justinwalker@gmail.com',
    phone: '9890093884',
    hourly_rate: '20.00',
  },
  {
    walker_name: 'Hailey',
    password: '9024io4#',
    email: 'cptwalker@gmail.com',
    phone: '8378409229',
    hourly_rate: '15.00',
  },
];

const seedWalkers = () => Walker.bulkCreate(walkerData);

module.exports = seedWalkers;
