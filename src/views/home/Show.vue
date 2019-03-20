<template>
  <div>
    <ShowHeader></ShowHeader>
    <div class="block-wrapper">
      <ShowTop :fruits="fruits" :banners="banners"></ShowTop>
      <ShowCard></ShowCard>
      <ShowLevel></ShowLevel>
      <ShowVertical :activityLikeInfos="activityLikeInfos"></ShowVertical>
    </div>
  </div>  
</template>


<script>

import request from '@/utils/request'
import ShowHeader from '@/components/showlist/ShowHeader'
import ShowTop from '@/components/showlist/ShowTop'
import ShowCard from '@/components/showlist/ShowCard'
import ShowLevel from '@/components/showlist/ShowLevel'
import ShowVertical from '@/components/showlist/ShowVertical'



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
    ShowCard,
    ShowLevel,
    ShowVertical
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

  .block-wrapper
    padding .1rem .12rem
    background #fff
    margin-bottom .12rem
    .block
      border-bottom 1px solid #efefef
      padding .1rem 0
        &:last-child 
          border-bottom none                    

</style>

