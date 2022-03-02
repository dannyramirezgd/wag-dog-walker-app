const { Owner } = require('../models');

const ownerData = [
  {
    owner_name: 'Chris',
    password: 'vnkdm,qw',
    user_name: 'chris_rock',
    email: 'chrisRock@gmail.com',
    address: '21 Jump St. Arlington, VA',
    phone: '123456789',
  },
  {
    owner_name: 'Danny',
    password: 'nvk@#,qw',
    user_name: 'dannyMan',
    email: 'dannyR@gmail.com',
    address: '18 Heroku Error Ct. Fairfax, VA',
    phone: '098765432',
  },
  {
    owner_name: 'DK',
    password: 'vio;cz;l!@',
    user_name: 'TipsyDK',
    email: 'tipsydk@gmail.com',
    address: '13 Alcohol Ct. Centreville, VA',
    phone: '890289203',
  },
  {
    owner_name: 'Alex',
    password: '4oigvmc!',
    user_name: 'longHairAlex',
    email: 'longhairAlex@gmail.com',
    address: '90 Vidal Salon St. Alexandria, VA',
    phone: '975943094',
  },
  {
    owner_name: 'Ethan',
    password: '%Govmwp',
    user_name: 'CatMan',
    email: 'catMan@gmail.com',
    address: '27 litter box St. Chantilly, VA',
    phone: '934802933',
  },
];

const seedOwners = () => Owner.bulkCreate(ownerData);

module.exports = seedOwners;
