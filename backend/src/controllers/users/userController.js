const dataModel = require("../../models/users/userModel");
const otpModel = require("../../models/users/otpModel");
const userCreateService = require("../../services/user/userCreateService");
const userLoginService = require("../../services/user/userLoginService");
const userProfileUpdateService = require("../../services/user/userProfileUpdateService");
const userEmailVerifyService = require("../../services/user/userEmailVerifyService");
const userOtpVerifyService = require("../../services/user/userOtpVerifyService");
const userPasswordResetService = require("../../services/user/userPasswordResetService");
const userDetailsService = require("../../services/user/userDetailsService");


exports.registration = async(req,res) =>{
    let data = await userCreateService(req,dataModel);
    res.status(200).json(data);
}

exports.login = async(req,res)=>{
    let data = await userLoginService(req,dataModel);
    res.status(200).json(data);  
}

exports.userDeatils = async(req,res)=>{
    let data = await userDetailsService(req,dataModel);
    res.status(200).json(data);  
}

exports.profileUpdate = async(req,res)=>{
    let data = await userProfileUpdateService(req,dataModel);
    res.status(200).json(data);  
}

exports.verifyEmail = async(req,res)=>{
    let data = await userEmailVerifyService(req,dataModel);
    res.status(200).json(data); 
}

exports.verifyOtp = async(req,res)=>{
    let data = await userOtpVerifyService(req,otpModel);
    res.status(200).json(data); 
}

exports.resetPass = async(req,res)=>{
    let data = await userPasswordResetService(req,dataModel);
    res.status(200).json(data); 
}