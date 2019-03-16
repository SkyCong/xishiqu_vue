<template>
  <div class="layout-container">
    <Header></Header>
    <main>
      注： ①本文档有个与函数比肩的重要概念-mixin, 我将其译为混合书写，混入或混写。②点击这里可回到文档首页。注： ①本文档有个与函数比肩的重要概念-mixin, 我将其译为混合书写，混入或混写。②点击这里可回到文档首页。
    </main>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from './Header'
import Tabbar from './Tabbar'
export default {
  components: {
    Header,
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

