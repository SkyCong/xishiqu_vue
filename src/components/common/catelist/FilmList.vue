<template>
  <div class="cateScorll">
    <div class="node-list paddingtop">
      <div class="node node--film horizontal" v-for="(film , n) in dataList" :key="n">
        <div
          class="thumbnail"
          :style="{backgroundImage : 'url('+film.filmImg+')'}"
        >
          <!---->
        </div>
        <div class="main">
          <div>
            <h1 class="i title">{{film.filmName}}</h1>
            <div class="i scores">
              <span class="score score-db">
                <label class="score__source">豆瓣</label>{{film.scoreG}}
              </span>
              <span class="score score-gwl">
                <label class="score__source">淘票票</label>{{film.scoreD}}
              </span>
            </div>
            <div class="i time"></div>
            <div class="i quote"></div>
            <div class="i actors">{{film.filmActor}}</div>
          </div>
          <span class="btn btn-seat">比价</span>
        </div>
        <!---->
      </div>
      <div class="loading"></div>
    </div>  
  </div>

</template>


<script>
import BScroll from 'better-scroll'

export default {

  props: {
    dataList: {
      type: Array
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(".cateScorll")
      } else {
        this.scroll.refresh();
      }
    })
  }
}

</script>

<style lang="stylus">
@import '~@/assets/node-activity.styl'
.cateScorll
    height 100%

    .paddingtop
        padding-top .7rem

.btn
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; 


label 
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold; 
</style>