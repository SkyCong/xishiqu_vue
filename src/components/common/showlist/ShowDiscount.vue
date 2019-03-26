<template>
  <div class="thumbnail__tag" v-if="this.maxDiscount != ''">
    <span>{{maxDiscount}}</span>折 起
  </div>
</template>


<script>

export default {

  props: {
    maxDiscount: String
  },
  // computed: {
  //   // flag() {
  //   //   if(this.maxDiscount != '')
  //   //     return true
  //   // }
  // }
}

</script>

<style lang="stylus">

</style>
