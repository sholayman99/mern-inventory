const updateService = async(req,dataModel)=>{
    try{
          let email = req.headers['email'];
          let id = req.params['id'];
          let reqBody = req.body;
          let data = await dataModel.updateOne({_id:id,UserEmail:email},reqBody);
          return {status:"success" , data:data};
    }
    catch(e){
        return {status:"fail" , data:e.message};
    }
}

module.exports = updateService ;