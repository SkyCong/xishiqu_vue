<template>
  <div class="cateScorll">
    <div class="paddingtop">
      <router-link :to="'/activity/'+activity.pinyinName" class="node node--activity horizontal" v-for="(activity , n) in dataList" :key="n" tag="div">
        <!---->
        <!---->
        <div class="thumbnail" :style="{backgroundImage : 'url('+activity.actImgUrl+')'}"></div>
        <div class="main">
          <h1 class="title">{{activity.actName}}</h1>
          <div class="date">{{activity.actTime}}</div>
          <div class="venue">{{activity.veName}}</div>
          <div class="price">
            <div>
              <span>￥{{activity.lowPrice}}</span>
              <span class="sub">起</span>
            </div>
          </div>
          <div class="quote">{{activity.intro}}</div>
        </div>
        <!---->
        <!---->
      </router-link>
    </div>
  </div>
</template>


<script>
import BScroll from 'better-scroll'

export default {
  props: {
    dataList: {
      type: Array
    }
  },

  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(".cateScorll",{
          click: true
        })
      } else {
        this.scroll.refresh();
      }
    })
  }

}
</script>

<style lang="stylus">
@import '~@/assets/node-activity.styl'

  .cateScorll
      height 100%

      .padding-top
          padding-top .75rem


</style>