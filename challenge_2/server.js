var express = require('express');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.listen(3000, 'localhost', () => {
    console.log('App is listening');
});

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client'));


app.get('/', (req, res) => {
    res.send('/');
})

//posting json file
app.post('/upload', bodyParser.json(), (req, res) => {
    var myBody = req.body;
    console.log(myBody.Submit);
    res.send(myBody);
})

module.exports = app;