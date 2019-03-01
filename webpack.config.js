const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const env = process.env.NODE_ENV;

const config = {
  mode: env || "development",
  entry: {
    index: "./src/assets/scripts/index.js",
    aboutConcept: "./src/assets/scripts/about-concept.js",
    aboutInfrastructure: "./src/assets/scripts/about-infrastructure.js",
    aboutGallery: "./src/assets/scripts/about-gallery.js",
    aboutCamera: "./src/assets/scripts/about-camera.js",
    aboutDocs: "./src/assets/scripts/about-docs.js",
    action: "./src/assets/scripts/action.js",
    commercial: "./src/assets/scripts/commercial.js",
    contacts: "./src/assets/scripts/contacts.js",
    news: "./src/assets/scripts/news.js",
    parking: "./src/assets/scripts/parking.js",
    singleNews: "./src/assets/scripts/single-news.js",
    404: "./src/assets/scripts/404.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  externals: {
    ymaps: "ymaps"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;
