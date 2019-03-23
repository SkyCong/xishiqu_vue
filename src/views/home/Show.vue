<template>
  <div id="home_some">
    <ShowHeader></ShowHeader>
    <div class="list-wrap">
      <div>
        <ShowTop :frontCateInfos="topData.frontCateInfo" :bannerInfos="topData.bannerInfo" class="block-wrapper"></ShowTop>
        <div class="block-wrapper">
          <ShowSevenInfo ></ShowSevenInfo>
          <ShowCateInfo :activityCateInfos="activityCateInfos"></ShowCateInfo>
          <ShowLikeInfo :activityLikeInfos="activityLikeInfos"></ShowLikeInfo>
        </div>
        <div class="report"><span class="text">举报电话：<a href="tel:021-52398129" class="tel">021-52398129-403</a></span></div>        
      </div>
    </div>
  </div>  
</template>


<script>

import request from '@/utils/request'
import BScroll from 'better-scroll'
import ShowHeader from '@/components/shows/ShowHeader'
import ShowTop from '@/components/shows/ShowTop'
import ShowSevenInfo from '@/components/shows/ShowSevenInfo'
import ShowCateInfo from '@/components/shows/ShowCateInfo'
import ShowLikeInfo from '@/components/shows/ShowLikeInfo'
import { Indicator } from 'mint-ui'



export default {

  data () {
    return {
       topData: [],
       activityCateInfos: [],
       activityLikeInfos: []
    }
  },

  components: {
    ShowHeader,
    ShowTop,
    ShowSevenInfo,
    ShowCateInfo,
    ShowLikeInfo
  },

  async created() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    const data = await request({
      // url: 'https://api.myjson.com/bins/z3fja',
      url: './index.json',
      // url: '/ajax/home/index',
      // params : {
      //   cityCode : '021'
      // }

    })
    const moskData = await request({
      url: '/showHeader.json'
    })

    this.topData = moskData
    this.activityCateInfos = data.result.activityCateInfo   
    this.activityLikeInfos = data.result.activityLikeInfo  

    Indicator.close();
  },

  mounted() {
    let bScroll = new BScroll('.list-wrap')
  },

}
</script>

<style lang="stylus" scoped>
  #home_some
    height 100%
    background: #F4F4F4;
    padding-bottom: .48rem;
    .list-wrap
      height 100%
      .block-wrapper
        padding: .1rem .12rem;
        background: #fff;
        margin-bottom: .12rem;
        .block
          border-bottom 1px solid #efefef
          padding .1rem 0
            &:last-child 
              border-bottom none   
    .report 
      background url(../../assets/tips/report.png) left .2rem center/.8rem no-repeat
      padding 0rem .12rem 0rem 1.2rem
      font-size .12rem
      height .5rem
      line-height .5rem
      color #999
      .tel 
        color #999

</style>

