const Router = require('express').Router();
const {searchLocationFromNaver} = require('../controllers/search');

Router.post('/search', searchLocationFromNaver);



module.exports = Router
