const userPasswordResetService = async(req,dataModel) =>{
    let email = req.body['email'];
    let password = req.body['password'];
    let otp = req.body['otp'];
    let updatedStatus = 1;
    try {
       let count = await otpModel.aggregate([
           {$match: {email:email,otp:otp,status:updatedStatus}},{$count:"total"}
       ]);
       if(count.length === 1){
           let data = await userModel.updateOne({email:email},{password:password});
           return {status:"success",data:data};
        }
        else {
            return {status: "fail", data: "Invalid Request"}
        }
    }
    catch(e){
        return {status:"fail",data:e.message};
    }
}

 module.exports = userPasswordResetService;