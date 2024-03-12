const userDetailsService = async(req,dataModel) =>{
    try{
        let data = await dataModel.aggregate([{$match:{email:req.headers['email']}}]);
        return {status:"success",data:data};
    }
    catch(e){
        return {status:"success",data:e.message};
    }
}

 module.exports = userDetailsService;