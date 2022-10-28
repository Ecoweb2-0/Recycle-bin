const ErrorHandler = require('../utils/errorHandler')

module.exports=(err,req,res,next)=>{
    err.statusCode= err.message || 500; err.message= err.message ||"Internal Server Errror"
    res.status(err.statusCode).json({
        sucess : false,
        message: err.stack
    })
}