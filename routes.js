//imports

const express = require('express');
const usersController = require('./routes/Users');
const postsController = require('./routes/Posts');
const cityController = require('./routes/Ville');
const JWT = require('' +
    './utils/jwt.utils');

//routes
exports.router = (function () {
    const apiRouter = express.Router();

    //User routes

    apiRouter.route('/test/').get(usersController.test);
    apiRouter.route('/posts/getall/').get(postsController.getPosts);
    apiRouter.route('/users/register/').post(usersController.register);
    apiRouter.route('/users/login/').post(usersController.login);
    apiRouter.route('/verifytoken').post(JWT.verifyToken);

    apiRouter.route('/posts/add/').post(postsController.addPost);
    apiRouter.route('/ville/get/').get(cityController.getAll);

    return apiRouter;
})();
