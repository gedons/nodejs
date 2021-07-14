const path = require('path');
const express = require('express');
const router = express.Router();

//import the product controller
const shopController = require('../controllers/shop');

//  / => GET
router.get('/', shopController.getIndex);

//  / => GET
router.get('/products', shopController.getProducts);

//  / => GET
router.get('/products/:productId', shopController.getProductDetails);

//  / => GET
router.get('/cart', shopController.getCart);

//  / => POST
router.post('/cart', shopController.postCart);

// /=> POST
router.post('/cart-delete-item', shopController.postCartDeleteProduct);

//  / => GET
router.get('/orders', shopController.getOrders);

//  / => GET
router.get('/checkout', shopController.getCheckout);




module.exports = router;