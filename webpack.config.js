const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

require('dotenv').config()

const isDev = (process.env.ENV === 'development')
const entry = ['./src/frontend/index.js']
if (isDev) {
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000$reload=true')
};

const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry,
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: isDev ? 'assets/app.js' : 'assets/app-[fullhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[hash].js',
          enforce: true,
          test (module, chunks) {
            const name = module.nameForCondition && module.nameForCondition()
            return (chunks) => chunks.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name)
          }
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg|svg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    isDev
      ? () => {}
      : new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'src/server/public')
      }),
    isDev
      ? new webpack.HotModuleReplacementPlugin()
      : () => { },
    isDev
      ? () => { }
      : new CompressionPlugin({
        test: /\.js$|\.(scss|css)$/,
        filename: '[path][base].gz'
      }),
    isDev
      ? () => { }
      : new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[fullhash].css'
    })
  ]
}
