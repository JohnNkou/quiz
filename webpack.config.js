const path = require('path');

module.exports

module.exports = {
	entry: './index.js',
	output:{
		filename:'quiz.js',
		library:['Quiz']
	},
	resolve:{
		roots: [__dirname, path.resolve(__dirname, 'src')],
		alias:{
			'@/components': path.resolve(__dirname, 'src/components')
		}
	},
	module:{
		rules: [
			{
				test: /\.(?:jsx?|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						targets: "defaults",
						presets: [
							['@babel/preset-env'],
							['@babel/preset-react']
		          		]
		       		}
		      	}
		    }
		]
	}
}