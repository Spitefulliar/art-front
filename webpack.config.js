var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');
var csswring     = require('csswring');
var CopyPlugin = require('copy-webpack-plugin');

var projectRootPath = path.join(__dirname, 'local/templates/fanid');      //path to root
var entryPath = path.join(__dirname, 'local/templates/fanid/js');         //path to input dir
var assetsPath = path.join(__dirname, 'local/templates/fanid/assets');    //path to output dir

var config = {
    context: entryPath,
    entry: {
      // icof: './custom_font.font.js', //For custom svg font building 
      // 'libs-styles': './libs-styles.js', // файл для сборки стилей библиотек
      // bootstrap: './bootstrap.js', // файл для сборки бутстрапа
      // 'angular-material': './angular-material.js', // файл для сборки angular material
      styles: './styles.js', // файл для сборки стилей 
      bundle: './index.js', // файл для сборки cкриптов, если несколько - указываем hash (entry name => filename)
    },
    output: {
      path: assetsPath,
      filename: "[name].js",
      chunkFilename: "[name].[id].js",
      publicPath: './'
    },
    module: {
        loaders: [
            {
              test: /\.less$/,
              exclude: /(node_modules)/,
              // loader: ExtractTextPlugin.extract('style-loader','css-raw-loader?-minimize!less-loader') //fastest build for dev, no autoprefix
              loader: ExtractTextPlugin.extract('style-loader', 'css-raw-loader?-minimize!postcss-loader?pack=defaults!less-loader')
              // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-minimize!postcss-loader?pack=defaults!less-loader?sourceMap') //sourcemap
            },
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-raw-loader?-minimize!postcss-loader?package=defaults!sass-loader') 
              // loader: ExtractTextPlugin.extract('style-loader', 'css-raw-loader?-minimize!sass-loader') 
            },
            {
              test: /\.css$/,
              exclude: /(node_modules)/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-raw-loader?-minimize!postcss-loader?package=defaults')
            },
            {
              test: /\.(png|jpg|gif)$/,
              loader: 'url-loader?prefix=img/&limit=10&q=100&name=[name].[ext]'
            }, 
            {
              test: /\.svg$/,
              exclude: /(\.font\.|\/sprite\/)/,
              loader: 'url?limit=10&mimetype=image/svg+xml&prefix=font&name=[name].[ext]'
            },
            {
              test: /\/sprite\//,
              loader: 'svg-sprite?' + JSON.stringify({
                name: 'spr-[name]',
                prefixize: true,
                exclude: /(\.font\.)/,
              })
            }, 
            {
              test: /\.woff$/,
              loader: 'url-loader?prefix=font/&limit=0&mimetype=application/font-woff&name=[name].[ext]'
            }, 
            {
              test: /\.woff2$/,
              loader: 'url-loader?prefix=font/&limit=0&mimetype=application/font-woff2&name=[name].[ext]'
            },{
              test: /\.eot$/,
              loader: 'file?prefix=font/&name=[name].[ext]'
            },
            {
              test: /\.(ttf|otf)$/,
              loader: 'url?limit=0&mimetype=application/octet-stream&prefix=font/&name=[name].[ext]'
            },
            {
              test: /\.js$/ ,
              exclude: /(node_modules|libs|\.config\.|\.font\.|\.min\.js)/,
              loader: 'babel'
            },
            {
              test: /\.font\.(js|json)$/,
              exclude: /(node_modules)/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-raw-loader!postcss-loader?package=defaults!less-loader!fontgen-loader')
            },
            // {
            //   test: /bootstrap\.config\.js$/, 
            //   exclude: /(node_modules)/,
            //   loader: 'bootstrap-webpack'
            // }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(), //uglify
        //new webpack.optimize.DedupePlugin(), //remove dublicated modules
        new webpack.DefinePlugin({
            // 'NODE_ENV': JSON.stringify('production'), //setting environment variable
            'NODE_ENV': JSON.stringify('dev')
        }),
        new ExtractTextPlugin('[name].css'),
        // new CopyPlugin([
        //     { from: '../../../../node_modules/angular/angular.min.js', to: '../libs/angular' },
        //     { from: '../../../../node_modules/angular/angular-csp.css', to: '../libs/angular' },
        //     { from: '../../../../node_modules/angular-ui-router/release/angular-ui-router.min.js', to: '../libs/angular-ui-router' },
        //     { from: '../../../../node_modules/angular-animate/angular-animate.min.js', to: '../libs/angular-animate' },
        //     { from: '../../../../node_modules/angular-touch/angular-touch.min.js', to: '../libs/angular-touch' },
        //     { from: '../../../../node_modules/angular-fancybox-plus/js/angular-fancybox-plus.js', to: '../libs/angular-fancybox-plus' },
        //     { from: '../../../../node_modules/angular-ui-bootstrap/dist/', to: '../libs/angular-ui-bootstrap' },
        //     { from: '../../../../node_modules/jquery/dist/jquery.min.js', to: '../libs/jquery' },
        // ], {
        //     ignore: [
        //         // '*.txt',
        //     ]
        // })
    ],
    postcss: function () {
        return {
            oldsup: [autoprefixer({ browsers: ['last 5 version','safari >= 8, ie >= 8'] }), csswring], //with minification
            defaults:  [autoprefixer({ browsers: ['last 3 version'] })]
        };
    },
    watch: false
};

module.exports = config;