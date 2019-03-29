<template>
  <div id="favorite" class="ready">
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
        <div class="header">
        <a class="left" href="javascript:history.back();"><span class="icon-angle-left icon"></span></a>
        <div class="middle">
            我的收藏
        </div>
        <div class="right">
            <!-- <a class="icon-user icon" href=""></a> -->
        </div>
    </div>
    <div class="activity-list node-list">
        <ul>
            <li class="node-activity default">
                <div class="thumbnail">
                    <img src="http://image6.xishiqu.cn/upload/activity/118/122/20181227012/v/b/35D6EB1F-F39B-BA2A-0B34-1CFC402FC1D9.jpg">
                </div>
                <div class="info">
                    <h3 class="name"><a href="/activity/anthyzsbshz">话剧 暗恋桃花源（专属版）—上海站</a></h3>
                    <div class="date i">2018-12-31 00:00 至 2019-04-21 00:00</div>
                    <div class="address i">徐汇区上剧场</div>
                    <div class="i">
                        <span class="status">售票中</span>
                        <span class="price">¥478.00</span> 起
                    </div>
                </div>
            </li><li class="node-activity default">
                <div class="thumbnail">
                    <img src="http://image5.xishiqu.cn/upload/activity/119/012/20190121007/v/b/17B67A97-44E3-46DA-54BE-EA5CAD7B34BE.jpg">
                </div>
                <div class="info">
                    <h3 class="name"><a href="/activity/wtjhddxnshz">开心麻花爆笑舞台剧《皇帝的新娘》—上海站</a></h3>
                    <div class="date i">2019-03-23 00:00</div>
                    <div class="address i">嘉定区上海保利大剧院</div>
                    <div class="i">
                        <span class="status">已结束</span>
                        <span class="price">¥0.00</span> 起
                    </div>
                </div>
            </li>
            <p class="empty" style="display: none;">如果你收藏了喜欢的内容， 可以在这里找到哦</p>
        </ul>
        <div class="pager" style="display: none;">加载更多</div>
    </div>
    </div>

    </div>
</template>

<script>
export default {
    
}
</script>


<style>

</style>

