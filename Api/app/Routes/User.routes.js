const express = require('express');
const router = express.Router();

const {
    GetAllUser,
    RegisterUser,
    LoginUser
} = require('../Controllers/Auth/UserController');

module.exports = function (app, url) {
    app.use(url, router);

    router.get('/GetAllUser', GetAllUser);
    router.post('/RegisterUser', RegisterUser);
    router.post('/LoginUser', LoginUser);
}