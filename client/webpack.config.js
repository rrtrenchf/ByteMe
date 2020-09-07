require('webpack');

module.exports = {
    context: __dirname + '/src/pages/home',
    entry: {
        javascript: "./index.js",
        html: "./home.html"
    },
    output: {
        filename: 'home.html',
        path: __dirname + '/home'
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
                loader: "home.html"
            }
        ]
    }
};