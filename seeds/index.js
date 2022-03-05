const seedDog = require('./dogData');
const seedOwners = require('./ownerData');
const seedWalkers = require('./walkerData');
const seedCalendars = require('./calendarData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedOwners();
  console.log('\n----- OWNERS DATA SEEDED -----\n');

  await seedDog();
  console.log('\n----- DOGS DATA SEEDED -----\n');

  await seedWalkers();
  console.log('\n----- WALKERS DATA SEEDED -----\n');

  await seedCalendars();
  console.log('\n----- CALENDAR DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();
