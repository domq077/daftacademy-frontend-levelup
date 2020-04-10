const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
      './src/script.js',
      './src/styles/script.js',
      './src/styles/style.sass'
    ],
    plugins: [
      new HtmlWebpackPlugin({
          templete: './src/index.html',
          filename: './index.html'
      })
  ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }  
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: "file-loader?name=/assets/[name].[ext]"
          } 
        ],
      }
}
