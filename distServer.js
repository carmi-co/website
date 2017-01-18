var express = require('express');
var path = require('path');
var app = express();
var webpack = require('webpack');
var config = require('./webpack.development.config');
const compiler = webpack(config);


app.use(express.static('dist'))
app.use(express.static('public'))
app.use('/public', express.static('public'))
app.use('/dist', express.static('dist'))

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
}).listen(3000);