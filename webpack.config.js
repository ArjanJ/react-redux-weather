const path 								= require('path');
const webpack							= require('webpack');
const htmlWebpackPlugin 	= require('html-webpack-plugin');
const autoprefixer 				= require('autoprefixer');

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'postcss', 'sass'],
			exclude: /node_modules/
		}]
	},
	postcss: function() {
		return [autoprefixer]
	}
};