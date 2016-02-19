var WebpackDevServer = require("webpack-dev-server");
var path = require("path");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

var myConfig = Object.create(webpackConfig);
myConfig.devtool = "eval";
myConfig.debug = true;
myConfig.entry['bundle.js'].unshift("webpack-dev-server/client?http://localhost:3000");

var server = new WebpackDevServer(webpack(myConfig), {
    //publicPath: "/" + myConfig.output.path,
    contentBase: 'public/',
    inline: true,
    stats: {
        colors: true
    }
});
server.listen(3000, "localhost", function(err) {
    if(err) {
        console.log('An error has occured');
        console.log(err);
    }
    console.log('Server Listenting at http://localhost:3000');
});

// .listen(3000, "localhost", function(err) {
//     if (err) // throw some sort of error throw new gutil.PluginError("webpack-dev-server", err);
//     //good stuff started to listen
// });
