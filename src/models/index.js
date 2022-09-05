const dbConfig = require("../Config/env");
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
    console.log('connected')
}).catch(err =>{
    console.log('Errorff' + err)});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../migration/user")(sequelize, Sequelize,DataTypes);
module.exports = db;


 // db.Category.hasOne(db.JobPosting,{foreignKey:'job_category_id'});
 // db.JobPosting.belongsTo(db.Category,{foreignKey:'job_category_id'});