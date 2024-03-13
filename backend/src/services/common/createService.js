const createService = async(req,dataModel)=>{
    try{
          let reqBody = req.body;
          reqBody.UserEmail = req.headers['email'];
          let data = await dataModel.create(reqBody);
          return {status:"success" , data:data};
    }
    catch(e){
        return {status:"fail" , data:e.message};
    }
}

module.exports = createService ;