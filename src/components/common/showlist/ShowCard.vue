<template>
  <div class="main-node" >
    <div class="node node--activity primary">
      <div
        class="bg"
        :style="{backgroundImage : 'url('+mData.actImgUrl+')'}">
      </div>
      <div class="mask"></div>
      <div
        class="thumbnail"
        :style="{backgroundImage : 'url('+mData.actImgUrl+')'}"
      >
        <!---->
        <div class="thumbnail__hot">
          <span>{{mData.hotLevel}}</span> ℃
        </div>
      </div>
      <!---->
      <!---->
      <div class="main">
        <h1 class="title">{{mData.actName}}</h1>
        <div class="quote">{{mData.intro}}</div>
        <div class="date">{{mData.actTime}}</div>
        <div class="price">
          <div>
            <span>￥{{mData.lowPrice}}</span>
            <span class="sub">起</span>
          </div>
          <div>在售卖家{{mData.sellerCount}}家</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    mData: Object
  }
}

</script>

<style lang="stylus">

</style>


