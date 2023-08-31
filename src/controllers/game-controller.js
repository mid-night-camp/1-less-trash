const HttpStatus = require('http-status');
const gameService = require('../services/game-service');

exports.gameResult = async (req, res) => {

    const result = await gameService.gameResult(req.body);

    console.log('결과는',result);
    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
    });
}