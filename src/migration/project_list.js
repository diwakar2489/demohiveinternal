'use strict';
const {Sequelize} = require("sequelize");
module.exports = (sequelize,DataTypes) => {
    const Internal_project_list = sequelize.define("tt_internal_project_list",  {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        project_name:{type: DataTypes.STRING,allowNull: false},
        project_title:{type: DataTypes.STRING,allowNull: false},
        project_code:{type: DataTypes.STRING,allowNull: false},
        cost:{type: DataTypes.DOUBLE,allowNull: false},
		currency_code:{type: DataTypes.INTEGER,allowNull: false},
        project_start_date: {
            type: Sequelize.DATE,
        },
        project_end_date: {
            type: Sequelize.DATE,
        },
		status :{
				type: Sequelize.INTEGER(1),
				allowNull: false,
				defaultValue : 0
			},
        created_by:{type: DataTypes.INTEGER,allowNull: true},
       
        createdAt: {
            type: 'TIMESTAMP',
            field: 'created_on',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true
          },
        updated_By:{type: DataTypes.INTEGER,allowNull: true},
        updatedAt: {
            type: 'TIMESTAMP',
            field: 'updated_On',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true
          },
		});
    
    return Internal_project_list;
};