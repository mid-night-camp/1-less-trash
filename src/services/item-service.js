const itemRepository = require('../repositories/item-repository');

exports.findAllItems = () => {
    return new Promise((resolve, reject) => {

        const results = itemRepository.findAllItems();

        resolve(results);
    })
}