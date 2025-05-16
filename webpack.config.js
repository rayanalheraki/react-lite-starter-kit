const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // Using esbuild-loader instead of babel-loader for speed
          loader: 'esbuild-loader',
          options: {
            loader: 'jsx',
            target: 'es2015',
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // ESLint plugin for linting
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      emitWarning: true,
      failOnError: false,
      lintDirtyModulesOnly: true, // Only lint files that have changed
      cache: true, // Enable caching for better performance
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    client: {
      logging: 'none', // Reduces client logging
      overlay: true, // Shows errors as overlay
    },
    devMiddleware: {
      stats: 'minimal', // Only output minimal stats
    },
  },
  // Optimization settings
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  // Source maps for development only
  devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map',
};
