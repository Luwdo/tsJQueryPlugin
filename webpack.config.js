var path = require("path");
var webpack = require("webpack");

// webpack.config.js
module.exports = {
    devtool: 'source-map',
    debug: true,
    cache: true,
    verbose: true,
    displayErrorDetails: true,
    //context: __dirname,
    // our Development Server config
    devServer: {
        inline: true,
        colors: true,
        //historyApiFallback: true,
        contentBase: './public',
        //publicPath: './dist'
    },
    entry: {
        'bundle.js': ['./src/entry.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
        filename: '[name]',
        sourceMapFilename: '[name].js.map',
    },
    plugins: [
        new webpack.ProvidePlugin({
            // Automatically detect jQuery and $ as free var in modules
            // and inject the jquery library
            // This is required by many jquery plugins
            jQuery: "jquery",
            $: "jquery"
		})
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'babel-loader!ts-loader' },
            { test: /\.js$/, 
              loader: 'babel-loader',
              query: {
                presets: ['es2015']
              }
            },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.css$/, loader: 'style!css' },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: 'file'
            }
        ]
    }
};