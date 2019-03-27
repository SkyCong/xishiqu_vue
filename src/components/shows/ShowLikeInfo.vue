<template>

  <div class="favours" >

    <h3 class="block__title">投你所喜</h3>
    <router-link :to="'/activity/'+activity.pinyinName" class="node node--activity horizontal" v-for="(activity , n) in activityLikeInfos" :key="n" tag="div">
      <!---->
      <!---->
      <div class="thumbnail" :style="{backgroundImage : 'url('+activity.actImgUrl+')'}">
        <!-- <div class="thumbnail__tag"><span>{{activity.maxDiscount}}</span>折 起 -->
        <ShowDiscount :maxDiscount="activity.maxDiscount"></ShowDiscount>
      </div>
      <div class="main">
        <h1 class="title">{{activity.actName}}</h1>
        <div class="date">{{activity.actTime}}</div>
        <div class="venue">{{activity.veName}}</div>
        <div class="price">
          <div><span>￥{{activity.lowPrice}}</span> <span class="sub">起</span></div>
        </div>
        <div class="quote">{{activity.intro}}</div>
      </div>
      <!---->
      <!---->
    </router-link>  
  </div>

</template>


<script>
import ShowDiscount from '@/components/common/showlist/ShowDiscount'

export default {

  props: {
    activityLikeInfos: {
      type: Array
    }
  },

  components: {
    ShowDiscount
  }

}

</script>

<style lang="stylus">
@import '~@/assets/node-activity.styl'

    .block__title 
        color #333
        font-size .18rem
        font-weight bold
        margin .2rem 0
        overflow hidden
        small 
            float right
            color #999
            font-size .12rem
            margin-top .05rem
             
    .favours 
        .block__title 
            display: flex
            margin: .2rem auto
            width: 50%
            text-align: center
            justify-content: space-between
            &:before,
            &:after 
                content ''
                border-top 2px solid #ccc
                flex 1
                display block
                margin .1rem

</style>
