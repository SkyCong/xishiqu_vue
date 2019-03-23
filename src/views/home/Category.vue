<template>
  <div id="category">
    <CateHeader class="page__header"></CateHeader>
    <router-view class="bg"></router-view>
  </div>
    
</template>


<script>

import request from '@/utils/request'
import CateHeader from '@/components/categorys/CateHeader'


export default {
  components: {
    CateHeader
  },

  
}
</script>



<style lang="stylus" scoped>

#category 
  padding-bottom: .45rem
  height 100%
  .bg
    padding: .12rem
    height 100%
</style>
