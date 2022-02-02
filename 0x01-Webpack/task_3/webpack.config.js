const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const rulesForCss = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader']
}

const rulesForImages = {
  test: /\.(gif|png|svg|jpe?g)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
        disable: true
      }
    }
  ]
}

const rules = [rulesForCss, rulesForImages];

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  optimization: {
    runtimeChunk: 'all'
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  devServer: {
    static: path.join(__dirname, './public'),
    compress: true,
    port: 8564,
  },
  module: { rules }
};
