const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);



app.listen(3000, () => {
    console.log('listening on port 3000');
});
