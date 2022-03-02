const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Walker extends Model {}

Walker.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        walker_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4],
            },
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [4],
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10, 10],
            },
        },
        hourly_rate: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            isDecimal: true,
        },
        //converting times to a string that will be parsed: "MOm => Monday morning", "TUe => Tuesday Evening"
        times_available: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'walker',
    }
)

module.exports = Walker
