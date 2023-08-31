const db = require('../config/db.js');

module.exports = {
  findByLoginId: function(loginId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM user WHERE login_id = ?', [loginId], (error, results) => {

        console.log(results);
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

  createUser: function(loginId, pw, region, clear, sum, probability) {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO user (login_id, pw, region, clear, sum, probability) VALUES (?, ?, ?, ?, ?, ?)',
        [loginId, pw, region, clear, sum, probability],
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
