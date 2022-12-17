var path = require('path')

module.exports = {
  entry: './src/index.js',
	optimization: {
		minimize: false
	},
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /(\.jsx?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ]
  },
}