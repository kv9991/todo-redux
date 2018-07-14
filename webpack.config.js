const path = require("path");

module.exports = {
   entry: path.resolve("src/index.js"),
   output: {
     filename: 'bundle.js',
     path: path.resolve('dist'),
   },
   module: {
       rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           query: {
               presets: ['env', 'react'],
               plugins: ["transform-object-rest-spread"]
           }
         },
       }
     ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
          ["@components"]: path.resolve("src/components"),
          ["@pages"]: path.resolve("src/pages"),
          ["@actions"]: path.resolve("src/actions"),
          ["@reducers"]: path.resolve("src/reducers"),
          ["@consts"]: path.resolve("src/consts"),
          ["@root"]: path.resolve("src")
        }
    }
}