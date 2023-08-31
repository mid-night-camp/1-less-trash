const userService = require('../services/user-service');

module.exports = {
  login: async function(req, res) {
    const { login_id, pw } = req.body;
    const user = await userService.authenticateUser(login_id, pw);
    if (user) {
      res.json({ success: true, message: 'Login successful', user });
    } else {
      res.json({ success: false, message: 'Login failed' });
    }
  }
};
