### xishiqu

##项目架构

##项目总结0316
#1. vue的swipe插件 mini ui的引入问题 
需要注意顺序，再就是设置外框以及引入别忘记加css 

#2. json跨域问题 以及json写在哪里

#3. vue.config.js的配置
runtimeCompiler 与  Compiler（淘汰） 
网上的一些方法 有过时的情况：
module.exports = {
  // 基本路径
  baseUrl: '/',
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
    host: '0.0.0.0',
    port: 5001,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
##项目总结0322
#1. 二级路由的设置，路由路径的注意事项

#2. 接口请求的时间把握，以及后期要注意引入打包的图片压缩工具

#3. 项目文件的分类 能清楚明了


##项目总结0324
#1. 路由跳转注意的包裹方式 不行的时候加一个button套一下

#2. 路由view可以设置属性 相当于每一个子属性都加上了 betton-scoll坑很多

#3. 


##项目总结0326
#1. better-scroll 默认给全局设置了一个蒙版 取消了点击事件 所以要设置为true 点击事件以及路由跳转才能生效

#2. 动画的属性需要进入移除 需要有元素的生成消失 .直接放在样式css里


##项目总结0327
#1. 详情页的跳转运用到了 路由的动态匹配 在index.js设置路由的：id属性 在相应的接口调用中用this.$route.params.id 进行传递 御用:to="'/activity/'+id" 对其进行进入 

##项目总结0328
#1. 项目搜索匹配完成 主要涉及到了绑定表单 watch实时监听 改变params值来进行页面的搜索渲染

  data() {
    return {
      show : true,
      keyserch : [],
      serchList : []
    };
  },
  watch: {
    async keyserch(value){

      let result = await request({
        url: '/ajax/keywords',
        params: {
          q : this.keyserch
        }
      })
      this.serchList=result.result
      console.log(result.result);
      
    }
  },
