const path = require('path');

module.exports = {
	entry : path.resolve(__dirname, './src/index.js'),
	module : {
		rules : [
		{
			test : /\.(js)$/,
			exclude : /node_modules/,
			use : ['babel-loader']
		}
		]
	},
	resolve : {
		extensions : ['*', '.js'],
	},
	// why __dirname? how does path.resolve work?
	// without babel, the module and resolve parts are not necessary
	output : {
		path : path.resolve(__dirname, './dist'),
		filename : 'bundled-script.js',
	},
	devServer : {
		static : path.resolve(__dirname, './dist'),
	},
}