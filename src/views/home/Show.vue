<template>
  <div id="home_some">
    <ShowHeader></ShowHeader>
    <div>
      <ShowTop :fruits="fruits" :banners="banners" class="block-wrapper"></ShowTop>
      <div class="block-wrapper">
        <ShowSevenInfo ></ShowSevenInfo>
        <ShowCateInfo :activityCateInfos="activityCateInfos"></ShowCateInfo>
        <ShowLikeInfo :activityLikeInfos="activityLikeInfos"></ShowLikeInfo>
      </div>
    </div>
  </div>  
</template>


<script>

import request from '@/utils/request'
import ShowHeader from '@/components/shows/ShowHeader'
import ShowTop from '@/components/shows/ShowTop'
import ShowSevenInfo from '@/components/shows/ShowSevenInfo'
import ShowCateInfo from '@/components/shows/ShowCateInfo'
import ShowLikeInfo from '@/components/shows/ShowLikeInfo'



export default {

  data () {
    return {
       fruits: [],
       banners: [],
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
    
    const data = await request({
      url: 'ajax/home/index?cityCode=021'
    })
    const moskData = await request({
      url: 'https://api.myjson.com/bins/6ufni'
    })
    this.fruits = data.result.frontCateInfo
    this.banners = moskData
    this.activityCateInfos = data.result.activityCateInfo   
    this.activityLikeInfos = data.result.activityLikeInfo   
  },

}
</script>

<style lang="stylus" scoped>
  #home_some
    background: #F4F4F4;
    padding-bottom: .55rem;
    .block-wrapper
      padding: .1rem .12rem;
      background: #fff;
      margin-bottom: .12rem;
      .block
        border-bottom 1px solid #efefef
        padding .1rem 0
          &:last-child 
            border-bottom none   

</style>

