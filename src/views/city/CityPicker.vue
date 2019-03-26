<template>
  <div id="wrapper-city">
    <div id="city" class="page">
      <header class="header">
        <router-link to="/show" class="icon icon-angle-left" tag="i">
          <svg data-v-4491e706="" t="1553179774098" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3312" class="icon" style="width: 0.7em; height: 0.7em; vertical-align: middle; fill: currentcolor; overflow: hidden;"><path data-v-4491e706="" d="M244.905102 548.656955c0.640598 0.647433 1.298773 1.260688 1.967689 1.862226 0.602513 0.664035 1.215768 1.32221 1.863202 1.962808l457.001475 457.007725c19.284336 19.287071 50.550391 19.284336 69.831798 0 19.284336-19.28336 19.284336-50.547461 0-69.833751L349.658072 513.741643l429.438194-429.43878c19.28336-19.287266 19.28336-50.550391 0-69.837657-19.287266-19.286289-50.550391-19.286289-69.834727 0L244.905102 478.824572C225.617835 498.105978 225.617835 529.370666 244.905102 548.656955L244.905102 548.656955z" p-id="3313"></path></svg>
        </router-link>
        选择城市
      </header>
      <div class="location">
        当前定位城市：
        <span class="city--name">上海</span>
      </div>
      <ul class="list list-unstyled">
        <li class="group" v-for="(cityData , n) in cityDatas" :key="n">
          <h3 class="group__title">{{n}}</h3>
          <ul class="group__list" v-for="(cityName , t) in cityData" :key="t">
            <li class="group__item">{{cityName.areaName}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <!---->
  </div>
</template>


<script>

import request from '@/utils/request'
// import { mapState } from "vuex";
import BScroll from "better-scroll"
import _ from "lodash"

export default {
  data() {
    return {
      cityDatas: []
    }
  },

  async created() {

    const result = await request({
      url: '/cityList.json'      
    })

    this.cityDatas = result.result
    console.log( result.result);
    
  },


  mounted() {
    let bScroll = new BScroll("#wrapper-city", {
      probeType: 2,
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/city.styl'
  #wrapper-city  
    height 100%
</style>



