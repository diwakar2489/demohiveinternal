'use strict';
const {Sequelize} = require("sequelize");
module.exports = (sequelize,DataTypes) => {
    const Tm_Users = sequelize.define("tm_users",  {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
		vid:{type: DataTypes.INTEGER,allowNull: true},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		password: {type: Sequelize.DataTypes.STRING(255),allowNull: true},
		user_role:{type: DataTypes.INTEGER,allowNull: true},
		createdAt: {
		  type: 'TIMESTAMP',
		  field: 'created_date',
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		  allowNull: true
		},
		createdBy:{type: DataTypes.INTEGER,allowNull: true},
		updatedAt: {
		  type: 'TIMESTAMP',
		  field: 'updated_on',
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		  allowNull: true
		},
		updatedBy:{type: DataTypes.INTEGER,allowNull: true},
		reset_pwd:{type: DataTypes.INTEGER,allowNull: true},
		status :{
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue : 0
			},
		hr_approved:{type: DataTypes.INTEGER,allowNull: true},
		});
    
    return Tm_Users;
};





