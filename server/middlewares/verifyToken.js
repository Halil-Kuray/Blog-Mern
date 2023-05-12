const jwt = require("jsonwebtoken")

const verifyToken = (res, req, next) =>{
    if(!req.headers.authorization) return res.status(403).json( { msg : "Not Authorized"} )

    if(req.headers.authorization && req.headers.authorization.startswith("Bearer ")){

        const token = req.headers.authorization.split(" ")[1]

        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if(err) return res.status(403).json({ msg : "wrong or expired token"})
            else {
                req.user = data // AN obj with the user id as its only property
                next();
            }
        })
    }
}

module.exports = verifyToken