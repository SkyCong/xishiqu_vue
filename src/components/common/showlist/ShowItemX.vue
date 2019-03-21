<template>
  <div class="node-list">
    <div class="wrapper" :style="'width: '+1.12*mData.length+'rem;'">
      <!--11.2*mData.length-->
      <template v-if="flagItemX(pinyinName)">
        <div class="node node--activity vertical" v-for="(item , n) in mData.slice(1)" :key="n">
          <!---->
          <!---->

          
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
        </div>
      </template>
      <template v-else>
        <div class="node node--film vertical" v-for="(film , t) in mData" :key="t">
          <div class="thumbnail" :style="{backgroundImage : 'url('+film.filmImg+')'}">            
          <div class="thumbnail__score">{{film.scoreD}}</div>
          </div>
          
          <div class="main">
            <h1 class="filmName">{{film.filmName}}</h1>
          </div>
        </div>
      </template>
    </div> 
  </div>
</template>
<script>

export default {

  props: {
    mData: Array,
    pinyinName : String
  }
  ,
    methods: {
    flagItemX(state) {
      if(state != 'film')
        return true
    }
  }

}

</script>

<style lang="stylus">
@import '~@/assets/film.styl'

    .main-node 
        margin-bottom .12rem
        .node--activity.vertical 
            width 100%
            .thumbnail 
                width 100%
                height 1.5rem    
            .main 
                display none
                 
    .node-list 
        overflow-x auto
        padding .1rem 0
        margin-right -.12rem
        .wrapper 
            width 5.48rem
            display flex
            padding-right .12rem
            justify-content space-between
            
        
</style>

