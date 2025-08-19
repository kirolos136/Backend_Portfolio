const express = require('express');
const { getAbout } = require('../contollers/aboutController');
const aboutRouter = express.Router();

aboutRouter.get('/',getAbout);

module.exports = {aboutRouter};
