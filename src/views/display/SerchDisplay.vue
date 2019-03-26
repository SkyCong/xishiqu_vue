
<template>
  <div id="wrapper-search">
    <div id="search" class="page">
      <div class="page__search">
        <div class="search__left">
          <i class="icon icon-search"></i>
          <input placeholder="搜索明星、演出、场馆" type="text" class="left__input">
          <!---->
        </div>      
        <router-link to="/show" class="search__right" tag="span">取消</router-link>
      </div>
      <div class="page__content">
        <div class="initial">
          <div class="hot-show">
            <h3 class="show__title">热门演出</h3>
            <ul class="show__list clearfix">
              <li class="list__item">王力宏</li>
              <li class="list__item">伍佰</li>
              <li class="list__item">谭咏麟</li>
              <li class="list__item">不眠之夜</li>
              <li class="list__item">费玉清</li>
              <li class="list__item">崔健</li>
            </ul>
          </div>
          <!---->
        </div>
        <!---->
      </div>
    </div>
    <!---->
    <!---->
  </div>
</template>


<script>

export default {



};

</script>


<style lang="stylus" scoped>
  @import '~@/assets/serch.styl';


</style>