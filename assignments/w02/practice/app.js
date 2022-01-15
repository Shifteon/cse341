// Core modules
const path = require('path');

// NPM modules
const express = require('express');
const bodyParser = require('body-parser');

// Express app
const app = express();

// Our view engine
app.set('view engine', 'ejs');

// Custom routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop'); 

// Parser and our public path
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// use our routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start the server
app.listen(3000);