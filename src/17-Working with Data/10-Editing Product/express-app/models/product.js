const products = [
    { id: "13213", name: 'Samsung S6', price: '2000', imageUrl: '1.jpg', description: 'iyi telefon' },
    { id: "13214", name: 'Samsung S7', price: '3000', imageUrl: '2.jpg', description: 'iyi telefon' },
    { id: "13215", name: 'Samsung S8', price: '4000', imageUrl: '3.jpg', description: 'iyi telefon' }];

module.exports = class Product {

    constructor(name, price, imageUrl, description) {
        this.id = (Math.floor(Math.random() * 99999) + 1).toString();
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

    static getById(id) {
        const product = products.find(i => i.id === id);
        return product;
    }

    static Update(product) {
        const index = products.findIndex(i => i.id === product.id);

        products[index].name = product.name;
        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
    }

}

