
const response = require('../../config/response');
const responseCode = require('../../utils/constant');
const project_Model = require('../../models/projectListModel');
const paginate = require('jw-paginate');

module.exports.List = async (req,res) =>{
 //console.log(req);
  try {
	  const pageSize = 10;
	 const page = parseInt(req.query.page) || 1;
	 const skip = (page-1)*pageSize;
	  //console.log();
	  project_Model.getAllCountProject((error, projectscount) => {
		  
	  
	  
	project_Model.getAllProject(page,pageSize,(error, projects) => {
		
			
			if(projects){
				//project_Model.getProjectCount((error, projectsCount) => {
				// const pager = paginate(projects.length, page, pageSize);
				
				// get page of items from items array
				//const DataItems = projects.slice(pager.startIndex, pager.endIndex + 1);
				 const noOfResult = projectscount;
				const totalPages = Math.ceil(noOfResult / pageSize);
					response.successResponse("Project List fetch successfully",{projects}, (error, result) => {
						res.status(responseCode.HTTP_OK).json({projects});
					});
				//});
			}else{
				response.errorResponse("Something went wrong!", (error, result) => {
						res.status(responseCode.HTTP_NOT_FOUND).json(result);
				});
			}
		});
	
		});
	} catch (e) {
        //console.log(e.message);
        response.errorResponse('Something went wrong!.',(error,result) =>{
            res.status(responseCode.HTTP_INTERNAL_SERVER_ERROR).json(result);
        });
    }
};
module.exports.add = async (req,res) =>{

	try {
			var requestData = {
				project_name:req.body.project_name,
				project_title:req.body.project_title,
				project_code:req.body.project_code,
				cost:req.body.cost,
				currency_code:req.body.currency_code,
				project_start_date:req.body.project_start_date,
				project_end_date:req.body.project_end_date,
				created_by:'25',
				status:'1',
			}
			project_Model.createProjectInfo(requestData,(error, projects) => {
				console.log(projects);
				if(projects){
					response.successResponse("Project Add Info successfully",projects, (error, result) => {
						res.status(responseCode.HTTP_OK).json(result);
					});
				}else{
					response.errorResponse("Something went wrong!", (error, result) => {
							res.status(responseCode.HTTP_NOT_FOUND).json(result);
					});
				}
			});
		
		  
	  } catch (e) {
		  //console.log(e.message);
		  response.errorResponse('Something went wrong!.',(error,result) =>{
			  res.status(responseCode.HTTP_INTERNAL_SERVER_ERROR).json(result);
		  });
	  }
  };
module.exports.edit = async (req,res) =>{
 
	try {
		let ID = req.body.id;
		  project_Model.getProjectById(ID,(error, projects) => {
			  console.log(projects);
			  if(projects){
				  response.successResponse("Project Edit Info successfully",projects, (error, result) => {
					  res.status(responseCode.HTTP_OK).json(result);
				  });
			  }else{
				  response.errorResponse("Something went wrong!", (error, result) => {
						  res.status(responseCode.HTTP_NOT_FOUND).json(result);
				  });
			  }
		  });
	  } catch (e) {
		  //console.log(e.message);
		  response.errorResponse('Something went wrong!.',(error,result) =>{
			  res.status(responseCode.HTTP_INTERNAL_SERVER_ERROR).json(result);
		  });
	  }
  };
  module.exports.update = async (req,res) =>{
	try {
		let ID = req.body.id;
		var requestData = {
			project_name:req.body.project_name,
			project_title:req.body.project_title,
			project_code:req.body.project_code,
			cost:req.body.cost,
			created_by:'25',
			status:req.body.status,
		}
		  project_Model.updateProjectInfo(ID,requestData,(error, projects) => {
			  console.log(projects);
			  if(projects){
				  response.successResponse("Project Update successfully",projects, (error, result) => {
					  res.status(responseCode.HTTP_OK).json(result);
				  });
			  }else{
				  response.errorResponse("Something went wrong!", (error, result) => {
						  res.status(responseCode.HTTP_NOT_FOUND).json(result);
				  });
			  }
		  });
	  } catch (e) {
		  //console.log(e.message);
		  response.errorResponse('Something went wrong!.',(error,result) =>{
			  res.status(responseCode.HTTP_INTERNAL_SERVER_ERROR).json(result);
		  });
	  }
  };
  module.exports.delete = async (req,res) =>{
	try {
		let ID = req.body.id;
		
		  project_Model.deleteProject(ID,(error, projects) => {
			  console.log(projects);
			  if(projects){
				  response.successResponse("Project Delete successfully",projects, (error, result) => {
					  res.status(responseCode.HTTP_OK).json(result);
				  });
			  }else{
				  response.errorResponse("Something went wrong!", (error, result) => {
						  res.status(responseCode.HTTP_NOT_FOUND).json(result);
				  });
			  }
		  });
	  } catch (e) {
		  //console.log(e.message);
		  response.errorResponse('Something went wrong!.',(error,result) =>{
			  res.status(responseCode.HTTP_INTERNAL_SERVER_ERROR).json(result);
		  });
	  }
  };

