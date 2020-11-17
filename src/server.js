const express = require("express");
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/test", function (req, res) {
    res.send('test');
});

app.get("/bundle/generate", function (req, res) {
    const fs = require('fs');

    fs.appendFile('./dist/mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.send("Bundle generate");
});

app.get('/bundle/play', function (req, res) {
    res.sendFile(path.join(__dirname + '/play.html'));
});

app.listen(9000);
