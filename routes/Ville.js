const models = require('../models');

module.exports = {

    getAll: function (req,res) {
        models.ville.findAll({
            attributes: ['id','nom']
        }).then(function (posts) {
            return res.status(201).json(posts);
        });

    }
}
