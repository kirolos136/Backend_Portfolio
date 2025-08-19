const express = require('express');
const sendMessage = require('../contollers/messageController');
const contactRouter = express.Router();

contactRouter.post('/',sendMessage);

module.exports = {contactRouter};