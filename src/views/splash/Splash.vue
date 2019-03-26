<template>
  <div class="splash">
    <transition name="fade">
      <div class="splashok" v-if="show">
        <h1>进入中...</h1>
      </div>
    </transition>
  </div>
</template>

<script>


export default {

  data () {
    return {
       show: true
    }

  },


  mounted() {
    this.show=false
    setTimeout(() => {
      this.$router.replace('/show')
    },4200)
  }

}
</script>

<style lang="stylus" scoped>

.fade-enter-active,.fade-leave-active 
  transition: opacity 4.2s
.fade-enter,.fade-leave-to /* .fade-leave-active below version 2.1.8 */ 
  opacity: 0

.splash
  height 100%
  width 100%
  background url(../../assets/tips/splash1.jpg) no-repeat
  background-size 100%;
  .splashok
    height 100%
    width 100%
    background url(../../assets/tips/splash0.jpg) no-repeat
    background-size 100%
    h1
      position absolute
      color #fff
      font-size 22px 
      font-weight bold !important
      top 80%
      left 40%
  
</style>

