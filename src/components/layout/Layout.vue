<template>
  <div class="layout-container">
    <Header></Header>
    <main>
      <MainTop></MainTop>
      <MainCenter></MainCenter>
      <MainBottom></MainBottom>
      {{aaa()}}
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
import { log } from 'util';

export default {
  // data: {
  //   fruits: []
  // },

  components: {
    Header,
    MainTop,
    MainCenter,
    MainBottom,
    Tabbar
  },

  mounted () { 
    fetch('/proxy/ajax/home/index?cityCode=021')
      .then(response => response.json())
    //   .then(result => {
    //     this.fruits = result
    // })
  },

  methods: {
    aaa(){
      console.log("aaa")
      
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
</style>

