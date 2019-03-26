<template>
  <div class="layout-container">
    <!-- <div v-for="(fruit, n) in fruits" :key="n">{{fruit.title}}</div> -->
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
    
    <Tabbar></Tabbar>
  </div>
</template>

<script>

import Tabbar from '@/components/layout/Tabbar'
// import MainTop from './MainTop'
// import MainCenter from './MainCenter'
// import MainBottom from './MainBottom'


export default {

  components: {
    Tabbar
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

