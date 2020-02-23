const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    modules: true,
                    namedExport: true,
                    localIdentName: "[local]"
                }
            }
        ],
        exclude: /node_modules/
    },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer:{
    contentBase:'./dist',
    historyApiFallback:true,
    hot:true,
    inline:true

},
  plugins:[
    new HtmlWebpackPlugin({
        template: "./src/upload/client/index.html"
    }),
]

}

module.exports = config;