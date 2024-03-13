const dropDownService = async(req,dataModel,projection)=>{
    try{
          let UserEmail = req.headers['email'];
          let reqBody = req.body;
          let data = await dataModel.aggregate([
            {$match:{UserEmail:UserEmail}},{$project:projection}
          ]);
          return {status:"success" , data:data};
    }
    catch(e){
        return {status:"fail" , data:e.message};
    }
}

module.exports = dropDownService ;