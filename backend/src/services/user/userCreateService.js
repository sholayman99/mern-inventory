const userCreateService = async(req,dataModel) =>{
    try{
      let reqBody = req.body;
      let data = await dataModel.create(reqBody);
      return {status:"success",data:data};
    }
    catch(e){
      return {status:"success",data:e.message};
    }
}

 module.exports = userCreateService;