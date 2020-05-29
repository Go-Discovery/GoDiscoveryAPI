const models =require('../models');
const JWT = require('../utils/jwt.utils');

module.exports = {
    getPosts: function(req,res){
        let type = req.query.type;
        let ville = req.query.city;
        console.log(type+" "+ville);
        if( ville === "" && type === ""){
            console.log("1");
            models.post.findAll({
                attributes: ['id','message',['createdAt','date'],'titre','type'],
                include: [
                    {model : models.ville,attributes:['id','nom'],required:true},
                    {model: models.User,attributes: ['id',['username','author']],required:true}],
                order:[['createdAt','DESC'],[models.ville,'id','ASC']]
            }).then(function (posts) {
                return res.status(201).json(posts);
            });
        }
        else if( ville === ""){
            console.log("2");
            models.post.findAll({
                attributes: ['id','message',['createdAt','date'],'titre','type'],
                include: [
                    {model : models.ville,attributes:['id','nom'],required:true},
                    {model: models.User,attributes: ['id',['username','author']],required:true}],
                where: {type: type},
                order:[['createdAt','DESC'],[models.ville,'id','ASC']]
            }).then(function (posts) {
                return res.status(201).json(posts);
            });
        }
        else if( type === ""){
            console.log("3");

            models.post.findAll({
                attributes: ['id','message',['createdAt','date'],'titre','type'],
                include: [
                    {model : models.ville,attributes:['id','nom'],required:true},
                    {model: models.User,attributes: ['id',['username','author']],required:true}],
                where: {villeId: ville},
                order:[['createdAt','DESC'],[models.ville,'id','ASC']]
            }).then(function (posts) {

                return res.status(201).json(posts);
            });
        }
        else {
            console.log("4");
            models.post.findAll({
                attributes: ['id', 'message', ['createdAt', 'date'], 'titre', 'type'],
                include: [
                    {model: models.ville, attributes: ['id', 'nom'], required: true},
                    {model: models.User, attributes: ['id', ['username', 'author']], required: true}],
                where: {villeId: ville, type: type},
                order:[['createdAt','DESC'],[models.ville,'id','ASC']]
            }).then(function (posts) {
                return res.status(201).json(posts);
            });
        }
    },

    addPost: function (req,res) {
        JWT.verifyToken(req,res, (req,res) =>{
            let messages = req.body.text;
            let title = req.body.title;
            let ville = req.body.ville;
            let type = req.body.type;
            let user = JWT.getUserId(req.headers.authorization);
            models.post.create({
                villeId: ville,
                UserId: user,
                message: messages,
                titre: title,
                type: type
            }).then(g => {return res.status(201).json({'execution':'pass'});});
        });
    },

    add: function (req,res) {
        res.status(201).json({'error':'not'});
    }

};
