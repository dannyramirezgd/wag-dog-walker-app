const { Owner } = require('../models');

const ownerData = [
  {
    owner_name: 'Chris',
    password: 'vnkdm,qw',
    email: 'chrisRock@gmail.com',
    address: '21 Jump St. Arlington, VA',
    phone: '1234560789',
  },
  {
    owner_name: 'Danny',
    password: 'nvk@#,qw',
    email: 'dannyR@gmail.com',
    address: '18 Heroku Error Ct. Fairfax, VA',
    phone: '0987605432',
  },
  {
    owner_name: 'DK',
    password: 'vio;cz;l!@',
    email: 'tipsydk@gmail.com',
    address: '13 Alcohol Ct. Centreville, VA',
    phone: '8902890203',
  },
  {
    owner_name: 'Alex',
    password: '4oigvmc!',
    email: 'longhairAlex@gmail.com',
    address: '90 Vidal Salon St. Alexandria, VA',
    phone: '9759403094',
  },
  {
    owner_name: 'Ethan',
    password: '%Govmwp',
    email: 'catMan@gmail.com',
    address: '27 litter box St. Chantilly, VA',
    phone: '9348002933',
  },
];

const seedOwners = () => Owner.bulkCreate(ownerData);

module.exports = seedOwners;
