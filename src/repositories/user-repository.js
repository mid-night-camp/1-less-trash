const db = require('../config/db.js');

module.exports = {
  findByLoginId: function(loginId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM user WHERE login_id = ?', [loginId], (error, results) => {

        if (error) {
          reject(error);
          return;
        }

        if (results.length === 0) {
          resolve(null);
        } else {
          resolve(results[0]);
        }
      });
    });
  },

  isLoginIdTaken: async function(loginId) {
    const user = await this.findByLoginId(loginId);
    return !!user; // 이미 존재하는 아이디인 경우 true 반환
  },

  createUser: function(loginId, pw, region, clear, sum) {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO user (login_id, pw, region, clear, sum) VALUES (?, ?, ?, ?, ?)',
        [loginId, pw, region, clear, sum],
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(result.insertId); // 새로 추가된 사용자의 ID를 반환
        }
      );
    });
  }
};
