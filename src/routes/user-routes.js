const express = require('express');
const HttpStatus= require('http-status');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/',function(req, res){
    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: '서버 접속에 성공하였습니다.'
})});
module.exports = router;
