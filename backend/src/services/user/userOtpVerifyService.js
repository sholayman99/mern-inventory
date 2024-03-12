const userOtpVerifyService = async(req,dataModel) =>{
    let email = req.params['email'];
    let otp = req.params['otp'];
    let status = 0;
    let updatedStatus = 1;

   try {
       let count = await dataModel.aggregate([
           {$match:{email:email,otp:otp,status:status}},{$count:"total"}
       ]);
       if(count.length === 1){
           let data = await dataModel.updateOne(
               {email:email,otp:otp,status:status},
               {email:email,otp:otp,status:updatedStatus});
            return {status:'success',data:data};
       } else {
            return {status: "fail", data:"Invalid OTP Code"};
       }
    }
    catch(e){
        return {status:"fail",data:e.message};
    }
}

 module.exports = userOtpVerifyService;