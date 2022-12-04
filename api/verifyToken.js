const fwt = require("jsonwebtoken");
const User = require("./models/User");

function verify(req, res, next){
    const authHeader =  req.headers.token;  
    if(authHeader){
        const token = authHeader.split("")[1];

        fwt.verify(token, process.env.SECRET_KEY,(err,user)=>{
            if(err) res.status(403).json("O Token não é Valido!");
            req.user = user;
            next();
        });

    }else{
        return res.status(401).json("Você não está Autenticado!");
    }
}

module.exports = verify;