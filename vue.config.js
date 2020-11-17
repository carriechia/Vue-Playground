const path = require('path');
const webpack = require('webpack');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        // Set up all the aliases we use in our app.
        resolve: {
        alias: {
            src: resolveSrc('src'),
            'chart.js': 'chart.js/dist/Chart.js'
        }
        },
        plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 6
        })
        ]
    },
    pwa: {
        name: 'Vue Light Bootstrap Dashboard',
        themeColor: '#344675',
        msTileColor: '#344675',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#344675'
    },
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== 'production'
    },
    // 顯示在 gitpages 上
    // publicPath: process.env.NODE_ENV === 'production'
    //   ? 'https://carriechia.github.io/vue-sample/'
    //   : '/'
    // 顯示在 aws 上
    publicPath: process.env.NODE_ENV === 'production'
      ? 'http://carrie-vue-exercises.s3-website.us-east-2.amazonaws.com/'
      : '/'
};
