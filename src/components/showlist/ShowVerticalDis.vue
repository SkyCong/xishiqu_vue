<template>
  <div class="thumbnail__tag" v-if="flag">
    <span>{{maxDiscount}}</span>折 起
  </div>
</template>


<script>

export default {

  props: {
    maxDiscount: String
  },
  computed: {
    flag() {
      if(this.maxDiscount == '')
        return false
      return true
    }
  }
}

</script>

<style lang="stylus">
@import '~@/assets/activity.styl'

</style>
