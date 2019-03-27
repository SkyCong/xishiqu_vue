<template>
  <div class="node-list" ref="tab"> 
     <!-- ref="tab" -->
    <!--11.2*mData.length-->
    <template v-if="pinyinName!='film'">
      <div class="wrapper" :style="'width: '+1.12*(mData.length-1)+'rem;'">
        <router-link :to="'/activity/'+item.pinyinName"  class="node node--activity vertical" v-for="(item , n) in mData.slice(1)" :key="n" tag="div">
          <div class="thumbnail" :style="{backgroundImage : 'url('+item.actImgUrl+')'}">
            <!---->
            <div class="thumbnail__hot">
              <span>{{item.hotLevel}}</span> ℃
            </div>
          </div>
          <!---->
          <div class="main">
            <h1 class="title">{{item.actName}}</h1>
            <div class="price">
              <div>
                <span>￥{{item.lowPrice}}</span>
                <span class="sub">起</span>
              </div>
            </div>
            <div class="date">{{item.actTime}}</div>
            <div class="venue"></div>
          </div>
          <!---->
        </router-link>
      </div>
    </template>

    <template v-else>
        <div class="wrapper" :style="'width: '+1.12*mData.length+'rem;'">
          <!-- <router-link> -->
            <router-link :to="'/filmdis/'+film.filmId" class="node node--film vertical" v-for="(film , t) in mData" :key="t" tag="div">
              <div class="thumbnail" :style="{backgroundImage : 'url('+film.filmImg+')'}">
                <div class="thumbnail__score">{{film.scoreD}}</div>
              </div>
              <div class="main">
                <h1 class="filmName">{{film.filmName}}</h1>
              </div>
            </router-link>  
          <!-- </div>        -->
        </div>
    </template>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {

  props: {
    mData: Array,
    pinyinName: String
  },



  mounted() {
    this.$nextTick(()=>{
      if (!this.scroll) {
        this.scroll=new BScroll(this.$refs.tab, {
            startX:0,
            click:true,
            scrollX:true,
            scrollY:false,
            eventPassthrough:'vertical'
        })
      }
      else{
        this.scroll.refresh()
      }
    })

    // let sol = new BScroll(this.$refs.tab, {
    //       startX:0,
    //       click:true,
    //       scrollX:true,
    //       scrollY:false,
    //       eventPassthrough:'vertical'
    //     })
    //   }
  }
}

</script>

<style lang="stylus">
@import '~@/assets/film.styl';
  .node-list 
    // overflow-x auto 
    padding .1rem 0
    margin-right -.12rem

    .wrapper 
      display flex
      padding-right .12rem
      justify-content space-between
      // overflow-x scroll !important

</style>

