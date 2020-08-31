const mysql = require('mysql')
const configEnv = require('dotenv').config()

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 100,
};

const pool = mysql.createPool(config);
module.exports = {
    checkConnection: () => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, conn) => {
                console.log('mysql connected ', pool);
                if (err) {
                    console.log('mysql connect falied ', err.errno);
                    return reject(err);
                }
                resolve(conn.release());
            });
        });
    },
    pool,
    closeConnection: () => pool.end(),
};
