const itemRepository = require('../repositories/item-repository');

exports.gameResult = async (result) => {

    for (let i = 1; i < result.length; i++) {
        console.log(result);
        var itemResult = await itemRepository.findByName(result[i].name);
        console.log(i, itemResult);
        var beforeSum = itemResult[0].SUM;
        var beforeProbaility = itemResult[0].PROBABILITY;
        if (beforeSum != 0) {
            var beforeClearCount = beforeSum * (beforeProbaility)/100;
            var afterClearCount = beforeClearCount + result[i].clear;
            var afterSum = beforeSum + result[i].count;
            var afterProbaility = (afterClearCount / afterSum) * 100;
            console.log(afterProbaility);
            var finalResult = await itemRepository.modifyProabability(result[i].name, afterProbaility,afterSum);
        } else {
            console.log("통과!");
            var afterSum = beforeSum + result[i].count;
            var afterProbaility = (result[i].clear / result[i].count) * 100;
            console.log(afterProbaility);
            var finalResult = await itemRepository.modifyProabability(result[i].name, afterProbaility,afterSum);
        }

    }

    return new Promise((resolve, reject) => {
        resolve(finalResult);
    });
}