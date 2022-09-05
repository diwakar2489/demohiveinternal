const responseCode = require('../utils/constant');

exports.successResponse = (message,data, result) =>{
    result(null,{status : true,message:message,data:data
    });
};
exports.errorResponse = (message, result) =>{
    result(null,{status : false,message:message
    });
};
exports.validationUserErrors = (res,errors) => {
    return res.status(responseCode.HTTP_UNPROCESSABLE_ENTITY).json({
        status: 'failed',
        code:responseCode.HTTP_UNPROCESSABLE_ENTITY,
        message: "Please enter required field",
        errors:errors
    })
}
exports.validationErrors = (res,errors) => {
    return res.status(responseCode.HTTP_UNPROCESSABLE_ENTITY).json({
        status: 'failed',
        code:responseCode.HTTP_UNPROCESSABLE_ENTITY,
        message: "Please enter required field",
        errors:errors
    })
}

