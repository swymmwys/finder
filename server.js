const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static(__dirname + '/build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + './build/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});