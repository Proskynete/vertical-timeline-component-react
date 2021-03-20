const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|build)/,
				loader: 'babel-loader',
			},
		],
	},
	externals: {
		react: 'commonjs react',
	},
};
