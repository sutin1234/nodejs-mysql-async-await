const db = require('../config/dbConfig');

module.exports = {

  getUserLogin: async (username, password) => {
        return new Promise((resolve, reject) => {
            db.pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password],  (err, rows) => {
                if (err) throw err;
                resolve(rows)
            })
        })

    }
}