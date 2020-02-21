module.exports = {
  mode: 'development',
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
      },
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
        exclude: /node_modules/

      },
       
      


    ]
  }
}
