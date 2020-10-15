const path = require('path');
const webpack = require('webpack');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
    devServer: {
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        https: false,
        open: false,
		proxy: {
            '/api': {
                target: 'http://18.190.3.152/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '', //思路是如果是开发环境，就给所有要代理的接口统一加上前缀，然后代理请求时再统一通过rewrite去掉
                }
            },
		}
    },
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
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-sample/'
      : '/'
};
