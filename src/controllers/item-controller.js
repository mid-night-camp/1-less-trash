const HttpStatus = require('http-status');
const itemService = require('../services/item-service');

exports.findAllItems = async (req, res, next) => {
    const result = await itemService.findAllItems();

    console.log(result);
    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        results: result
    });

}