require('webpack');

module.exports = {
    context: __dirname + '/src/pages/home',
    entry: {
        javascript: "./index.js",
        html: "./index.html"
    },
    output: {
        filename: 'index.html',
        path: __dirname + '/index'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
                //loaders: ["react-hot", 'babel-loader'],
                //query: {
                //    presets : ['es2015', 'react']
                //}
            },
            {
                test: /\.html$/,
                loader: "index.html"
            }
        ]
    }
};