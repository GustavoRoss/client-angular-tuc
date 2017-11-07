	var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser');
   

app.use(express.static('./client/app'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.all('/*', function(req, res) {
    res.sendfile('./client/app/index.html');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = app;