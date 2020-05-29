//Imports
const express = require('express');
const bodyParser =require('body-parser');
const apiRouter = require('./routes').router;
const cors = require('cors');

//Instantiate server
var server = express();

//Body Parser Configuration
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

//Configure routes
server.use('/api/',apiRouter);

server.listen(8080,function(){
    console.log('Server start');
});
