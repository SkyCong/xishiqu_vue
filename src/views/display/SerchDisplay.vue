
<template>
  <div id="wrapper-search">
    <div id="search" class="page">
      <div class="page__search">
        <div class="search__left">
          <i class="icon icon-search">
            <svg t="1552719465319" style="width: 1.0380859375em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1063 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3437"><path d="M983.552 930.816l-230.4-227.328c60.928-67.072 96.256-156.672 96.256-256 0-217.6-176.128-390.144-390.656-390.144-217.6 0-390.656 176.128-390.656 390.144 0 217.6 176.128 390.656 390.656 390.656 99.328 0 188.928-35.328 256-96.256l230.4 227.328c9.728 9.728 28.672 9.728 38.4 0 12.8-12.8 12.8-28.672 0-38.4zM119.808 448c0-185.856 150.528-339.456 339.456-339.456S798.72 259.072 798.72 448c0 89.6-35.328 173.056-92.672 233.472-3.072 0-3.072 3.072-6.656 3.072-3.072 3.072-3.072 3.072-3.072 6.656-60.928 57.856-143.872 92.672-233.472 92.672-189.44 3.072-343.04-150.528-343.04-335.872z" p-id="3438" fill="#999"></path><path d="M193.024 422.912s41.984-210.944 233.984-224.768c0-0.512-263.168-31.744-233.984 224.768" p-id="3439" fill="#999"></path></svg>
          </i>
          <input placeholder="搜索明星、演出、场馆" type="text" class="left__input" @click="serch" v-model="keyserch">
          <!---->
        </div>      
        <router-link to="/show" class="search__right" tag="span">取消</router-link>
      </div>
      <div class="page__content" v-if="show">
        <div class="initial">
          <div class="hot-show">
            <h3 class="show__title">热门演出</h3>
            <ul class="show__list clearfix">
              <li class="list__item" @click="ins" >王力宏</li>
              <li class="list__item" @click="ins" >伍佰</li>
              <li class="list__item" @click="ins" >谭咏麟</li>
              <li class="list__item" @click="ins" >不眠之夜</li>
              <li class="list__item" @click="ins" >费玉清</li>
              <li class="list__item" @click="ins" >崔健</li>
            </ul>
          </div>
          <!---->
        </div>
        <!---->
      </div>
      <div class="search-content" v-if="!show">
        <div class="vague">
          <div class="vague__content">
            <!-- v-for -->
            <router-link :to="'/activity/'+keys.pinyinName" class="vague-item" v-for="(keys , n) in serchList" :key="n" tag="div">
              <span class="item__left">
                {{keys.result}}
              </span> 
              <span
                class="item__right">{{keys.area}}
              </span>
            </router-link>
          </div>
        </div>
      </div>

    </div>
    <!---->
    <!---->
  </div>
</template>


<script>
import request from '@/utils/request'


export default {

  data() {
    return {
      show : true,
      keyserch : [],
      serchList : []
    };
  },
  watch: {
    async keyserch(value){

      let result = await request({
        url: '/ajax/keywords',
        params: {
          q : this.keyserch
        }
      })
      this.serchList=result.result
      console.log(result.result);
      
    }
  },

  methods: {
    serch() {
      this.show = !this.show
      console.log(this.keyserch)
    },
    ins(item){
      this.show = !this.show
      this.keyserch=item.srcElement.innerHTML
    }
  },

}

</script>


<style lang="stylus" scoped>
  @import '~@/assets/serch.styl';
  #wrapper-search
    height 100%
    background-color #fff
  
</style>