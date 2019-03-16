<template>
  <div class="tabbar-container">
    <ul>
     	<li :class="currentIndex === 0 ? 'active' : ''" @click="handleClick(0)">
         <span class="i home"></span>
         <span class="text">首页</span>
      </li>

      <li :class="currentIndex === 1 ? 'active' : ''" @click="handleClick(1)">
        <span class="i category"></span>
        <span class="text">分类</span>
      </li>

      <li :class="currentIndex === 2 ? 'active' : ''" @click="handleClick(2)">
        <span class="i article">
        </span> <span class="text">同趣</span>
      </li>

      <li :class="currentIndex === 3 ? 'active' : ''" @click="handleClick(3)">
        <span class="i ticket"></span>
        <span class="text">转票</span>
      </li>

      <li :class="currentIndex === 4 ? 'active' : ''" @click="handleClick(4)">
        <span class="i my"></span> 
        <span class="text">我</span>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },

  methods: {
    handleClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '~@/assets/variables.styl'
@import '~@/assets/border.styl'
.tabbar-container
  height .53rem
  border(1px 0 0 0)
  padding .05rem .12rem
  background #fff
  ul
    height 100%
    display flex
    li
      height 100%
      flex 1
      display flex
      flex-direction column
      justify-content center
      align-items center
      .text
        color: #333;
        font-size: .1rem;
        text-align: center;
    // 增加覆盖效果
    .active 
      .i
        display: block;
        width: .36rem;
        height: .36rem;
        margin: 0 auto;  
      .text
        display none
      .home
        background: url(../../assets/icon/A_home.png) center center no-repeat;
        background-size: contain;    
      .category
        background: url(../../assets/icon/B_category.png) center center no-repeat;
        background-size: contain;    
      .article
        background: url(../../assets/icon/C_article.png) center center no-repeat;
        background-size: contain;    
      .ticket
        background: url(../../assets/icon/D_ticket.png) center center no-repeat;
        background-size: contain;    
      .my
        background: url(../../assets/icon/E_my.png) center center no-repeat;
        background-size: contain;    


  .i
    display: block;
    width: .24rem;
    height: .24rem;
    margin: 0 auto .05rem;
    transition: width .25s ease;

  .home
    background: url(../../assets/icon/a-home.png) center center no-repeat;
    background-size: contain;    
  .category
    background: url(../../assets/icon/b-category.png) center center no-repeat;
    background-size: contain;    
  .article
    background: url(../../assets/icon/c-article.png) center center no-repeat;
    background-size: contain;     
  .ticket
    background: url(../../assets/icon/d-ticket.png) center center no-repeat;
    background-size: contain;    
  .my
    background: url(../../assets/icon/e-my.png) center center no-repeat;
    background-size: contain;    
    
</style>

