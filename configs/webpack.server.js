const Path = require('path');
// 不打包 node_modules  里面的内容
const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: Path.resolve(__dirname, '../build')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-react']
      }
    }]
  }
};
