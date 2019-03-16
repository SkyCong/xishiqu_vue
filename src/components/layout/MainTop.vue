<template>
  <div class="block-wrapper">
  
    <!-- ———————Banner———————————————————————————————————————— -->
    <div>
      <mt-swipe :auto="4000" class="banne">
        <mt-swipe-item class="slide1">
          <a href="#"><img src="../../assets/banner1.jpg"></a>  
        </mt-swipe-item>

        <mt-swipe-item class="slide2">
          <a href="#"><img src="../../assets/banner2.jpeg"></a>  
        </mt-swipe-item>

        <mt-swipe-item class="slide3">
          <a href="#"><img src="../../assets/banner3.jpg"></a>  
        </mt-swipe-item>
      </mt-swipe>
    </div> 

    <!-- ———————Nav导航———————————————————————————————————————— -->
     <div class="categories">
      <div class="wrapper">
        <div class="item"><span class="cate-icon yanchanghui"></span>
          演唱会
        </div>
        <div class="item"><span class="cate-icon huajugeju"></span>
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
        </div>
      </div>
    </div>  
  
  
  
  
  <!-- jies______@@@@@@@@@@@@@@@@@@@@@@@@@@@@@________ -->
  </div>

<!-- ———————下方图片展示链接秒杀——————————————————————————————————————— -->
    <!-- <div class="recommends">
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
    </div> -->

</template>

<script>
export default {

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
          background #fff

          .cate-icon 
            background #fff


            .yanchanghui      
              background #fff

            .huajugeju
              background #fff

            .film  
              background #fff

            .xiuxianyule
              background #fff

            .tiyusaishi
              background #fff

            .ertongqinzi      
              background #fff

            .yinyuehui
              background #fff

            .quyizaji
              background #fff

            .wudaobalei      
              background #fff






    

</style>
