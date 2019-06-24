var jwt = require('jsonwebtoken');
var config = require('../config')

//checking user token
function checkToken (req,res,next){
    var token = req.headers['x-access-token'];
   //if not token is provides a 403 error will be sent 
    if (!token)
    return res.status(403).send({auth:false,message:'No token provided'});

    //if the token doesnt exists a 500 erro will be sent 
    jwt.verify(token, config.web.secret, function (err,decoded){
        if(err) return res.status(500).send({auth:false,message:'failed to authenticate token.'});

        req.userId = decoded.id
        next();
    })
}

//checkToken will be exported so it will be accessible to other files
module.exports=checkToken;