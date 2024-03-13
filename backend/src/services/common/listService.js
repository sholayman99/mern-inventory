const listService = async(req,dataModel,SearchArray)=>{
    try{
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchValue = req.params.searchKeyword;
        let UserEmail=req.headers['email'];

        let skipRow = (pageNo - 1) * perPage;

        let data;
         
       
        if (searchValue!=="0") {
            let SearchQuery = {$or:SearchArray}
            data = await dataModel.aggregate([
                    {$match: {UserEmail:UserEmail}},
                    {$match: SearchQuery},
                    {
                    $facet:{
                        Total:[{$count: "count"}],
                        Rows:[{$skip: skipRow}, {$limit: perPage}],
                    }
                }
            ])
        }
        else {
            data = await dataModel.aggregate([
                {$match: {UserEmail:UserEmail}},
                {
                    $facet:{
                        Total:[{$count: "count"}],
                        Rows:[{$skip: skipRow}, {$limit: perPage}],
                    }
                }
            ])

        }
        return {status:"success" , data:data};

    }
    catch(e){
        return {status:"fail" , data:e.message};
    }
}

module.exports = listService ;