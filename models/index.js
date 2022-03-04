const Dog = require('./Dog');
const Owner = require('./Owner');
const Walker = require('./Walker');
const Calendar = require('./Calendar');

Owner.hasMany(Dog, {
  foreignKey: 'owner_id',
});

Dog.belongsTo(Owner, {
  foreignKey: 'owner_id',
  onDelete: 'CASCADE',
});

Dog.belongsToMany(Walker, {
  through: Calendar,
  foreignKey: 'dog_id',
  onDelete: 'SET NULL',
});

Walker.belongsToMany(Dog, {
  through: Calendar,
  foreignKey: 'walker_id',
  onDelete: 'CASCADE',
});

Calendar.belongsTo(Dog, {
  foreignKey: 'dog_id',
});

Calendar.belongsTo(Walker, {
  foreignKey: 'walker_id',
});

module.exports = {
  Dog,
  Owner,
  Walker,
  Calendar,
};
