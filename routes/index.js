var express = require('express');
var router = express.Router();
const { AppDataSource } = require("../db/data-source")

/* GET home page. */
router.get('/', async (req, res, next) => {
    const productRepo = AppDataSource.getRepository("Product");
    const products = await productRepo.find();
    console.log(products)

    res.render('index', { title: 'Express', products });
});

module.exports = router;
