const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/main.ts',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },

  resolve: {
    modules: [
      "node_modules"
    ],
    extensions: [".ts", ".js"]
  },

  // https://biwanoie.tokyo/kp3gf/
  watchOptions:{
    poll: true,
  }
};