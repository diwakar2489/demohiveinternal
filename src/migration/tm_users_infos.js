'use strict';
const {Sequelize} = require("sequelize");
module.exports = (sequelize,DataTypes) => {
    const tm_users_infos = sequelize.define("tm_users_infos",  {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        firstName:{type: DataTypes.STRING,allowNull: true},
        lastName:{type: DataTypes.STRING,allowNull: true},
        contactNum:{type: DataTypes.STRING,allowNull: true},
        designation:{type: DataTypes.STRING,allowNull: true},
        profileImage:{type: DataTypes.STRING,allowNull: true},
		createdBy:{type: DataTypes.INTEGER(10),allowNull: true},
		createdAt: {
		  type: 'TIMESTAMP',
		  field: 'createdDate',
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		  allowNull: true
		},
		updatedBy:{type: DataTypes.INTEGER(10),allowNull: true},
		updatedAt: {
		  type: 'TIMESTAMP',
		  field: 'updatedDate',
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		  allowNull: true
		},
		});
    
    return tm_users_infos;
};





