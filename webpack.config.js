module.exports = {
  entry: `${__dirname}/client/index.js`,
  output: {
    path: `${__dirname}/server/public`,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
