<template>
  <div class="activityCateClass">
    <div class="block" v-for="(activityCate , n) in activityCateInfos" :key="n">
      <h3 class="block__title">
        {{activityCate.mTitle}}
        <small>查看更多</small>
      </h3>
      <ShowCard :mData="activityCate.mData" v-if="flagCard(activityCate.pinyinName)"></ShowCard>
      <ShowItemX :mData="activityCate.mData" v-if="flagItemX(activityCate.pinyinName)"></ShowItemX>
    </div>  
  </div>
</template>

<script>
import ShowCard from '@/components/common/showlist/ShowCard'
import ShowItemX from '@/components/common/showlist/ShowItemX'


export default {

  props: {
    activityCateInfos: {
      type: Object
    }
  },

  components: {
    ShowCard,
    ShowItemX
  },

  methods: {
    flagCard(state) {
      if(state != 'film')
        return true
    },
    flagItemX(state) {
      if(state != 'xiuxianyule')
        return true
    }
  }
}
</script>

<style lang="stylus">
  
  .block 
    border-bottom: 1px solid #efefef
    padding: .1rem 0
    &:last-child 
      border-bottom: none
            
      
  .block__title 
    color: #333
    font-size: .18rem
    font-weight: bold
    margin: .2rem 0
    overflow: hidden
    small 
      float: right
      color: #999
      font-size: .12rem
      margin-top: .05rem
        
        
</style>




