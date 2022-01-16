const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('Second middleware (/users)');
    res.send('<h1>The "Users" Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Second middleware (/)');
    res.send('<h1>The Default Page</h1>');
});

app.listen(3000);