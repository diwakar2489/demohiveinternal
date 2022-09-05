var express = require('express');
var bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
 var db = require("../../models");
 const User = db.users;


// login authentication

module.exports.loginUser = async (req,res) =>{
  //var token = req.body.token;
  console.log(req.body)
  try {
		const email = req.body.email.toLowerCase();
		const  password  = req.body.password;
		if (!(email && password)) {
			res.send({ status: 0, message: "All input is required" });
			console.log('All input is required');
			res.status(400).send("All input is required");
		}
      
		const user = await User.findOne({ where:{email:email }});
		console.log(user)
		if (user && (await bcrypt.compare(password, user.password))) {
			const token = jwt.sign(
			  { user_id: user.id, email },
				process.env.TOKEN_KEY,
			  {
				expiresIn: "2h",
			  }
			);
			user.token = token;
			//res.status(400).send(user);
			console.log(user.role)
			console.log(user.email)
			console.log(email)
			// if(user.email == email && user.user_role == '1'){
				// res.send({
					// userData:user, 
					// status: 1, 
					// message: "login successfully " 
					// });
			// }else{
				// res.send({ userData:"" , status: 0, message: "Invalid Credentials" });
			// }

		}else{
			res.send({ status: 0, message: "Invalid Credentials" });
			console.log('Invalid Credentials');
			res.status(400).send("Invalid Credentials");
		}
    } catch (err) {
		console.log(err);
    }
};

