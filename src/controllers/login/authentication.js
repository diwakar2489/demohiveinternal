var md5 = require('md5');
const jwt = require("jsonwebtoken");
var db = require("../../models");
const User = db.users;

// login authentication

module.exports.loginUser = async (req,res) =>{
  //var token = req.body.token;
  
  try {
		const email = req.body.email;
		const  password  = req.body.password;
		if (!(email && password)) {
			res.send({ status: 0, message: "All input is required" });
			console.log('All input is required');
			res.status(400).send("All input is required");
		}
      
		const user = await User.findOne({ where:{email:email,password:md5(password) }});
		//console.log(user)
		if (user) {
			const token = jwt.sign(
			  { user_id: user.id, email },
				process.env.TOKEN_KEY,
			  {
				expiresIn: "2h",
			  }
			);
			user.token = token;
			if(user.email == email && user.user_role == '1'){
				res.send({
						userData:user, 
						'token':user.token,
						status: 1, 
						message: "login successfully " 
					});
			}else{
				res.send(
					{ 
						loginData:"" , 
						status: 0, 
						message: "Invalid Credentials"
				 	});
			}

		}else{
			res.send({ 
				loginData:"",
				status: 0,
				message: "Invalid Credentials"
			 });
		}
    } catch (err) {
		console.log(err);
    }
};

