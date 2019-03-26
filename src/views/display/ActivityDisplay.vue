<template>
  <div id="wrapper-activity">
    <div class="page-group">
      <div id="activity" class="page">

        <div class="wrap">
          <div class="wrap-list">
            <div class="page__header">
              <router-link class="left" to="/show" tag="div">
                <i class="icon icon-angle-left" >
                  <svg t="1553179774098" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3312"><path d="M244.905102 548.656955c0.640598 0.647433 1.298773 1.260688 1.967689 1.862226 0.602513 0.664035 1.215768 1.32221 1.863202 1.962808l457.001475 457.007725c19.284336 19.287071 50.550391 19.284336 69.831798 0 19.284336-19.28336 19.284336-50.547461 0-69.833751L349.658072 513.741643l429.438194-429.43878c19.28336-19.287266 19.28336-50.550391 0-69.837657-19.287266-19.286289-50.550391-19.286289-69.834727 0L244.905102 478.824572C225.617835 498.105978 225.617835 529.370666 244.905102 548.656955L244.905102 548.656955z" p-id="3313"></path>
                  </svg>
                </i>
                <!---->
              </router-link>
              <div class="middle">
                <span>演出详情</span>
              </div>
              <div class="right">
                <div class="share">
                  <i class="icon icon-dynshare">
                    <svg t="1553526797426" style="width: 1.2em; height: 1.2em;vertical-align: bottom;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2259"><path d="M779.636364 954.181818h-535.272728A174.778182 174.778182 0 0 1 69.818182 779.636364v-535.272728A174.778182 174.778182 0 0 1 244.363636 69.818182H512a34.909091 34.909091 0 0 1 0 69.818182H244.363636A104.96 104.96 0 0 0 139.636364 244.363636v535.272728a104.96 104.96 0 0 0 104.727272 104.727272h535.272728a104.96 104.96 0 0 0 104.727272-104.727272V512a34.909091 34.909091 0 0 1 69.818182 0v267.636364a174.778182 174.778182 0 0 1-174.545454 174.545454z" p-id="2260" fill="#515151"></path><path d="M500.363636 558.545455a35.141818 35.141818 0 0 1-24.669091-10.24 34.676364 34.676364 0 0 1 0-49.338182l418.909091-418.909091a34.909091 34.909091 0 0 1 49.338182 49.338182l-418.909091 418.909091a35.141818 35.141818 0 0 1-24.669091 10.24z" p-id="2261" fill="#515151"></path><path d="M919.272727 139.636364h-186.181818a34.909091 34.909091 0 0 1 0-69.818182h186.181818a34.909091 34.909091 0 0 1 0 69.818182z" p-id="2262" fill="#515151"></path><path d="M919.272727 325.818182a34.909091 34.909091 0 0 1-34.909091-34.909091v-186.181818a34.909091 34.909091 0 0 1 69.818182 0v186.181818a34.909091 34.909091 0 0 1-34.909091 34.909091z" p-id="2263" fill="#515151"></path>
                    </svg>
                  </i>
                  <div class="share__modal modal" style="display: none;">
                    <div class="modal__dialog" style="display: none;">
                      <div class="modal__title">分享</div>
                      <div class="modal__content">
                        <div class="item qq">
                          <i class="icon icon-qq"></i>QQ好友
                        </div>
                        <div class="item qq-zone">
                          <i class="icon icon-qq-zone"></i>QQ空间
                        </div>
                        <div class="item weibo">
                          <i class="icon icon-weibo"></i>新浪微博
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="basic-info">
              <div
                class="bg"
                style="background-image: url(&quot;http://image.xishiqu.cn/upload/activity/119/031/20190313001/v/b/F4F0FD71-3A45-1DFF-1C96-67891F5D7226.jpg&quot;);"
              ></div>
              <div class="mask"></div>
              <div class="thumbnail">
                <!---->
                <img
                  src="http://image.xishiqu.cn/upload/activity/119/031/20190313001/v/b/F4F0FD71-3A45-1DFF-1C96-67891F5D7226.jpg"
                  class="thumbnail__img"
                >
              </div>
              <div class="main">
                <h1 class="title">预订 2019超级草莓音乐节—上海站</h1>
                <div class="date">2019.04.26~2019.04.28</div>
                <div class="heat">
                  <div class="heat__main">
                    112.2 ℃
                    <br>
                    <span>西十区指数</span>
                  </div>
                </div>
                <div class="price">
                  578.00
                  <span class="sub">起</span>
                </div>
              </div>
            </div>
            <div class="activity-info">
              <div class="info-item address">
                <span class="text-content">
                  <i class="icon icon-marker">
                    <svg t="1553609758231" style="width: 1.0009765625em; height: 1em;vertical-align: text-bottom;fill: currentColor;overflow: hidden;" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2140"><path d="M839.946482 389.336542c0-179.917116-147.043874-325.820973-328.561518-325.820973-181.460336 0-328.561518 145.903857-328.561518 325.820973 0 59.446709 16.307166 114.955546 44.308214 162.939652l-0.351011 0 284.574638 407.316894 284.690277-407.316894-0.379665 0C823.757001 504.292088 839.946482 448.783251 839.946482 389.336542M511.413617 552.215816c-90.716353 0-164.280247-72.922251-164.280247-162.907928 0-89.927346 73.563895-162.907928 164.280247-162.907928 90.802315 0 164.280247 72.980582 164.280247 162.907928C675.693865 479.293565 602.215932 552.215816 511.413617 552.215816" p-id="2141" fill="#707070"></path></svg>
                  </i>上海滩运动公社（原上海瑞可碧橄榄球俱乐部）
                </span>
              </div>
              <!---->
              <div class="booking">
                <div class="booking__content info-item">
                  <span class="text-content">
                    <span class="orange">预订</span>预订演出票的相关说明
                  </span>
                  <span class="icon icon-angle-right">
                    <svg t="1553609987425" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2073"><path d="M642 512L296.15 858.37a38.17 38.17 0 0 0 0 53.93l2.52 2.52a38.05 38.05 0 0 0 53.89 0l371.12-371.75q0.84-0.75 1.65-1.56l2.52-2.52a38.18 38.18 0 0 0 2.58-51.07 36 36 0 0 0-2.63-2.92l-2.51-2.52-0.19-0.18-372.5-373.12a38.05 38.05 0 0 0-53.89 0l-2.51 2.52a38.17 38.17 0 0 0 0 53.93z" fill="#999999" p-id="2074"></path></svg>
                  </span>
                </div>
                <div class="booking__modal modal" style="display: none;">
                  <div class="modal__dialog" style="display: none;">
                    <div class="modal__title">预订票提示</div>
                    <div class="modal__content">
                      <ol class="list">
                        <li>当前本演出的全部或部分场次、票档为预订状态， 即主办方暂未开始开票;</li>
                        <li>该演出具体开票日期将由主办方、演出场馆及相关卖家确定;</li>
                        <li>演出票是稀缺资源，订票完成后不能取消。若您因个人原因无法观演，您可在西十区卖票平台上挂牌售卖;</li>
                        <li>正式开票后，西十区将督促平台上的票源方尽快为用户配票（根据用户付款的先后顺序）;</li>
                        <li>如根据先后顺序配票后您未能获得演出票，您可以发布求票信息;</li>
                        <li>客服电话：400-003-9992。服务时间：9:00-22:00。</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <!---->
            </div>
            <div class="protection">
              <div class="protection__content">
                <div class="protection__icons">
                  <span class="icon-display icon-secured">担保交易</span>
                  <span class="icon-display icon-guaranteed">保证金制度</span>
                  <span class="icon-display icon-accompany">先行赔付</span>
                  <span class="icon-display icon-seller">3家竞价</span>
                </div>
                <span class="icon icon-angle-right"></span>
              </div>
              <div class="protection__modal modal" style="display: none;">
                <div class="modal__dialog" style="display: none;">
                  <div class="modal__title">购票保障</div>
                  <div class="modal__content">
                    <ul class="list">
                      <li class="item icon-secured">
                        <h6>担保交易</h6>
                        <div>由西十区提供交易担保，演出结束后无争议才打款给卖家;</div>
                      </li>
                      <li class="item icon-guaranteed">
                        <h6>保证金制度</h6>
                        <div>卖家已缴纳保证金，用于担保此次交易;</div>
                      </li>
                      <li class="item icon-accompany">
                        <h6>先行赔付</h6>
                        <div>卖家无票、假票、票面不符等一旦违约先行赔付;</div>
                      </li>
                      <li class="item icon-seller">
                        <h6>3家竞价</h6>
                        <div>3卖家共同在线比价购买;</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-wrapper">
              <div class="block">
                <h3 class="block__title">演出介绍</h3>
                <div class="block__content intro">
                  <div class="series swiper-container">
                    <div class="swiper-wrapper" style="width: 0px;"></div>
                  </div>
                  <div class="collapsed">
                    <div class="intro__content">
                      <div>
                        <p
                          style="text-indent:2em;"
                        >摩登系音乐人全员出动，两岸三地受欢迎的音乐人也会一同亮相。台北上海闺蜜合体？民谣搭档嘻哈传奇？都会擦出什么样的火花？</p>
                        <p
                          style="text-indent:2em;"
                        >Hip-Hop阵容里，有偶像级人气超级CP，有老炮和新生代，也有当地说唱风向标及通过《明日之子》《中国新说唱》等节目为大众熟知的潮流ICON。</p>
                        <p
                          style="text-indent:2em;"
                        >曾推出舌头、木马、诱导社、小河、万晓利等世纪之交中国摇滚和民谣中坚力量，创造了一个世代之历史的独立乐界标杆——BadHead厂牌，成立20周年将初次以舞台的形式在音乐节亮相。</p>
                        <p
                          style="text-indent:2em;"
                        >“YOUNG BLOOD新血计划”作为摩登天空十分具有探索性的青年文化和艺术人才发掘项目，将初次在沪蓉双城同步打造青年潮流文化阵地——“YOUNG BLOOD新血街区”，联合MVM视觉厂牌，集合艺术装置、潮流元素、街头文化等丰富内容，“YOUNG BLOOD新血计划舞台”也将汇集“YOUNG BLOOD新血音乐人”中的佼佼者，呈现十分前沿的青年文化景象，成为现场乐迷必去的打卡地。</p>
                        <p
                          style="text-indent: 2em;"
                        >I.M.O. 星际动力别动队_你们的老朋友——宇航员REZ和YUKO，将带上新朋友河魨KULI、双头鹅GANS以全新的形式现身。高颜值的草莓周边将在现场新鲜发售。</p>
                      </div>
                      <div class="gallery-wrapper">
                        <div class="gallery swiper-container">
                          <div class="title">「 演出图集 」</div>
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <img
                                src="Http://image3.xishiqu.cn/upload/activity/119/031/20190313001//b/96FCFBB6-F7EB-1444-54AF-037627134836.jpg"
                              >
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="Http://image6.xishiqu.cn/upload/activity/119/031/20190313001//b/9D7C1E08-E6A0-CEEF-FC28-7090D85E2E60.jpg"
                              >
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="Http://image5.xishiqu.cn/upload/activity/119/031/20190313001//b/9041B6D2-52A2-9B3D-4FEF-16DD84E1C438.jpg"
                              >
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="Http://image3.xishiqu.cn/upload/activity/119/031/20190313001//b/F777CB44-4DE9-D66B-C294-A6506011B231.jpg"
                              >
                            </div>
                          </div>
                        </div>
                        <div class="full-screen swiper-container" style="display: none;">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <img
                                data-src="Http://image3.xishiqu.cn/upload/activity/119/031/20190313001//o/96FCFBB6-F7EB-1444-54AF-037627134836.jpg"
                                class="swiper-lazy"
                              >
                              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                              <img
                                data-src="Http://image6.xishiqu.cn/upload/activity/119/031/20190313001//o/9D7C1E08-E6A0-CEEF-FC28-7090D85E2E60.jpg"
                                class="swiper-lazy"
                              >
                              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                              <img
                                data-src="Http://image5.xishiqu.cn/upload/activity/119/031/20190313001//o/9041B6D2-52A2-9B3D-4FEF-16DD84E1C438.jpg"
                                class="swiper-lazy"
                              >
                              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                              <img
                                data-src="Http://image3.xishiqu.cn/upload/activity/119/031/20190313001//o/F777CB44-4DE9-D66B-C294-A6506011B231.jpg"
                                class="swiper-lazy"
                              >
                              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="intro__toggle">展开更多</div>
                  </div>
                </div>
              </div>
              <div class="block">
                <h3 class="block__title">购票须知</h3>
                <div class="block__content remark">
                  1、1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场（如演出介绍内有不同身高规定，以演出介绍内身高说明为准）。
                  <br>2、演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务。
                </div>
              </div>
              <div class="block">
                <h3 class="block__title">
                  用户答疑
                  <div class="more">
                    我要提问
                    <span class="icon icon-angle-right">
                      <svg t="1553609987425" style="width: 1em; height: 1em;vertical-align: top;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2073"><path d="M642 512L296.15 858.37a38.17 38.17 0 0 0 0 53.93l2.52 2.52a38.05 38.05 0 0 0 53.89 0l371.12-371.75q0.84-0.75 1.65-1.56l2.52-2.52a38.18 38.18 0 0 0 2.58-51.07 36 36 0 0 0-2.63-2.92l-2.51-2.52-0.19-0.18-372.5-373.12a38.05 38.05 0 0 0-53.89 0l-2.51 2.52a38.17 38.17 0 0 0 0 53.93z" fill="#999999" p-id="2074"></path></svg>
                    </span>
                  </div>
                </h3>
                <div class="block__content qa"></div>
              </div>
              <div class="block">
                <h3 class="block__title">
                  互动评论(0)
                  <div class="btn">写评论</div>
                </h3>
                <div class="block__content comments">
                  <!---->
                </div>
              </div>
            </div>          
          </div>
        </div>


        <div class="page__footer">
          <a href="tel:4000039992" class="item icon icon-service">
            <svg t="1553597822770" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7899"><path d="M892.954 399.418C869.075 210.277 707.621 64 512 64S154.925 210.277 131.046 399.418C91.113 421.084 64 463.375 64 512v128c0 70.692 57.308 128 128 128s128-57.308 128-128V512c0-68.554-53.894-124.518-121.623-127.841C227.966 238.018 357.132 128 512 128c154.869 0 284.034 110.018 313.623 256.159C757.894 387.482 704 443.446 704 512v128c0 42.237 20.462 79.691 52.01 103.005-32.662 38.465-74.258 69.098-121.579 88.714C621.173 794.581 585.693 768 544 768h-64c-53.02 0-96 42.98-96 96s42.98 96 96 96h64c40.053 0 74.371-24.531 88.764-59.387 74.73-24.74 139.279-71.818 185.757-133.319 4.429 0.464 8.926 0.706 13.479 0.706 70.692 0 128-57.308 128-128V512c0-48.625-27.113-90.916-67.046-112.582zM256 512v128c0 35.347-28.654 64-64 64s-64-28.653-64-64V512c0-35.346 28.654-64 64-64s64 28.654 64 64z m288 384h-64c-17.673 0-32-14.327-32-32s14.327-32 32-32h64c17.673 0 32 14.327 32 32s-14.327 32-32 32z m352-256c0 35.347-28.654 64-64 64s-64-28.653-64-64V512c0-35.346 28.654-64 64-64s64 28.654 64 64v128z" p-id="7900" fill="#8a8a8a"></path></svg>
          </a>
          <span class="item icon icon-like">
            <svg t="1553597567450" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4586"><path d="M512 922.59a31.9 31.9 0 0 1-22.63-9.37L146.31 570.15A274.6 274.6 0 0 1 512 161.54a274.6 274.6 0 0 1 365.69 408.61L534.63 913.21a31.9 31.9 0 0 1-22.63 9.38zM340.47 165.41a210.58 210.58 0 0 0-148.9 359.49L512 845.33 832.43 524.9a210.58 210.58 0 1 0-297.8-297.81 32 32 0 0 1-45.25 0 209.2 209.2 0 0 0-148.91-61.68z" p-id="4587" fill="#bfbfbf"></path><path d="M512 922.59a31.9 31.9 0 0 1-22.63-9.37L146.31 570.15A274.6 274.6 0 0 1 512 161.54a274.6 274.6 0 0 1 365.69 408.61L534.63 913.21a31.9 31.9 0 0 1-22.63 9.38zM340.47 165.41a210.58 210.58 0 0 0-148.9 359.49L512 845.33 832.43 524.9a210.58 210.58 0 1 0-297.8-297.81 32 32 0 0 1-45.25 0 209.2 209.2 0 0 0-148.91-61.68z" p-id="4588" fill="#8a8a8a"></path></svg>
          </span>
          <!---->
          <div class="item btn" @click="tz">比价购票</div>
        </div>
        <div>
          <!---->
          <!---->
        </div>
      </div>
    </div>
    <!---->
    <!---->
  </div>
</template>



<script>
import BScroll from "better-scroll";
import { Indicator } from "mint-ui";
import { METHODS } from 'http';

export default {
  
  mounted() {

    let displayScroll = new BScroll(".wrap",{
          click: true
    })

  },

  methods: {

    tz(){
      console.log(0);
      
      // this.$router.replace('/show')
    }
  }

  

}
</script>


<style lang="stylus" scoped>
  @import '~@/assets/activity.styl';
  #activity
    height 100vh
    .wrap 
      height 100%
    // .wrap-list
    //   height 100%

  .page__header 
    display: -webkit-box
    display: -webkit-flex
    display: -ms-flexbox
    display: flex
    height: .45rem
    -webkit-box-pack: justify
    -webkit-justify-content: space-between
    -ms-flex-pack: justify
    justify-content: space-between
    padding: 0 .1rem
    -webkit-box-align: center
    -webkit-align-items: center
    -ms-flex-align: center
    align-items: center
    background-color: #fff
    border-bottom: 1px solid #f4f4f4
    position: relative
    z-index: 900
    .left 
      font-size: .14rem
      display: -webkit-box
      display: -webkit-flex
      display: -ms-flexbox
      display: flex
      -webkit-box-align: center
      -webkit-align-items: center
      -ms-flex-align: center
      align-items: center
      -webkit-box-pack: start
      -webkit-justify-content: flex-start
      -ms-flex-pack: start
      justify-content: flex-start
      .icon-angle-down 
        color: #999;
        font-size: .14rem;
        margin: 0 .05rem; 
    .middle 
      color: #333
      -webkit-flex: 1
      -ms-flex: 1
      flex: 1
      overflow: hidden
      text-overflow: ellipsis
      white-space: pre
      font-size: .17rem
      text-align: center
      font-weight: 700
      .search 
        background: #F4F4F4
        border-radius: 32px
        padding: .025rem .1rem
        margin: 0 .1rem
        display: -webkit-box
        display: -webkit-flex
        display: -ms-flexbox
        display: flex
        -webkit-box-pack: justify
        -webkit-justify-content: space-between
        -ms-flex-pack: justify
        justify-content: space-between
        .icon 
          color: #999 
          font-size: .14rem 
          margin-right: .1rem  
        input 
          color: #999 
          font-size: .12rem 
          background: transparent 
          border: none 
          -webkit-box-flex: 1 
          -webkit-flex: 1 
          -ms-flex: 1 
          flex: 1 
          outline: none 
          font-weight: normal 
    .right 
      text-align: right 
      display: -webkit-box 
      display: -webkit-flex 
      display: -ms-flexbox 
      display: flex 
      -webkit-box-align: center 
      -webkit-align-items: center 
      -ms-flex-align: center 
      align-items: center 
      -webkit-box-pack: end 
      -webkit-justify-content: flex-end 
      -ms-flex-pack: end 
      justify-content: flex-end  
      .icon 
        margin-left: .05rem  
</style>
