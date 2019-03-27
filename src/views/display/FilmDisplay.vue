<template>
  <div id="wrapper-films.film">
    <div id="film" class="page">
      <div class="wrap">
        <div class="wrap-list">
          <div class="page__info">
            <div class="info__basic">
              <div class="basic__big">
                <img
                  class="big__img"
                  :src="filmList.filmVideoImgUrl"
                >
                <router-link to="/show" class="icon icon-angle-left" tag="i"> 
                  <svg t="1553692317669" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2074"><path d="M734.988142 0.604774 223.286947 512.300852 734.986095 1024 796.39163 962.594465 346.095971 512.300852 796.389584 62.005192Z" p-id="2075" fill="#ffffff"></path></svg>
                </router-link>
              </div>
              <div class="basic__intro">
                <h3 class="intro__text intro__title">{{filmList.filmName}}</h3>
                <h5 class="intro__text intro__little">{{filmList.filmEnName}}</h5>
                <p class="intro__text intro__time">{{filmList.openingDate}} 上映</p>
                <p class="intro__text intro__long">{{filmList.filmDuration}}分钟 - {{filmList.filmCatalog}}</p>
                <div class="intro__score clearfix">
                  <div class="score__gwl">
                    <span class="film__icon gwl"></span>
                    {{filmList.scoreG}}
                  </div>
                  <div class="score__db">
                    <span class="film__icon db"></span>
                    {{filmList.scoreD}}
                  </div>
                </div>
                <!-- <div class="intro__audience">
                  <h3 class="title audience__title">Ta们也去看</h3>
                  <ul class="audience__list clearfix">
                    <li class="list__item" v-for="(memberInfo , n) in filmList.memberInfo" :key="n">
                      <img
                        :src="memberInfo.headerImgUrl"
                        class="item__img"
                      >
                    </li>
                  </ul>
                </div> -->
                <div class="intro__cover">
                  <p class="cover__num">全网比价 1家</p>
                  <div class="cover__poster">
                    <img
                      class="poster__img"
                      :src="filmList.filmImg"
                    >
                  </div>
                </div>
              </div>
            </div>
            <!---->
            <div class="info__plot">
              <h3 class="title plot__title">剧情介绍</h3>
              <p class="plot__content part-desc">{{filmList.filmDesc}}</p>
              <span class="plot__more">更多&gt;&gt;</span>
            </div>
            <div class="info__relevant">
              <div class="relevant__video">
                <h3 class="title video__title">影人信息</h3>
                <div class="video">
                  <ul class="video__list clearfix">
                    <li class="list__item" v-for="(filmActorList , n) in filmList.filmActorList" :key="n">
                      <img
                        :src="filmActorList.imgUrl"
                        class="item__img"
                      >
                      <p class="item__name">{{filmActorList.name}}</p>
                      <p class="item__identity">主演</p>
                    </li>
                  </ul>
                </div>
              </div>
              <!---->
            </div>
          </div>
          <div class="page__comment">
            <div class="comment__title">
              <h3 class="title">
                <span class="title__text">观演评论</span>
              </h3>
            </div>
            <div class="comment__list"></div>
            <div class="loading" style="display: none;"></div>
          </div>          
        </div>

      </div>


      <div class="page__btn">
        <div class="btn btn__write">
          <i class="icon icon-chat"></i>
          写影评
        </div>
        <div class="btn btn__seat">比价选座</div>
      </div>
      <div class="swiper-begin">
        <div class="swiper-container">
          <div class="swiper-wrapper"></div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request"
import BScroll from "better-scroll"

export default {
  data() {
    return {
      filmList: []
    }
  },

  async created() {
    let result = await request({
      url: '/api/film/getFilmDetails',
      params: {
        filmId: this.$route.params.id
      }
    })

    this.filmList = result.result
  },

  mounted() {
    let displayScroll = new BScroll(".wrap", {
      click: true
    })
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/film-display.styl'

  #film 
    height: 100vh

    .wrap 
      height: 100%

</style>
