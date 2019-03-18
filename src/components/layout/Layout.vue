<template>
  <div class="layout-container">
    <Header></Header>
    <!-- <div v-for="(fruit, n) in fruits" :key="n">{{fruit.title}}</div> -->
    <main>
      <MainTop :fruits="fruits" :banners="banners"></MainTop>
      <MainCenter></MainCenter>
      <MainBottom></MainBottom>
    </main>
    <Tabbar></Tabbar>
  </div>
</template>

<script>

import Header from './Header'
import MainTop from './MainTop'
import MainCenter from './MainCenter'
import MainBottom from './MainBottom'
import Tabbar from './Tabbar'

export default {

  data () {
    return {
       fruits: [],
       banners: []
    }
  },

  components: {
    Header,
    MainTop,
    MainCenter,
    MainBottom,
    Tabbar
  },

  mounted () { 
    this.get()
  },

  methods: {
    get(){
      fetch('proxy/ajax/home/index?cityCode=021')
        .then(response => response.json())
        .then(result => {
          this.fruits = result.result.frontCateInfo
      })
      fetch('https://api.myjson.com/bins/6ufni')
        .then(response => response.json())
        .then(result => {
          this.banners = result
      })

      
      // console.log(fruits.frontCateInfo)
    }
  }
  

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/ellipsis.styl'
.layout-container
  height 100%
  display flex
  flex-direction column
  main
    flex 1
    background #fff   
    ellipsis(auto, 2)
    overflow scroll

</style>

