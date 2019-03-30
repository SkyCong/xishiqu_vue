// const path = require('path')

// function resolve(pathname) {
//   return path.resolve(__dirname, pathname)
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? 'http://10.60.18.160/xishiqu'
  : '/',
  // 基本路径
  // baseUrl: './',
  // // 输出文件目录
  // outputDir: 'dist',
  // // eslint-loader 是否在保存的时候检查
  // lintOnSave: true,
  // // use the full build with in-browser compiler?
  // // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // runtimeCompiler: true, //关键点在这 
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: config => {
    // console.log(config)
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   home: resolve('./src/views/home'),
    //   assets: resolve('./src/assets'),
    //   utils: resolve('./src/utils')
    // }
  },

  devServer: {
    // host: '10.60.18.51',
    // port: 8080,
    proxy: {
      '/ajax': {
        target: 'http://m.xishiqu.com',
        secure: false,//false 为http
        changeOrigin: true
        // pathRewrite: { 
        //   "^/proxy": ""
        // }
      },
      '/api': {
        target: 'http://m.xishiqu.com',
        secure: false,//false 为http
        changeOrigin: true
      },
      '/proxy': {
        target: 'http://www.chinanews.com',
        secure: false,//false 为http
        changeOrigin: true,
        pathRewrite: { 
          "^/proxy": ""
        }
      }
    }
  }

}