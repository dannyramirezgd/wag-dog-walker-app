const { Dog } = require('../models');

const dogData = [
  {
    dog_name: 'Hilo',
    size: 'small',
    owner_id: '2',
    walker_id: '1',
  },
  {
    dog_name: 'Flash',
    size: 'small',
    owner_id: '2',
    walker_id: '1',
  },
  {
    dog_name: 'Sam',
    size: 'small',
    owner_id: '3',
    walker_id: '1',
  },
  {
    dog_name: 'Jindo',
    size: 'medium',
    owner_id: '4',
    walker_id: '1',
  },
  {
    dog_name: 'Carrot',
    size: 'large',
    owner_id: '5',
    walker_id: '1',
  },
  {
    dog_name: 'Blue',
    size: 'large',
    owner_id: '1',
    walker_id: '1',
  },
];

const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;
