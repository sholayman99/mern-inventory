const jwt = require("jsonwebtoken");

const createToken = async(data)=>{

 const payload = {exp:Math.floor(Date.now()/1000)+ 24*60*60 , data:data};
 return await jwt.sign(payload,'secret123abc');

}

module.exports = createToken;