const NODE_ENV = process.env.NODE_ENV;

var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');
var csswring     = require('csswring');
var CopyPlugin = require('copy-webpack-plugin');

var projectRootPath = path.join(__dirname, '/local/templates/articulmedia');      //path to root
var entryPath = path.join(projectRootPath, '/js');         //path to input dir
var assetsPath = path.join(projectRootPath, '/assets');    //path to output dir


if (NODE_ENV == 'production') {
  var sourcemaps = '';
  var postcssPackage = 'defaults';

} else {
  var sourcemaps = '?sourceMap';
  var postcssPackage = 'defaults';
}

var config = {
    context: entryPath,
    entry: {
      bundle: [
        './index.js', // файл для сборки cкриптов, если несколько - указываем hash (entry name => filename)
        './styles.js', // файл для сборки стилей
      ],
      vendor: './vendor.js', // файл для сборки либ
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
              test: /\.html$/,
              loader: 'html-loader'
            },
            {
              test: /\.less$/,
              // exclude: /(node_modules)/,
              loader: ExtractTextPlugin.extract('style-loader',`css-raw-loader?-minimize!postcss-loader?package=${postcssPackage}!less-loader${sourcemaps}`) //fastest build for dev, no autoprefix
            },
            {
              test: /\.scss$/,
              // exclude: /node_modules/,
              loader: ExtractTextPlugin.extract('style-loader', `css-raw-loader?-minimize!postcss-loader?package=${postcssPackage}!sass-loader${sourcemaps}`) 
            },
            {
              test: /\.css$/,
              // exclude: /(node_modules)/,
              loader: ExtractTextPlugin.extract('style-loader', `css-loader?-minimize!postcss-loader?package=${postcssPackage}`)
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
              exclude: /(node_modules|bower_components|libs|\.config\.|\.font\.|\.min\.js)/,
              loader: 'babel',
              query: {
                presets: ['es2015']
              }
            },
            // {
            //   test: /bootstrap\.config\.js$/, 
            //   exclude: /(node_modules)/,
            //   loader: 'bootstrap-webpack'
            // },
            { 
              test: require.resolve("jquery"), 
              loader: "expose-loader?$!expose-loader?jQuery" 
            },
            { 
              test: require.resolve("snapsvg"), 
              loader: 'imports-loader?this=>window,fix=>module.exports=0'
            },
        ]
    },
    resolve: {
      alias: {
        "TweenLite": path.join(__dirname,'/node_modules/gsap/src/uncompressed/TweenLite.js'),
        "TweenMax": path.join(__dirname,'/node_modules/gsap/src/uncompressed/TweenMax.js'),
        "TimelineLite": path.join(__dirname,'/node_modules/gsap/src/uncompressed/TimelineLite.js'),
        "TimelineMax": path.join(__dirname,'/node_modules/gsap/src/uncompressed/TimelineMax.js'),
        "ScrollMagic": path.join(__dirname,'/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        "animation.gsap": path.join(__dirname,'/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        "animation.velocity": path.join(__dirname,'/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity.js'),
        "velocity": path.join(__dirname,'/node_modules/velocity-animate/velocity.min.js'),
        "Matter": 'matter-js',
      }
    },
    plugins: [
        new webpack.optimize.DedupePlugin(), //remove dublicated modules
        // new webpack.DefinePlugin({
        //     'NODE_ENV': JSON.stringify('develop') //setting environment variable
        //     // 'NODE_ENV': JSON.stringify('production'), //setting environment variable
        // }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
        new webpack.ProvidePlugin({
          //configs
          'NODE_ENV': 'NODE_ENV',
          'CONFIG': path.join(entryPath, "/helper_config.js"),
          //libs
          '$': 'jquery',
          'jQuery': 'jquery',
          'window.jQuery': 'jquery',
          'Slick': 'slick-carousel',
          'Hamster': 'hamsterjs',
          'TweenMax': 'TweenMax',
          'TimeLineMax': 'TimeLineMax',
          'ScrollMagic': 'scrollmagic',
          'Snap': 'snapsvg',
          'Matter': 'matter-js',
        }),
        new ExtractTextPlugin('[name].css'),
    ],
    postcss: function () {
      return {
        oldsup: [require('postcss-flexbugs-fixes'), autoprefixer({ browsers: ['last 5 version','safari >= 8, ie >= 8'] })],
        defaults:  [require('postcss-flexbugs-fixes'), autoprefixer({ browsers: ['last 3 version'] })]
      };
    },
    htmlLoader: {
      ignoreCustomFragments: [/\{\{.*?}}/],
      root: path.resolve(__dirname),
      attrs: ['link:href']
      // attrs: ['img:src', 'link:href']
    },
    watch: false
};

if (NODE_ENV == 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        mangle: false,
        sourceMap: false
      }
    )
  );

  console.log("\x1b[37m", "\x1b[40m");
  console.log("\x1b[35m", "\x1b[40m", 'production mode on');
  console.log("\x1b[37m", "\x1b[40m");
} else {
  console.log("\x1b[37m", "\x1b[40m");
  console.log("\x1b[35m", "\x1b[40m", 'develop mode on');
  console.log("\x1b[37m", "\x1b[40m");
}

module.exports = config;