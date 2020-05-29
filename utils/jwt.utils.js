// Imports
const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '18eedb5767b3ee86863c46a637632df5';

// Exported functions
module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
                userId: userData.id,
                isAdmin: userData.isAdmin
            },
            JWT_SIGN_SECRET,
            {
                expiresIn: '1h'
            })
    },
    parseAuthorization: function(authorization) {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },
    getUserId: function(authorization) {
        var userId = -1;
        var token = module.exports.parseAuthorization(authorization);
        if(token != null) {
            try {
                var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if(jwtToken != null)
                    userId = jwtToken.userId;
            } catch(err) { }
        }
        return userId;
    },
    verifyToken: function (req,res,next) {
        if(!req.headers.authorization){
            return res.status(401).send('Unauthorized request');
        }
        let token = req.headers.authorization.split(" ")[1];
        if (token === null){
            return res.status(401).send('Unauthorized request');
        }
        console.log(token);
        let payload = jwt.verify(token,JWT_SIGN_SECRET);
        if(!payload){
            return res.status(401).send('Unauthorized request');
        }
        req.userId = payload.subject;
        console.log(next);
        next(req,res);

    }
};
