<template>
  <div class="activityCateClass">
    <div class="block" v-for="(activityCate , n) in activityCateInfos" :key="n.actCode">
      <h3 class="block__title">
        {{activityCate.mTitle}}
          <small>
            <router-link :to="'/category/'+activityCate.pinyinName" tag="button" >查看更多</router-link>
          </small>
        <!-- <router-link :to="'/category/'+activityCate.pinyinName" tag="small">查看更多</router-link> -->
      </h3>
      <ShowCard :mData="activityCate.mData[0]" v-if="activityCate.pinyinName!='film'"></ShowCard>
      <ShowItemX :pinyinName="activityCate.pinyinName" :mData="activityCate.mData"></ShowItemX>
    </div>  
  </div>
</template>

<script>
import ShowCard from '@/components/common/showlist/ShowCard'
import ShowItemX from '@/components/common/showlist/ShowItemX'


export default {

  props: {
    activityCateInfos: {
      type: Array
    }
  },

  components: {
    ShowCard,
    ShowItemX
  },


  methods: {

  }
}
</script>

<style lang="stylus">
  
  .block 
    border-bottom: 1px solid #efefef
    padding: .1rem 0
    // &:last-child 
    //   border-bottom: none
            
      
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
      button
        background #fff
        margin: 0
        padding: 0
        border: 1px solid transparent  //自定义边框
        outline: none   //消除默认点击蓝色边框效果
        
</style>




