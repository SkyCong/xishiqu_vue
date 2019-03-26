<template>
  <div class="header-container">
    <!-- ——————————————左边的定位—————————————— -->
    <div class="left">
      <!---->
      <div>
        上海
          <router-link to="/city" tag="i" class="icon icon-angle-down">
            <svg t="1552719750747" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden; margin-left: 0.05rem;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3878"><path d="M838.4 355.2L512 681.6c-6.4 6.4-14.4 9.6-22.4 9.6-8 0-16.8-3.2-22.4-9.6L140 355.2c-12-12-14.4-32.8-2.4-45.6 12-13.6 33.6-13.6 46.4-0.8l305.6 305.6h0.8L796 308.8c12.8-12.8 33.6-12.8 46.4 0.8 10.4 12.8 8.8 32.8-4 45.6z" fill="#999" p-id="3879"></path></svg>
          </router-link>
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
      <router-link to="/activity" class="icon icon-gift active" tag="div">
                <!-- <router-link to="/show" class="icon icon-angle-left" tag="i"> -->

        <svg t="1552720557775" class="icon-liwu" style="width: 0.18rem; height: 0.18rem; margin-bottom: 0.05rem" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3926"><path d="M920 194.4h-35.5c18-30.5 25.9-59.6 23.4-86.6-2.1-22.6-12.8-54.9-52.1-80.7C823.3 5.7 781.5 0.4 735 12c-75.3 18.9-164.4 83.9-223 162.4C453.4 95.9 364.3 30.9 289 12 242.5 0.3 200.6 5.6 168.1 27.1c-39.2 25.8-49.9 58.1-52 80.7-2.5 27 5.3 56.1 23.4 86.6H104c-53.8 0-97.5 43.8-97.5 97.6v125.7c0 42.6 28.1 80.2 68.7 92.8-3.9 10.7-5.9 21.7-5.9 32.9v377.1c0 53.8 43.8 97.6 97.6 97.6h690.5c53.8 0 97.5-43.8 97.5-97.6V543.4c0-11.2-2-22.4-5.8-32.9 40.5-12.7 68.6-50.3 68.6-92.8V292c-0.2-53.7-43.9-97.6-97.7-97.6m-62.7 754.1H546.7V515.3h310.6c15.5 0 28 12.6 28 28.1v377.1c0 15.4-12.5 28-28 28M585 194.4c49.4-57 114.2-101.7 166.9-115 27.3-6.9 49.7-5 65.9 5.7 17.2 11.3 20.3 21.4 21 29 2.7 27.9-27.2 65.6-41.3 80.2H585v0.1zM948 292v125.7c0 15.5-12.5 28.1-28 28.1H546.7V264H920c15.5 0 28 12.6 28 28M477.3 515.3v433.2H166.8c-15.5 0-28.1-12.6-28.1-28.1v-377c0-15.5 12.6-28.1 28.1-28.1h310.5z m-292-401.1c0.7-7.6 3.8-17.7 20.9-29 16.1-10.7 38.5-12.6 66-5.7 52.4 13.1 117.1 57.9 166.6 115H226.6c-12.7-12.9-44.1-51.7-41.3-80.3M75.9 292c0-15.5 12.6-28.1 28.1-28.1h373.3v181.8H104c-15.5 0-28.1-12.6-28.1-28.1V292z" p-id="3927"></path></svg>
      </router-link>
    </div>

  </div>

</template>


<style lang="stylus" scoped>
@import '~@/assets/border.styl';


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

    .icon
      margin-left: .05rem
      font-size: .2rem
      color: rgba(0,0,0,.72)

    .icon-gift
      width .18rem
      height .18rem
      background-size contain
      position relative

    .icon-gift.active:after 
      content: '';
      position: absolute;
      top: -2px;
      right: -2px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #EB464B;



</style>