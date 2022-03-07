const { Walker } = require('../models');
const { faker } = require('@faker-js/faker');

const walkerData = [
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
  {
    walker_name: faker.name.firstName(),
    password: 'password',
    email: faker.internet.email(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    hourly_rate: faker.datatype.float({
      min: 10,
      max: 25,
      precision: 0.01,
    }),
    profile_pic: faker.image.avatar(),
  },
];

const seedWalkers = () => Walker.bulkCreate(walkerData);

module.exports = seedWalkers;
