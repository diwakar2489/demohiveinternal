var db = require("../../models");
console.log(db);
const Projects = db.project_list;

module.exports.ProjectList = async (req,res) =>{
 
  try {
		
		const Project = await Projects.findAll();
		console.log(Project)
		if (Project) {
			
			res.send({ 
				projectInfo:Project,
				status: 1,
				message: "Project List Access Successfully"
			 });
			

		}else{
			res.send({ 
				loginData:"",
				status: 0,
				message: "Project List Not Access"
			 });
		}
    } catch (err) {
		console.log(err);
    }
};

