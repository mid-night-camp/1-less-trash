const userService = require('../services/user-service');

module.exports = {
  login: async function(req, res) {
    const { login_id, pw } = req.body;
    const user = await userService.authenticateUser(login_id, pw);
    if (user) {
      res.json({ success: true, message: '로그인 성공', user });
    } else {
      res.json({ success: false, message: '로그인 실패' });
    }
  },

  register: async function(req, res) {
    const { login_id, pw, region } = req.body;

    const userData = {
      loginId: login_id,
      pw: pw,
      region: region
    };

    try {
      const userId = await userService.registerUser(userData);
      res.json({ success: true, message: '회원가입 성공', userId });
    } catch (error) {
      res.json({ success: false, message: '회원가입 실패' });
    }
  }
};
