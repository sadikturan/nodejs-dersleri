const products = [
    { id: "13213", name: 'Samsung S6', price: '2000', imageUrl: '1.jpg', description: 'iyi telefon', categoryid: "1" },
    { id: "13214", name: 'Samsung S7', price: '3000', imageUrl: '2.jpg', description: 'iyi telefon', categoryid: "2" },
    { id: "13215", name: 'Samsung S8', price: '4000', imageUrl: '3.jpg', description: 'iyi telefon', categoryid: "1" },
    { id: "13216", name: 'dizüstü bilgisayar', price: '4000', imageUrl: '3.jpg', description: 'iyi bilgisayar', categoryid: "2" },
    { id: "13217", name: 'Buzdolabı', price: '4000', imageUrl: '3.jpg', description: 'iyi buzdolabı', categoryid: "3" }];

module.exports = class Product {

    constructor(name, price, imageUrl, description, categoryid) {
        this.id = (Math.floor(Math.random() * 99999) + 1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryid = categoryid;
    }

    saveProduct() {
        products.push(this);
    }

    static getAll() {
        return products;
    }

    static getById(id) {
        return products.find(i => i.id === id);
    }

    static getProductsByCategoryId(categoryid) {
        return products.filter(i => i.categoryid == categoryid);
    }

    static Update(product) {
        const index = products.findIndex(i => i.id === product.id);

        products[index].name = product.name;
        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
        products[index].categoryid = product.categoryid;
    }

    static DeleteById(id) {
        const index = products.findIndex(i => i.id === id);
        products.splice(index, 1);
    }

}

