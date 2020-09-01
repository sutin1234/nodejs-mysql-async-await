const express = require('express')
const mUser = require('../modules/UserModule')

module.exports = function () {
    const router = express.Router()

    router.post('/login', async (req, res, next) => {
        const body = req.body
        const p = await mUser.getUserLogin(body.username, body.password)
        res.json(p)
    })
    return router
}