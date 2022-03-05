const { Dog } = require('../models');
const { faker } = require('@faker-js/faker');

const size = ['small', 'medium', 'large'];

const dogData = [
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
  {
    dog_name: faker.name.firstName(),
    size: size[faker.datatype.number({ min: 0, max: 2 })],
    owner_id: faker.datatype.number({ min: 1, max: 35 }),
  },
];

const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;
