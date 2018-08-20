const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: "./src/index.js"
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [ 
			{
				test: /\.(scss)$/,
				use: [
					{
		            	// Adds CSS to the DOM by injecting a `<style>` tag
		            	loader: 'style-loader'
		          	},
		          	{
		            	// Interprets `@import` and `url()` like `import/require()` and will resolve them
		            	loader: 'css-loader'
		          	},
		          	{
		            	// Loader for webpack to process CSS with PostCSS
			            loader: 'postcss-loader',
			            options: {
			              plugins: function () {
			                return [
			                  require('autoprefixer')
			                ];
			              }
			            }
		          	},
		          	{
		            	// Loads a SASS/SCSS file and compiles it to CSS
		            	loader: 'sass-loader'
		          	}
		        ]
		    }
		]
	},
	plugins: [
		// new CleanWebpackPlugin(['dist']),
		// new HtmlWebpackPlugin({
		// 	title: 'Blood bank'
		// })
	],
	devServer: {
		contentBase: './'
	}

} 