const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const admin = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', admin.routes);
app.use(userRoutes);



app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});
