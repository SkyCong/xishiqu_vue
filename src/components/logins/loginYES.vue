<template>
<body id="dashboard" class="ready">
    <noscript></noscript>
        <div class="wrapper wrap-content">
        <div id="progress-box" class="pre-loader" onclick="location.reload();">
            <div class="inner">
                <div class="la-ball-grid-pulse la-2x">
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                </div>
                <p>点击页面可重新加载</p>
            </div>
        </div>
                
<div class="jumbotron">

    <header class="header transparent">
        <span class="left">
                        <a class="icon-angle-left icon" href="http://m.xishiqu.com"></a>
                    </span>
        <span class="middle"></span>
        <div class="right"><a href="http://m.xishiqu.com/member/letter"><span class="icon-bell-o icon"></span></a></div>
    </header>
    <div class="member">
        <img src="http://m.xishiqu.com/m/images/default-avatar.png">
        <span class="nick-name" style="overflow: auto; width: auto;">17862819117</span>
            </div>
</div>

<div class="list-group with-icon">
    <a class="list-group-item my-order" href="http://m.xishiqu.com/member/order">
        <span class="icon icon-list"></span>
        <span class="list-title">演出订单
                    </span>
    </a>
    <a class="list-group-item my-film" href="/films/my-film">
        <span class="icon icon-list"></span>
        <span class="list-title">电影订单</span>
    </a>
    <a class="list-group-item my-card" href="http://m.xishiqu.com/member/discount">
        <span class="icon icon-credit-card"></span>
        <span class="list-title">我的卡券</span>
    </a>
        <a class="list-group-item my-wallet" href="http://m.xishiqu.com/member/wallet">
        <span class="icon icon-suitcase"></span>
        <span class="list-title">我的钱包</span>
    </a>
    </div>
<div class="list-group with-icon">
    <a class="list-group-item my-favorite" href="http://m.xishiqu.com/member/favorite">
        <span class="icon icon-heart-o"></span>
        <span class="list-title">我的收藏</span>
    </a>
    <a class="list-group-item my-address" href="http://m.xishiqu.com/member/address">
        <span class="icon icon-address"></span>
        <span class="list-title">收货地址</span>
    </a>
        <a class="list-group-item my-password" href="http://m.xishiqu.com/member/password/change">
        <span class="icon icon-user"></span>
        <span class="list-title">修改密码</span>
    </a>
        <a class="list-group-item my-service" href="tel:400-003-9992">
        <span class="icon icon-service"></span>
        <span class="list-last">客服电话 ：400-003-9992</span>
    </a>
</div>
<div class="logout">
    <a class="btn btn-primary btn-block" href="http://m.xishiqu.com/logout">退出登录</a>
</div>
    </div>
    <script>
document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector('body').classList.add('ready');
    if (document.querySelector(".nick-name").innerHTML.length <= 11 ) {
        document.getElementsByClassName('nick-name')[0].style.overflow = 'auto';
        document.getElementsByClassName('nick-name')[0].style.width = 'auto';
    } else {
        document.getElementsByClassName('nick-name')[0].style.overflow = 'hidden';
        document.getElementsByClassName('nick-name')[0].style.width = '36%';
    }
});
</script>
    <script>
        var domain = 'http://m.xishiqu.com';
        setTimeout(function(){
        var alert = document.querySelector('.alert');
        if (alert)
            alert.remove();
    }, 1500);
    // setTimeout(function(){
    //     var announce = document.querySelector('.announce');
    //     if (announce)
    //         announce.remove();
    // }, 6000);
    </script>
    <!-----------------Google Analytics Start-------------------------->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-80730474-1', 'auto');
      ga('send', 'pageview');

    </script>
    <!-----------------Google Analytics End-------------------------->
    <script src="//m.xishiqu.com/m/js/stat.js" charset="utf-8"></script><iframe src="http://m.xishiqu.com/mobileStat?marketId=0&amp;projectId=&amp;refURL=http://m.xishiqu.com/member/dashboard" __idm_frm__="976" style="display: none; width: 0px; height: 0px;"></iframe>


</body>
</template>


<script>
import request from "@/utils/request"
import ActivityList from '@/components/common/catelist/ActivityList'
import { Indicator } from "mint-ui"

export default {
  data() {
    return {
      yanchanghuiList: []
    }
  },

  components: {
    ActivityList
  },

  async created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });


    // const result = await request({
    //   url: "https://api.myjson.com/bins/1bimge"
    // });

    this.yanchanghuiList = result.result.list;
    console.log(this.yanchanghuiList);
    
    Indicator.close();
  },

};
</script>


<style lang="stylus" scoped>

</style>

