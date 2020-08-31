const db = require('../config/dbConfig');

module.exports = {

    getProducts: async () => {
        return new Promise((resolve, reject) => {
            db.pool.query('SELECT * FROM products', (err, rows) => {
                if (err) throw err;
                resolve(rows)
            })
        })
    },
    getProduct: async (id) => {
        return new Promise((resolve, reject) => {
            db.pool.query('SELECT * FROM products WHERE id = ?', [id],  (err, rows) => {
                if (err) throw err;
                resolve(rows)
            })
        })

    },
    createProduct: async (body) => {
        return new Promise((resolve, reject) => {
            db.pool.query('INSERT INTO products SET ?', body,  (err, res) => {
                if (err) throw err;
                resolve(res.insertId)
            })
        })

    },
    updateProduct: async (body, id) => {
        return new Promise((resolve, reject) => {
            db.pool.query('UPDATE products SET  ? Where ID = ?', [body, id],  (err, res) => {
                if (err) throw err;
                resolve(res.changedRows)
            })
        })

    },
    deleteProduct: async (id) => {
        return new Promise((resolve, reject) => {
            db.pool.query('DELETE FROM products Where ID = ?', [id],  (err, res) => {
                if (err) throw err;
                resolve(res.affectedRows)
            })
        })

    }
}