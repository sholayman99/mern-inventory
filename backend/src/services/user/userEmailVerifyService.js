const sendEmailUtility = require("../../helpers/emailHelper");
const otpModel = require("../../models/otpModel")

const userEmailVerifyService = async(req,dataModel) =>{
    try{
        let email = req.params['email'];
        let code = Math.round(Math.floor(100000 + Math.random()*900000));
        let count = await dataModel.aggregate([{$match:{email:email}},{$count:"total"} ]);
        if(count.length === 1){
            let data = await otpModel.create({email:email,otp:code});
            let sendEmail = await sendEmailUtility(email,`Your Otp Verification Code Is : ${code}` , "Mern Inventory Verification");
            return {status:"success",data:data , sendEmail:sendEmail};
        }
        else{
            return {status:'fail',data:"No user found!"}
        }
    }
    catch(e){
        return {status:"fail",data:e.message};
    }
}

 module.exports = userEmailVerifyService;