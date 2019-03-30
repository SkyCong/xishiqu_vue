<template>
  <div id="interest">
    <div class="header">同趣</div>

    <div class="wrap">
      <div class="paddingtop">
          <div class="newItems" v-for="(newItem , n) in newItems" :key="n.id">
            <div class="item-wrap">
              <h3 class="title">{{newItem.title}}</h3>
              <h4 class="er-title">{{newItem.summary.substring(newItem.title.length+4)}}...</h4>
              <img class="imags" :src=newItem.picture>
              <p class="tips">
                <i class="icon">
                  <svg t="1553437734346" style="width: 1.8em; height: 1.8em;vertical-align: top;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8871"><path d="M512.483379 513.628224m-508.819876 0a508.819876 508.819876 0 1 0 1017.639752 0 508.819876 508.819876 0 1 0-1017.639752 0Z" fill="#FE3D50" p-id="8872"></path><path d="M512.483379 513.628224m-355.442485 0a355.442484 355.442484 0 1 0 710.884969 0 355.442484 355.442484 0 1 0-710.884969 0Z" fill="#F8E71C" p-id="8873"></path><path d="M897.653665 807.643429H127.313093a25.440994 25.440994 0 0 1-25.440994-25.440994V245.060373a25.440994 25.440994 0 0 1 25.440994-25.440994h770.340572a25.440994 25.440994 0 0 1 25.440993 25.440994v537.148422a25.440994 25.440994 0 0 1-25.440993 25.440994z" fill="#FFFFFF" p-id="8874"></path><path d="M923.113739 724.966559v44.521739c0 14.056149-11.384845 25.440994-25.440994 25.440994H127.319453c-14.056149 0-25.440994-11.384845-25.440993-25.440994v-44.521739c0 14.056149 11.384845 25.440994 25.440993 25.440994h770.353292c14.056149 0 25.440994-11.384845 25.440994-25.440994z" fill="#F0F2F1" p-id="8875"></path><path d="M923.113739 245.022211v37.461864H101.87846v-37.461864c0-13.992547 11.384845-25.440994 25.440993-25.440994h770.353292c14.056149 0 25.440994 11.448447 25.440994 25.440994z" fill="#FFFFFF" p-id="8876"></path><path d="M165.480944 638.657988h230.476323v168.521142H165.480944z" fill="#51E4C2" p-id="8877"></path><path d="M157.040894 251.032646m-10.780621 0a10.780621 10.780621 0 1 0 21.561243 0 10.780621 10.780621 0 1 0-21.561243 0Z" fill="#FE3D50" p-id="8878"></path><path d="M194.407354 251.032646m-10.780621 0a10.780621 10.780621 0 1 0 21.561242 0 10.780621 10.780621 0 1 0-21.561242 0Z" fill="#F8E71C" p-id="8879"></path><path d="M231.773814 251.032646m-10.780621 0a10.780621 10.780621 0 1 0 21.561242 0 10.780621 10.780621 0 1 0-21.561242 0Z" fill="#51E4C2" p-id="8880"></path><path d="M101.87846 282.484075h821.216198" fill="" p-id="8881"></path><path d="M448.162186 346.086559h118.459628v17.490683H448.162186zM448.162186 409.689043h411.031056v17.490684H448.162186zM448.162186 473.291528h411.031056v17.490683H448.162186zM448.162186 638.657988h118.459628v17.490683H448.162186zM448.162186 702.260472h411.031056v17.490683H448.162186zM448.162186 765.862957h411.031056v17.490683H448.162186z" fill="#E8EDEB" p-id="8882"></path><path d="M165.480944 346.086559h230.476323v230.476323H165.480944z" fill="#2283F6" p-id="8883"></path><path d="M165.480944 556.903354h230.476323v19.659528H165.480944z" fill="#252528" p-id="8884"></path><path d="M646.124919 537.949814H554.963478a19.080745 19.080745 0 0 0-19.080745 19.080745v0.445217a19.080745 19.080745 0 0 0 19.080745 19.080746h91.161441a19.080745 19.080745 0 0 0 19.080746-19.080746v-0.445217a19.080745 19.080745 0 0 0-19.080746-19.080745z" fill="#F8E71C" p-id="8885"></path><path d="M836.932373 537.949814h-91.161441a19.080745 19.080745 0 0 0-19.080746 19.080745v0.445217a19.080745 19.080745 0 0 0 19.080746 19.080746h91.161441a19.080745 19.080745 0 0 0 19.080745-19.080746v-0.445217a19.080745 19.080745 0 0 0-19.080745-19.080745z" fill="#FE3D50" p-id="8886"></path></svg>
                </i>
                <span class="source">{{newItem.source}}</span>
                <span class="date">{{newItem.freshTime}}</span>
              </p>              
            </div>

          </div>
      </div>

    </div>
  </div>
</template>


<script>
import request from "@/utils/request"
import BScroll from 'better-scroll'
// import LoginYES from '@/components/logins/LoginYES'
import _ from 'lodash'
import { nextTick } from 'q';

export default {

  data () {
    return {
       newItems: []
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if(vm.$store.state.isLogin)
       vm.$router.push({path:'/interest'})
      else{
        alert('请先登录')
        vm.$router.push({path:'/login'})        
      }
    })
  },

  async created() {

    let result = await request({
      url: 'proxy/chinanews/getNewsList',
      params: {
        language: "chs",
        pageSize: 15,
        searchType: 1,
        dtp: 6,
        isWap: "yes",
        cname: "yl",
        pageIndex: 1,
      }
    })
    this.newItems=result.data
  },

  mounted() {
    let page=2
    let interestScroll = new BScroll(".wrap",{
          click: true
    })
    let that = this

    interestScroll.on('scroll', function(e) {
      
    })

    interestScroll.on('scrollEnd', _.debounce(async function() {
      if (this.y <= this.maxScrollY) {
        let result = await request({
          url: 'proxy/chinanews/getNewsList',
          params: {
            language: "chs",
            pageSize: 15,
            searchType: 1,
            dtp: 6,
            isWap: "yes",
            cname: "yl",
            pageIndex: page++,
          }
        })

        that.newItems = [
          ...that.newItems,
          ...result.data
        ]

        that.$nextTick(() => {
          this.refresh()
        })
      }
    }))
  
  },

}


</script>



<style lang="stylus" scoped>
    #interest
      height 100%

      .header
        width 100%
        height .46rem
        background #fafafa
        line-height .46rem
        text-align center
        position fixed
        z-index 100
      .wrap
        height 100%
        background #f5f5f5
        .paddingtop
          padding-top .46rem
          .newItems
            width 100%
            background #fff
            height 3.3rem
            margin-bottom .14rem
            .item-wrap
              padding 0 .12rem
              .title
                font-weight bold
                padding-top .18rem
              .er-title
                padding-top .1rem
                color #a5a5a5
                font-size 12px
              .imags
                padding-top .1rem
                width 100%
                height 2.2rem 
              .tips
                padding-top .1rem
                font-size 12px
                line-height 2em
                .icon
                  padding-right .08rem 
                .date
                  float right
                  padding-right .02rem
                  color #787878
</style>

