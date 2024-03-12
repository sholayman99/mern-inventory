const userProfileUpdateService = async(req,dataModel) =>{
    try{
      let reqBody = req.body;
      let data = await dataModel.updateOne({email:req.headers['email']},reqBody);
      return {status:"success",data:data};
    }
    catch(e){
      return {status:"success",data:e.message};
    }
}

 module.exports = userProfileUpdateService;