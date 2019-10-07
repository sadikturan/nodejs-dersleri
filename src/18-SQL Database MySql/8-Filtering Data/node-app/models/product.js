const connection = require('../utility/database');

module.exports = class Product {

    constructor(name, price, imageUrl, description, categoryid) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryid = categoryid;
    }

    saveProduct() {
    }

    static getAll() {
        return connection.execute('SELECT * FROM products');
    }

    static getById(id) {
        return connection.execute('SELECT * FROM products WHERE products.id=?', [id]);
    }

    static getProductsByCategoryId(categoryid) {
    }

    static Update(product) {
    }

    static DeleteById(id) {
    }

}

