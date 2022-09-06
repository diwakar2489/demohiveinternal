var express = require('express');
//var db = require("../../models");
//const User = db.users;

module.exports.homePage = async (req, res) => {
    // const UserID = req.user.user_id;
    // const user = await User.findOne({ where:{id:UserID }});
    res.render('user/registration', { 
        title: 'Registration',
        //username:user.name,
         message: 'Hello there!'
        });
};