<template>
  <div id="resell">
    
    <div class="content">
      
      <div class="text">
        <p>转票怎么玩?</p>
        <input type="text" placeholder="关键词/演出者/名字"><button>转票</button>
      </div>
      <div class="question">如有疑问质询西十区客服：<span>400-003-9991</span></div>
    </div>


  </div>


</template>


<script>

export default {
  


}

</script>


<style lang="stylus" scoped>
    #resell
      height 100%
      background url(../../assets/tips/zp-bg.jpg) no-repeat
      background-size cover
      font-size 13px
      .content
        width 100%
        height .8rem
        color #fff
        top 1.2rem
        position absolute
        .text
          width 100%
          height .8rem
          padding 0 .16rem
          
          font-size 12px
          input 
            float left
            width 80%
            height .5rem
            text-indent 2em
            color #000
            outline none
            border 0px
            border-top-left-radius 2px
            border-bottom-left-radius 2px
          input::-webkit-input-placeholder
            color: #ccc
     
          button 
            float left
            width 20%    
            height .5rem
            border none
            background #ff5400
            border-top-right-radius 2px
            border-bottom-right-radius 2px
        .question
            padding-top .1rem
            font-size 11px
            text-align center
          span 
            font-size 11px
            color #ff5400
</style>
