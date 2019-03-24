<template>
  <div class="wrap">
    <LoginNO></LoginNO>
  </div>
</template>


<script>
// import request from "@/utils/request"
import BScroll from 'better-scroll'
import LoginYES from '@/components/logins/LoginYES'
import LoginNO from '@/components/logins/LoginNO'
import { Indicator } from "mint-ui"

export default {


  components: {
    LoginYES,
    LoginNO
  },

  mounted() {
    let loginScroll = new BScroll(".wrap")
  
  }
  
  
}

</script>


<style lang="stylus" scoped>

  .wrap
    height 100%
    background #f4f4f4
    // overflow scroll


</style>
