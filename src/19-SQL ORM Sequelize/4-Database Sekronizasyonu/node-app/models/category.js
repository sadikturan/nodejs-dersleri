const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const Category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Category;