const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      isDecimal: true,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'owner',
        key: 'id',
      },
    },
    walker_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'walker',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'category',
=======
    modelName: 'dog',
>>>>>>> 4d812e90228dde77157ccc61c98cba4ba00ec2be
  },
);

module.exports = Dog;
