var express = require('express');
var app = express();

app.listen(3000, 'localhost', () => {
    console.log('App is listening');
});


app.use(express.static('client'));

//posting json file
app.post('/upload_json', (req, res) => {
    res.send('You made it into the app');
})

module.exports = app;