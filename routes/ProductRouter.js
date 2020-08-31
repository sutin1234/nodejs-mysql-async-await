const express = require('express')

const mProduct = require('../modules/ProductModule')

module.exports = function () {
    const router = express.Router()

    router.get('/', async (req, res, next) => {
        const p = await mProduct.getProducts()
        res.json(p)
    })

    router.get('/:id', async (req, res, next) => {
        const param = req.params.id
        const p = await mProduct.getProduct(param)
        res.json(p)
    })

    router.post('/', async (req, res, next) => {
        let body = req.body
        const created_at = { created_at: new Date() }
        body = { ...body, ...created_at }
        const p = await mProduct.createProduct(body)
        res.json(p)
    })

    router.put('/:id', async (req, res, next) => {
        const param = req.params.id
        let body = req.body

        console.log(param);
        const created_at = { created_at: new Date() }
        body = { ...body, ...created_at }
        const p = await mProduct.updateProduct(body,param)
        res.json(p)
    })

    
    router.delete('/:id', async (req, res, next) => {
        const param = req.params.id
        const p = await mProduct.deleteProduct(param)
        res.json(p)
    })

    return router
}