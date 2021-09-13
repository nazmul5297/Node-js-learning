const UniqueCheckError = require('../../../errors/unique.error');
const userService = require('../services/user.service');

var error1=0;
const unique = async (req, res, next) => {


    
        username=req.body.username;
        console.log("error_username"+  username);
        error1 = await userService.uniqueCheckCreate( username);
        console.log("middle uni "+error1);
        if(error1 > 0){
            next (new UniqueCheckError(error1));
        }
    
}


module.exports = {
    unique
}