<template>
  <div id="category">
    <CateHeader class="page__header"></CateHeader>
    <router-view></router-view>
  </div>
    
</template>


<script>

import request from '@/utils/request'
import CateHeader from '@/components/categorys/CateHeader'


export default {
  components: {
    CateHeader
  }
}


</script>



<style lang="stylus" scoped>

#category 
    padding-bottom: .55rem


</style>
