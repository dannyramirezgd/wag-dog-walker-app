const Dog = require('./Dog');
const Owner = require('./Owner');
const Walker = require('./Walker');

Owner.hasMany(Dog, {
  foreignKey: 'owner_id',
});

Dog.belongsTo(Owner, {
  foreignKey: 'owner_id',
  onDelete: 'CASCADE',
});

Dog.belongsTo(Walker, {
  foreignKey: 'walker_id',
  onDelete: 'SET NULL',
});

Walker.hasMany(Dog, {
  foreignKey: 'walker_id',
});

module.exports = {
  Dog,
  Owner,
  Walker,
};
