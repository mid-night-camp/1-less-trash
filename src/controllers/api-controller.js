const HttpStatus = require('http-status');
const apiService = require('../services/api-service');

exports.recycling = async (req, res, next) => {
    const result = await apiService.recycling();
    console.log(result);
    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        results: result
    });
};

