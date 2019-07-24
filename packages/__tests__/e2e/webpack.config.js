const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, { mode }) {
  const production = mode === 'production';
  return {
    mode: production ? 'production' : 'development',
    entry: './src/startup.ts',
    devtool: "inline-cheap-module-source-map",
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['src', 'node_modules'],
      mainFields: ['module']
    },
    devServer: {
      port: 9500,
      historyApiFallback: true,
      lazy: false
    },
    module: {
      rules: [
        { test: /\.ts$/i, loader: 'ts-loader' },
        { test: /\.html$/i, loader: 'html-loader' }
      ]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.ejs' })]
  }
}
