module.exports = {
  entry: './src/index.js',
  output: {

    path:__dirname + '/public/js',
    filename: 'bundel.js'
  },

  module:{
    rules:[
      {
        test:/\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
