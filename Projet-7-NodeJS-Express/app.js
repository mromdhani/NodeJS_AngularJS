var express = require('express');
var app = express();

app.get('/',  (req, res) => {
    res.send('<h1> CSFT - Hello World!, from Express JS</h1>');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
