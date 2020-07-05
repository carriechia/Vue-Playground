const path = require('path');
const webpack = require('webpack');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
    devServer: {
		port: 8080,
		host: "localhost",
		https: false,
        open: false,
		proxy: {
			"/api/auth": {
				// target: "http://18.163.164.103/", //设置调用的接口域名和端口
				target: "http://127.0.0.1:8000/", //设置调用的接口域名和端口
				changeOrigin: true, //是否跨域
				ws:true,
				pathRewrite: {
					"^/api": ""
				}
			}
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
    }
};
