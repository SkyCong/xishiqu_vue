<template>
  <router-view></router-view>
</template>


<script>
export default {


  beforeRouteEnter (to, from, next) {
    next(vm => {
      if(vm.$store.state.isLogin)
       vm.$router.push({path:'/member'})
      else{
        alert('请先登录')
        vm.$router.push({path:'/login'})        
      }
    })
  }
}

</script>


<style lang="stylus" scoped>

</style>
