var dbConn = require("../config/mysql_connection");
//console.log(dbConn);

var Project = function (list){
    this.id = list.id;
    this.project_name = list.project_name;
    this.status = list.status;
};

//get All Project
Project.getAllProject = (result) =>{
    dbConn.query('select P.id as pid,P.project_name,P.project_title,P.project_code,P.cost,P.currency_code,P.project_start_date,'+
    'P.project_end_date,P.status,concat(UI.firstName," ",UI.lastName) name from tt_internal_project_lists as P '+
    'join tm_users_infos as UI on UI.id = P.created_by ',(err,res)=>{
        if(err){
            console.log(err)
            result(err);
        }else {
            result(null,res);
        }
    })
}

//get Project by id
Project.getProjectById = (ProjectID , result) =>{
    dbConn.query('select P.id as pid,P.project_name,P.project_title,P.project_code,P.cost,P.currency_code,P.project_start_date,'+
    'P.project_end_date,P.status,concat(UI.firstName," ",UI.lastName) name from tt_internal_project_lists as P '+
    'join tm_users_infos as UI on UI.id = P.created_by where P.id = '+ProjectID,(err,res)=>{
        if(err){
            console.log(err)
            result(err);
        }else {
            result(null,res);
        }
    })
}
//get add Project
Project.createProjectInfo = (ProjectReqData, result) =>{
    
    var command = 'INSERT INTO tt_internal_project_lists (project_name,project_title,project_code,cost,currency_code,project_start_date,project_end_date,status) VALUES (?,?,?,?,?,?,?,?)' ;
    //var id = uuidv1();
    dbConn.query(command,[
        ProjectReqData.project_name,
        ProjectReqData.project_title,
        ProjectReqData.project_code,
        ProjectReqData.cost,
        ProjectReqData.currency_code,
        ProjectReqData.project_start_date,
        ProjectReqData.project_end_date,
        ProjectReqData.status],
        (err,res)=>{
        if(err){
            console.log(err)
        }else {
            var project_id = res.insertId;
            console.log('Last insert ID in users', project_id);
            result(null,project_id);
        }
    })
};
//update Project
Project.updateProjectInfo = (id, userReqtData, result) =>{
    if(id){
        var command = 'update tt_internal_project_lists set project_name = ?,project_title =?,project_code = ?,cost = ?,status = ? where id= ?'
        dbConn.query(command,
            [
                userReqtData.project_name,
                userReqtData.project_title,
                userReqtData.project_code,
                userReqtData.cost,
                userReqtData.status,
                id
            ],(err,res)=>{
            if(err){
                console.log(err)
            }else {
                result(null,res);
            }
        })
    }else{
        console.log(err)
    }
    
}
//delete Project
Project.deleteProject = (id, result) =>{
    if(id){
        dbConn.query('delete from tt_internal_project_lists where id= ?',id,(err,res)=>{
            if(err){
                console.log(err)
            }else {
                result(null,res);
            }
        })
    }else{
        console.log(err)
    }
}
module.exports = Project;