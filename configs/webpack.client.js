const Path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: "bundle.js",
    path: Path.resolve(__dirname, '../public')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        // 最新babel7:
        presets: ['@babel/preset-react'/*, ['@babel/preset-env', {useBuiltIns:'usage'}] //按需加载polyfill */],
        // babel6:
        // presets: ['react', ['env',{targets:{browsers:['latest 2 versions']}}]],
        plugins: [
          [
            "@babel/plugin-transform-runtime",
            {
              "absoluteRuntime": false,
              "corejs": 3, // 指定 runtime-corejs 的版本，目前有 2 3 两个版本
              "helpers": true,
              "regenerator": true,
              "useESModules": false,
              "version": "7.0.0-beta.0"
            }
          ]
        ]
      }
    }]
  }
};
