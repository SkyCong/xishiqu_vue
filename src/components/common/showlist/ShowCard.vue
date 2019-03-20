<template>
  <div class="main-node">
    <div class="node node--activity primary">
      <div
        class="bg"
        :style="{backgroundImage : 'url('+mData[0].actImgUrl+')'}">
      </div>
      <div class="mask"></div>
      <div
        class="thumbnail"
        :style="{backgroundImage : 'url('+mData[0].actImgUrl+')'}">
        <!---->
        <div class="thumbnail__hot">
          <span>{{mData[0].hotLevel}}</span> ℃
        </div>
      </div>
      <!---->
      <!---->
      <div class="main">
        <h1 class="title">{{mData[0].actName}}</h1>
        <div class="quote">{{mData[0].intro}}</div>
        <div class="date">{{mData[0].actTime}}</div>
        <div class="price">
          <div>
            <span>￥{{mData[0].lowPrice}}</span>
            <span class="sub">起</span>
          </div>
          <div>在售卖家{{mData[0].sellerCount}}家</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    mData: Array
  }
  //,
  // computed: {
  //   // flag() {
  //   //   if(this.maxDiscount == '')
  //   //     return false
  //   //   return true
  //   // }
  // }
}

</script>

<style lang="stylus">

</style>


