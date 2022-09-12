const dbConfig = require("../config/env");
const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    logging: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});



sequelize.authenticate().then(() =>{
    console.log('connected sequelize')
}).catch(err =>{
    console.log('Errorff' + err)});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../migration/user")(sequelize, Sequelize,DataTypes);
db.tm_users_infos = require("../migration/tm_users_infos")(sequelize, Sequelize,DataTypes);
db.project_list = require("../migration/project_list")(sequelize, Sequelize,DataTypes);
module.exports = db;


 
 
 db.tm_users_infos.hasOne(db.project_list,{foreignKey:'created_by'});
 db.project_list.belongsTo(db.tm_users_infos,{foreignKey:'id',as:'UserDetails'});