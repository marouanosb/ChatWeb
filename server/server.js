const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
var User = require('server/models/User.js');
var Message = require('server/models/Message.js');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_STRING)

app.listen(PORT, ()=>{console.log(`Server Running on port ${PORT}.`)})
