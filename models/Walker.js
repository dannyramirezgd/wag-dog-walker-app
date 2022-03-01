const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Walker extends Model {}

Walker.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        walker_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        hourly_rate: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            isDecimal: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Walker;