module.exports = {
  // 基本路径
  baseUrl: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true, //关键点在这 
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},

  devServer: {
    open: process.platform === 'darwin',
    host: '10.60.18.152',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: {
      "/proxy/": {
        target: "http://m.xishiqu.com",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/proxy": ""
        }
      }, // string | Object

    },
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }

}