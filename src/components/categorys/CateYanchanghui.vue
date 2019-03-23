<template>
  <div>
    <ActivityList :dataList="yanchanghuiList"></ActivityList>
  </div>
</template>


<script>
import request from "@/utils/request"
import ActivityList from '@/components/common/catelist/ActivityList'
import { Indicator } from "mint-ui"

export default {
  data() {
    return {
      yanchanghuiList: []
    }
  },

  components: {
    ActivityList
  },

  async created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });


    const result = await request({
      // url: "https://api.myjson.com/bins/1bimge"
      url: "/active.json"

    });

    this.yanchanghuiList = result.result.list;
    console.log(this.yanchanghuiList);
    
    Indicator.close();
  },

};
</script>


<style lang="stylus" scoped>

</style>

