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
  }
};
