const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Owner extends Model {}

Owner.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4],
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        hooks: {
            async beforeCreate(newOwnerData) {
                newOwnerData.password = await bcrypt.hash(
                    newOwnerData.password,
                    10
                )
                return newUserData
            },
            async beforeUpdate(updatedOwnerData) {
                updatedOwnerData.password = await bcrypt.hash(
                    updatedOwnerData.password,
                    10
                )
                return updatedOwnerData
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'owner',
    }
)
