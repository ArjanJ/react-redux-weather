const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const express = require('express');

const app = express();
const port = 8080;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath 
}));
app.use(webpackHotMiddleware(compiler));

app.use('/public', express.static('public'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(error) {
	if (error) {
		console.error(error);
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});