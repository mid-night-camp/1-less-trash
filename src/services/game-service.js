// game-service.js
const itemRepository = require('../repositories/item-repository');
const userRepository = require('../repositories/user-repository');

exports.gameResult = async (resultData) => {
  try {
    const { user, data } = resultData;

    const userData = await userRepository.findByName(user.login_id);
    const beforeCount = userData[0].clear;
    const beforeScore = userData[0].sum;

    const afterCount = beforeCount + 1;
    const afterScore = beforeScore + user.score;

    await userRepository.modifyUser(afterCount, afterScore, user.login_id);

    for (const item of data) {
      const itemResult = await itemRepository.findByName(item.name);
      const beforeSum = itemResult[0].SUM;
      const beforeProbability = itemResult[0].PROBABILITY;

      if (beforeSum !== 0) {
        const beforeClearCount = (beforeSum * beforeProbability) / 100;
        const afterClearCount = beforeClearCount + item.clear;
        const afterSum = beforeSum + item.count;
        const afterProbability = (afterClearCount / afterSum) * 100;
        await itemRepository.modifyProabability(item.name, afterProbability, afterSum);
      } else {
        const afterSum = beforeSum + item.count;
        const afterProbability = (item.clear / item.count) * 100;
        await itemRepository.modifyProabability(item.name, afterProbability, afterSum);
      }
    }

    return { success: true, message: 'Game result processed successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to process game result' };
  }
};
