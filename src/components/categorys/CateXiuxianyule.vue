<template>
  <div>
    <ActivityList :dataList="quanbuList"></ActivityList>
  </div>
</template>


<script>
import request from "@/utils/request"
import ActivityList from '@/components/common/catelist/ActivityList'
import { Indicator } from "mint-ui"

export default {
  data() {
    return {
      quanbuList: []
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
      url: "/active.json"
    });

    this.quanbuList = result.result.list;
    console.log(this.quanbuList);
    
    Indicator.close();
  },

};
</script>


<style lang="stylus" scoped>

</style>

