const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const errorController = require('./controllers/errors');
const sequelize = require('./utility/database');

const Category = require('./models/category');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cartItem');
const Order = require('./models/order');
const OrderItem = require('./models/orderItem');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        })
});

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(errorController.get404Page);

Product.belongsTo(Category, { foreignKey: { allowNull: false } });
Category.hasMany(Product);

Product.belongsTo(User);
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

let _user;
sequelize
    //.sync({ force: true })
    .sync()
    .then(() => {

        User.findByPk(1)
            .then(user => {
                if (!user) {
                    return User.create({ name: 'sadikturan', email: 'email@gmail.com' });
                }
                return user;
            }).then(user => {
                _user = user;
                return user.getCart();
            }).then(cart => {
                if (!cart) {
                    return _user.createCart();
                }
                return cart;
            }).then(() => {
                Category.count()
                    .then(count => {
                        if (count === 0) {
                            Category.bulkCreate([
                                { name: 'Telefon', description: 'telefon kategorisi' },
                                { name: 'Bilgisayar', description: 'bilgisayar kategorisi' },
                                { name: 'Elektronik', description: 'elektronik kategorisi' }
                            ]);
                        }
                    });
            });
    })
    .catch(err => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log('listening on port 3000');
});
