<template>
  <div id="category">
    <CateHeader class="page__header"></CateHeader>
    <CateMain></CateMain>
  </div>
    
</template>


<script>

import request from '@/utils/request'
import CateHeader from '@/components/categorys/CateHeader'
import CateMain from '@/components/categorys/CateMain'
import { Indicator } from 'mint-ui'


export default {
  components: {
    CateHeader,
    CateMain
  },

}


</script>



<style lang="stylus" scoped>

#category 
    padding-bottom: .55rem


</style>
