const { Owner } = require('../models');
const { faker } = require('@faker-js/faker');

const ownerData = [
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
  {
    owner_name: faker.name.firstName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.datatype
      .number({ min: 1230000000, max: 9999999999 })
      .toString(),
    profile_pic: faker.image.avatar(),
  },
];

const seedOwners = () => Owner.bulkCreate(ownerData);

module.exports = seedOwners;
