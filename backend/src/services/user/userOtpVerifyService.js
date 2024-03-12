const userOtpVerifyService = async(req,dataModel) =>{
    try{
     
        return {status:"success",data:data};
    }
    catch(e){
        return {status:"fail",data:e.message};
    }
}

 module.exports = userOtpVerifyService;