const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {
    const categories = Category.getAll();

    Product.getAll()
        .then(products => {
            res.render('shop/index', {
                title: 'Shopping',
                products: products[0],
                categories: categories,
                path: '/'
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getProducts = (req, res, next) => {
    const categories = Category.getAll();

    Product.getAll()
        .then(products => {
            res.render('shop/products', {
                title: 'Products',
                products: products[0],
                categories: categories,
                path: '/'
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    const products = Product.getProductsByCategoryId(categoryid);
    const categories = Category.getAll();

    res.render('shop/products', {
        title: 'Products',
        products: products,
        categories: categories,
        selectedCategory: categoryid,
        path: '/products'
    });
}




exports.getProduct = (req, res, next) => {
    Product.getById(req.params.productid)
        .then((product) => {
            res.render('shop/product-detail', {
                title: product[0][0].name,
                product: product[0][0],
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        });
}


exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        title: 'Cart',
        path: '/cart'
    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        title: 'Orders',
        path: '/orders'
    });
}


