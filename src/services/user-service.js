const userRepository = require('../repositories/user-repository');

module.exports = {
  authenticateUser: async function(loginId, pw) {
    const user = await userRepository.findByLoginId(loginId);
    if (user && user.pw === pw) {
      return user;
    } else {
      return null;
    }
  }
};
