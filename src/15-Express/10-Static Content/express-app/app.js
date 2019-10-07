const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});
