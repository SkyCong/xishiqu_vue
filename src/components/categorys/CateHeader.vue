<template>
  <div>
    <div class="header-container">
      <!-- ——————————————左边的定位—————————————— -->
      <div class="left">
        <i class="icon icon-angle-left">
          <svg t="1553179774098" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3312"><path d="M244.905102 548.656955c0.640598 0.647433 1.298773 1.260688 1.967689 1.862226 0.602513 0.664035 1.215768 1.32221 1.863202 1.962808l457.001475 457.007725c19.284336 19.287071 50.550391 19.284336 69.831798 0 19.284336-19.28336 19.284336-50.547461 0-69.833751L349.658072 513.741643l429.438194-429.43878c19.28336-19.287266 19.28336-50.550391 0-69.837657-19.287266-19.286289-50.550391-19.286289-69.834727 0L244.905102 478.824572C225.617835 498.105978 225.617835 529.370666 244.905102 548.656955L244.905102 548.656955z" p-id="3313"></path></svg>
        </i>

        <div>
          上海
          <i class="icon icon-angle-down">
            <svg t="1552719750747" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden; margin-left: 0.05rem;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3878"><path d="M838.4 355.2L512 681.6c-6.4 6.4-14.4 9.6-22.4 9.6-8 0-16.8-3.2-22.4-9.6L140 355.2c-12-12-14.4-32.8-2.4-45.6 12-13.6 33.6-13.6 46.4-0.8l305.6 305.6h0.8L796 308.8c12.8-12.8 33.6-12.8 46.4 0.8 10.4 12.8 8.8 32.8-4 45.6z" fill="#999" p-id="3879"></path></svg>
          </i>
        </div>
      </div>

      <!-- ——————————————中间的搜索—————————————— -->
      <div class="middle">
        <div class="search">
          <i class="icon icon-search">
            <svg t="1552719465319" class="icon" style="width: 1.0380859375em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1063 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3437"><path d="M983.552 930.816l-230.4-227.328c60.928-67.072 96.256-156.672 96.256-256 0-217.6-176.128-390.144-390.656-390.144-217.6 0-390.656 176.128-390.656 390.144 0 217.6 176.128 390.656 390.656 390.656 99.328 0 188.928-35.328 256-96.256l230.4 227.328c9.728 9.728 28.672 9.728 38.4 0 12.8-12.8 12.8-28.672 0-38.4zM119.808 448c0-185.856 150.528-339.456 339.456-339.456S798.72 259.072 798.72 448c0 89.6-35.328 173.056-92.672 233.472-3.072 0-3.072 3.072-6.656 3.072-3.072 3.072-3.072 3.072-3.072 6.656-60.928 57.856-143.872 92.672-233.472 92.672-189.44 3.072-343.04-150.528-343.04-335.872z" p-id="3438" fill="#999"></path><path d="M193.024 422.912s41.984-210.944 233.984-224.768c0-0.512-263.168-31.744-233.984 224.768" p-id="3439" fill="#999"></path></svg>
          </i>
          <input type="text" placeholder="搜索明星、演出、场馆">
        </div>
      </div>

      <!-- ——————————————右边logo—————————————— -->
      <div class="right">
        <div class="sorts">
          <i class="btn btn-sort"></i>
          <div class="sorts__modal modal" style="display: none;">
            <div class="modal__dialog">
              <div class="item active">
                默认
              </div>
              <div class="item">
                按价格
              </div>
              <div class="item">
                按日期
              </div>
            </div>
          </div>
        </div> 
        <i class="btn-date"></i>
      </div>
    </div>

    <div class="categories">
      <div class="wrapper">
        <router-link class="item" v-for="(fruit , n) in frontCateInfos" :key="n" tag="div" active-class="active" :to="'/category/'+fruit.pinyinName">
          <span tag="span" :class="'cate-icon '+fruit.pinyinName"  ></span>
          {{fruit.title}}
        </router-link>
      </div>
    </div> 

  </div>
</template>

<script>
import request from '@/utils/request'

export default {

  data () {
    return {
       frontCateInfos: [],
    }
  },

  async created() {
    // Indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'fading-circle'
    // });
    let moskData = await request({
      url: 'https://api.myjson.com/bins/9cfp6'
    })

    this.frontCateInfos = moskData.frontCateInfo
    // Indicator.close();
  },

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/border.styl'


.header-container
  display -webkit-flex
  display -ms-flexbox
  border(0 0 1px 0)
  display flex
  height .45rem
  -webkit-justify-content space-between
  -ms-flex-pack justify
  justify-content space-between
  padding 0 .1rem
  -webkit-align-items center
  -ms-flex-align center
  align-items center
  background-color #fff
  position relative
  z-index 900

  .left
    font-size .14rem
    display -webkit-flex
    display -ms-flexbox
    display flex
    -webkit-align-items center
    -ms-flex-align center
    align-items center
    -webkit-justify-content flex-start
    -ms-flex-pack start
    justify-content flex-start
    .icon
      font-size: .16rem
      color: rgba(0,0,0,.72)
    .icon-angledown
      color: #999;
      font-size: .14rem;
      margin: 0 .05rem;

  .middle
    color: #333;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
    font-size: 0.17rem;
    text-align: center;
    font-weight: 700;

    .search
      background #f4f4f4
      border-radius 32px
      padding .025rem .1rem
      margin 0 .1rem
      display -webkit-flex
      display -ms-flexbox
      display flex
      -webkit-justify-content space-between
      -ms-flex-pack justify
      justify-content space-between

      .icon
        color #999
        font-size .14rem
        margin-right .05rem
        background-image url

      input 
        border-width 0
        color #999
        font-size .12rem
        background transparent
        -webkit-flex 1
        -ms-flex 1
        flex 1
        outline none
        font-weight 400

  .right
    text-align: right;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    .btn
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
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

    .btn-sort 
        width: 21px
        height: 21px
        margin-left: .1rem
        background: url(../../assets/icon/sort.png) center center no-repeat
        background-size: contain

    .btn-date 
        width: 21px
        height: 21px
        margin-left: .1rem
        background: url(../../assets/icon/date.png) center center no-repeat
        background-size: contain
      
.categories   
      padding: 0 .12rem;
      overflow-x: auto;
      -webkit-box-shadow: 0 0 4px 0 #ddd;
      box-shadow: 0 0 4px 0 #ddd;
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
          color: #999;
          width: .52rem;
          font-size: .12rem;
          text-align: center;
          padding-bottom: .05rem;
          border-bottom: 2px solid transparent;
          .cate-icon 
            display block
            height .45rem
            background-size contain
            background-repeat no-repeat
            background-position 50%
          .quanbu      
            background-image url(../../assets/nav/quanbu.png)

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
      
        .active
          color: #ff5400;
          border-color: #ff5400;
          .quanbu      
            background-image url(../../assets/nav/a-quanbu.png)

          .yanchanghui      
            background-image url(../../assets/nav/a-yanchanghui.png)

          .huajugeju
            background-image url(../../assets/nav/a-huajugeju.png)

          .film  
            background-image url(../../assets/nav/a-film.png)

          .xiuxianyule
            background-image url(../../assets/nav/a-xiuxianyule.png)

          .tiyusaishi
            background-image url(../../assets/nav/a-tiyusaishi.png)

          .ertongqinzi      
            background-image url(../../assets/nav/a-ertongqinzi.png)

          .yinyuehui
            background-image url(../../assets/nav/a-yinyuehui.png)

          .quyizaji
            background-image url(../../assets/nav/a-quyizaji.png)

          .wudaobalei      
            background-image url(../../assets/nav/a-wudaobalei.png)
</style>