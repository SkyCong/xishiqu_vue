<template>
  <div>
    <FilmList :dataList="filmList"></FilmList>
  </div>
</template>


<script>
import request from "@/utils/request"
import FilmList from '@/components/common/catelist/FilmList'
import { Indicator } from "mint-ui"

export default {
  data() {
    return {
      filmList: []
    }
  },

  components: {
    FilmList
  },

  async created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });


    const result = await request({
      // url: "https://api.myjson.com/bins/zo3im"
      url: "/film.json"

    });

    this.filmList = result.result.list;
    console.log(this.filmList);
    
    Indicator.close();
  },

};
</script>


<style lang="stylus" scoped>

</style>

