const userRepository = require('../repositories/user-repository');
const emailValidator = require('email-validator');

module.exports = {
  authenticateUser: async function(loginId, pw) {
    const user = await userRepository.findByLoginId(loginId);
    if (user && user.pw === pw) {
      return user;
    } else {
      return null;
    }
  },

  isLoginIdTaken: async function(loginId) {
    return await userRepository.isLoginIdTaken(loginId);
  },

  validateRegistrationData: function(userData) {
    const { loginId } = userData;

    if (!emailValidator.validate(loginId)) {
      throw new Error('이메일 형식이 아닙니다.');
    }
  },


  registerUser: async function(userData) {

    this.validateRegistrationData(userData); // 유효성 검증 추가

    const loginIdTaken = await this.isLoginIdTaken(userData.loginId);
    if (loginIdTaken) {
      throw new Error('이미 존재하는 회원입니다.');
    }

    // userData에는 loginId, pw, region 
    // clear, sum 기본값으로 초기화
    try {
      const userId = await userRepository.createUser(
        userData.loginId,
        userData.pw,
        userData.region,
        0,
        0
      );
      return userId;
    } catch (error) {
      throw error;
    }
  }
};
