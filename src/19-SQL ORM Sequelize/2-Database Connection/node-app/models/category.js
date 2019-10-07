const connection = require('../utility/database');

module.exports = class Category {
    constructor(name, description) {
        this.id = (categories.length + 1).toString();
        this.name = name;
        this.description = description;
    }

    saveCategory() {
        return connection.execute('INSERT INTO categories(name,description) VALUES(?,?)', [this.name, this.description]);
    }

    static getAll() {
        return connection.execute('SELECT * FROM categories');
    }

    static getById(id) {
        return connection.execute('SELECT * FROM categories WHERE id=?', [id]);
    }

    static update(category) {
        return connection.execute('UPDATE categories SET categories.name=?,categories.description=?', [category.name, category.description]);
    }

    static deleteById(id) {
        return connection.execute('DELETE FROM categories WHERE id=?', [id]);
    }
}