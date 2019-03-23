<template>
    <ActivityList :dataList="quanbuList"></ActivityList>
</template>


<script>
import request from "@/utils/request";
import ActivityList from '@/components/common/catelist/ActivityList'
import BScroll from "better-scroll";
import { Indicator } from "mint-ui";

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
      url: "https://api.myjson.com/bins/y1zma"
    });

    this.quanbuList = result.result.list;
    console.log(this.quanbuList);
    
    Indicator.close();
  },

  mounted() {
    let bScroll = new BScroll(".list-wrap");
  }
};
</script>


<style lang="stylus" scoped>
</style>

