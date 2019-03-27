<template>
  <div class="thumbnail__tag" v-if="this.maxDiscount != ''">
    <span>{{maxDiscount}}</span>折 起
  </div>
</template>


<script>

export default {

  props: {
    maxDiscount: String
  }
}

</script>

<style lang="stylus">
  .thumbnail__tag 
      position: absolute
      top: -5px
      left: 8px
      color: #fff
      padding: 4px 6px
      background: url(../../../assets/tips/max.png) no-repeat 
      background-size: .4rem .4rem
      border-radius: 0 0 4px 4px
      font-size: .1rem
      span 
          display: block
          font-size: .14rem
          letter-spacing: 1px
</style>
