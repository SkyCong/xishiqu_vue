<template>
  <div class="block-wrapper">
  
    <!-- ———————Banner———————————————————————————————————————— -->
    <div>
      <mt-swipe :auto="4000" class="banne">
        <mt-swipe-item v-for="(banner , n) in banners" :key="n">
          <a :href="banner.url"><img :src="banner.imgUrl"></a>  
        </mt-swipe-item>
      </mt-swipe>
    </div> 

    <!-- ———————Nav导航———————————————————————————————————————— -->
     <div class="categories">
      <div class="wrapper">
        <div class="item" v-for="(fruit , n) in fruits" :key="n">
          <span :class="setClass(fruit.pinyinName)"></span>
          {{fruit.title}}
        </div>
        <!-- <div class="item"><span class="cate-icon huajugeju"></span>
          话剧歌剧
        </div>
        <div class="item"><span class="cate-icon xiuxianyule"></span>
          休闲娱乐
        </div>
        <div class="item"><span class="cate-icon film"></span>
          电影
        </div>
        <div class="item"><span class="cate-icon tiyusaishi"></span>
          体育赛事
        </div>
        <div class="item"><span class="cate-icon ertongqinzi"></span>
          儿童亲子
        </div>        
        <div class="item"><span class="cate-icon yinyuehui"></span>
          音乐会
        </div>
        <div class="item"><span class="cate-icon quyizaji"></span>
          曲艺杂技
        </div>
        <div class="item"><span class="cate-icon wudaobalei"></span>
          舞蹈芭蕾
        </div> -->

      </div>
     </div>  


    <!-- ———————图片链接展示———————————————————————————————————————— -->
      <div class="recommends">
          <div class="main">
            <div class="item">
              <div class="img" style="background-image: url(&quot;http://image.xishiqu.cn/upload/apic/920/181/920181228//8110B248-8C7F-6AF1-A2CD-C9ED4075E698.png&quot;);"></div>
              <h4 class="title">限时秒杀</h4>
              <div class="count-down"><span class="i">00</span> 天
                <span class="i">00</span> :
                <span class="i">00</span> :
                <span class="i">00</span></div>
              <div class="next">下一场 2019-01-14 14:00:00</div>
            </div>
          </div>
          <div class="minor">
            <div class="item">
              <div class="left">
                <h4 class="title">每月打卡</h4>
                <div class="remark"></div>
              </div>
              <div class="img" style="background-image: url(&quot;http://image3.xishiqu.cn/upload/apic/920/190/920190307//51709A14-F31C-DC33-3CFC-AB81EB7EAEB2.jpg&quot;);"></div>
            </div>
            <div class="item">
              <div class="left">
                <h4 class="title">西米有礼</h4>
                <div class="remark">赢100西米缤纷活动进行中</div>
              </div>
              <div class="img" style="background-image: url(&quot;http://image4.xishiqu.cn/upload/apic/920/180/920180330//D2F65965-E313-1188-7C9A-DF7911CA4AE5.jpg&quot;);"></div>
            </div>
          </div>
        </div>
  
  
  <!-- jies______@@@@@@@@@@@@@@@@@@@@@@@@@@@@@________ -->
  </div>

<!-- ———————下方图片展示链接秒杀——————————————————————————————————————— -->
    

</template>

<script>
export default {
  props: {
    fruits: {
      type: Object
    },
    banners:{
      type: Object
    }

  },
  methods: {
    setClass(value) {
      let obj = {face: true}
      obj["cate-icon "+`${value}`] = true
      return obj
    },
  },
}
</script>

<style lang="stylus" scoped>
  .block-wrapper
    padding .1rem .12rem
    background #fff
    margin-bottom .12rem

    .banne
      height: 1.7rem;
      background: #ddd;
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      img 
        width 100%
        height 96%

    .categories   
      margin .1rem -0.12rem .1rem 0
      overflow-x auto
      .wrapper 
        width 6.7rem
        padding-right .12rem
        display -webkit-box
        display -webkit-flex
        display -ms-flexbox
        display flex
        -webkit-box-pack justify
        -webkit-justify-content space-between
        -ms-flex-pack justify
        justify-content space-between
        .item
          color #999
          width .52rem
          font-size .12rem
          text-align center

          .cate-icon 
            display block
            height .45rem
            background-size contain
            background-repeat no-repeat
            background-position 50%


          .yanchanghui      
            background-image url(../../assets/nav/yanchanghui.png)

          .huajugeju
            background-image url(../../assets/nav/huajugeju.png)

          .film  
            background-image url(../../assets/nav/film.png)

          .xiuxianyule
            background-image url(../../assets/nav/xiuxianyule.png)

          .tiyusaishi
            background-image url(../../assets/nav/tiyusaishi.png)

          .ertongqinzi      
            background-image url(../../assets/nav/ertongqinzi.png)

          .yinyuehui
            background-image url(../../assets/nav/yinyuehui.png)

          .quyizaji
            background-image url(../../assets/nav/quyizaji.png)

          .wudaobalei      
            background-image url(../../assets/nav/wudaobalei.png)


    .recommends   
      margin: .2rem -.05rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      .item
        display: block;
        color: inherit;
        text-decoration: none;
        background: #f8f8f8;
        border-radius: 6px;
        .title
          font-size: .14rem;
          margin: .05rem 0 .1rem;
          color: #333;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
      .main 
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        margin: 0 .05rem;
        .item
          height: 1.6rem;
          padding: .12rem;
          .img
            display: block;
            height: .6rem;
            margin-bottom: .1rem;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        .count-down
          margin-bottom: .05rem;
          .i 
            display: inline-block;
            color: #fff;
            background: #333;
            height: .22rem;
            width: .22rem;
            line-height: .22rem;
            text-align: center;
        .next    
          font-size: .1rem;
          color: #999;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;


      .minor
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        margin: 0 .05rem;
        height: .75rem; 
        .item
          height: .75rem;
          margin-bottom: .1rem;
          padding: .12rem;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex; 
          .left
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            margin-right: .012rem;
            .title
              width: .8rem;
              font-size: .14rem;
              margin: .05rem 0 .1rem;
              color: #333;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            .remark
              width: .8rem;
              padding: 0 .05rem;
              border-radius: .1rem;
              border: 1px solid #FFA478;
              color: #FFA478;
              font-size: .1rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              line-height: .18rem;  
          .img
            width: .5rem;
            height: .5rem;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;




    

</style>
