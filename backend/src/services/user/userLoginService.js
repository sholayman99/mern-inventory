const createToken = require("../../helpers/tokenHelper");

const userLoginService = async(req,dataModel) =>{
    try{
        let data = await dataModel.aggregate([
            {$match:req.body},
            {$project:{"_id":0,"email":1,"password":1,"firstName":1,"lastName":1,"mobile":1}}
        ]);
       
        if(data.length === 1){
            let token = await createToken(data[0]['email']);
            return {status:"success",data:data[0],token:token};
        }
        else{
            return {status:"unauthorized"};
        } 
    }
    catch(e){
        return {status:"success",data:e.message};
    }
}

 module.exports = userLoginService;