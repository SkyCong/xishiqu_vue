<template>
  <div>
    <div class="node node--activity horizontal" v-for="(activity , n) in dataList" :key="n">
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
    </div>
  </div>
</template>


<script>


export default {

  props: {
    dataList: {
      type: Array
    }
  },

}

</script>

<style lang="stylus">
@import '~@/assets/activity.styl'


</style>