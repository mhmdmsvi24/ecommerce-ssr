var express = require('express');
var router = express.Router();
const { AppDataSource } = require("../db/data-source")

/* GET home page. */
router.get('/', async (req, res, next) => {
    const productRepo = AppDataSource.getRepository("Product");
    const products = await productRepo.find();
    const nonFeatured = products.filter(item => !item.featured);
    const featured = products.filter(item => item.featured);

    res.render('index', { title: 'Express', products: nonFeatured, featured });
});

module.exports = router;
