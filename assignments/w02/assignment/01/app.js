const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log("The users path");
    res.send("<h1>This is the users path!</h1>");
});

app.use('/', (req, res, next) => {
    console.log("The / path");
    res.send("<h1>This is the / path!</h1>");
});

app.listen(3000);