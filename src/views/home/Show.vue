<template>
  <div id="home_some">
    <ShowHeader></ShowHeader>
    <div>
      <ShowTop :fruits="fruits" :banners="banners" class="block-wrapper"></ShowTop>
      <div class="block-wrapper">
        <ShowSevenInfo></ShowSevenInfo>
        <ShowCateInfo></ShowCateInfo>
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
    
    const result1 = await request({
      url: 'ajax/home/index?cityCode=021'
    })
    const result2 = await request({
      url: 'https://api.myjson.com/bins/6ufni'
    })
    this.fruits = result1.result.frontCateInfo
    this.banners = result2
    this.activityLikeInfos = result1.result.activityLikeInfo    
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

