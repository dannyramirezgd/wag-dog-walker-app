const Dog = require('./Dog');
const Owner = require('./Owner');
const Walker = require('./Walker');

Dog.belongsTo(Owner, {
  foreignKey: 'owner_id',
});

Owner.hasMany(Dog, {
  foreignKey: 'owner_id',
});

Dog.belongsTo(Walker, {
  foreignKey: 'walker_id',
});

Walker.hasMany(Dog, {
  foreignKey: 'walker_id',
});

module.exports = {
  Dog,
  Owner,
  Walker,
};
