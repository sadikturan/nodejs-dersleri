const products = [
    { name: 'Samsung S6', price: '2000', imageUrl: '1.jpg', description: 'iyi telefon' },
    { name: 'Samsung S7', price: '3000', imageUrl: '2.jpg', description: 'iyi telefon' },
    { name: 'Samsung S8', price: '4000', imageUrl: '3.jpg', description: 'iyi telefon' }];

module.exports = class Product {

    constructor(name, price, imageUrl, description) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    saveProduct() {
        products.push(this);
    }

    static getAll() {
        return products;
    }

}

// const products = Product.getAll();

// const p = new Product('Samsung',2000,'1jpg','iyi telefon');
// p.saveProduct();
