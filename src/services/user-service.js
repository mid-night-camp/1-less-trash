const userRepository = require('../repositories/user-repository');

module.exports = {
  authenticateUser: async function(loginId, pw) {
    const user = await userRepository.findByLoginId(loginId);
    if (user && user.pw === pw) {
      return user;
    } else {
      return null;
    }
  },

  registerUser: async function(userData) {
    // userData에는 loginId, pw, region 
    // clear, sum, probability 기본값으로 초기화
    try {
      const userId = await userRepository.createUser(
        userData.loginId,
        userData.pw,
        userData.region,
        0,
        0,
        0.0
      );
      return userId;
    } catch (error) {
      throw error;
    }
  }
};
