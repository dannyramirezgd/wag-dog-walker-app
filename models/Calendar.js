const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Calendar extends Model {}

Calendar.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /([01]?[0-9]|2[0-3]):[0-5][0-9]/,
      },
    },
    walker_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'walker',
        key: 'id',
      },
    },
    dog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'dog',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Calendar',
  },
);

module.exports = Calendar;
