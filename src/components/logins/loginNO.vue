<template>
  <div id="wrapper-login">
    <div id="login" class="page">
      <div class="login__header"></div>
      <div class="page__tabs">
        <ul>
          <li class="tabs--activated">
            <a href="#" name="shortcut">短信验证</a>
          </li>
          <li class>
            <a href="#" name="account">账号密码</a>
          </li>
        </ul>
      </div>
      <div class="page__tab-content">
        <div class="tab-content__shortcut">
          <div class="input__phone">
            <i class="icon icon-admin">
              <svg t="1553426650566" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22007"><path d="M508.96896 92.2624c-117.248 0-212.64384 96.80896-212.64384 215.7568 0 118.94784 95.39584 215.7568 212.64384 215.7568 117.248 0 212.64384-96.78848 212.64384-215.7568C721.6128 189.0304 626.21696 92.2624 508.96896 92.2624L508.96896 92.2624M596.5824 544.5632l-159.3344 0c-148.04992 0-268.47232 122.12224-268.47232 272.24064l0 16.15872c0 78.49984 118.49728 78.49984 268.47232 78.49984l159.3344 0c144.09728 0 268.51328 0 268.51328-78.49984l0-16.15872C865.09568 666.70592 744.6528 544.5632 596.5824 544.5632L596.5824 544.5632" p-id="22008" fill="#2c2c2c"></path></svg>
            </i>
            <input
              type="number"
              pattern="\d*"
              name="phone"
              maxlength="11"
              placeholder="请输入手机号"
              class="form-control"
            >
          </div>
          <div class="input__veri-code">
            <i class="icon icon-protection">
              <svg t="1553426795463" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24239"><path d="M870.26344 190.408821c-10.737563-9.749048-24.877622-15.083548-39.499659-15.083548-1.333369 0-2.666739 0-3.999085 0.092098-0.806366 0.091074-10.117438 0.645707-24.668867 0.645707-24.117305 0-71.201716-1.655711-115.803585-12.230568-57.590707-13.703107-124.056558-77.159411-143.392971-89.666272-9.748025-6.343481-20.967565-9.470708-32.209618-9.470708-11.196004 0-22.415545 3.127227-32.141057 9.379634-2.344397 1.563613-71.938498 73.569649-140.011964 89.757346-44.578332 10.574857-92.560185 12.230568-116.654977 12.230568-14.553475 0-23.839988-0.554633-24.758918-0.645707-1.264808-0.092098-2.529615-0.092098-3.816936-0.092098-14.645573 0-28.830658 5.333477-39.613246 15.083548-11.701518 10.574857-18.368365 25.380066-18.368365 40.922056l0 140.058013c0 517.749452 350.285225 584.42201 365.135459 587.085679 3.40352 0.555656 6.828529 0.829902 10.254562 0.829902 3.402497 0 6.873555-0.274246 10.230002-0.829902 14.87377-2.664692 367.732613-69.337251 367.732613-587.085679L888.67683 231.330877C888.67683 215.788887 881.98747 200.984701 870.26344 190.408821zM740.77926 390.700744l-242.8482 234.965664c-1.517565 2.480497-3.379984 4.967133-5.633306 7.081286-7.127335 6.897091-16.553018 10.20749-25.888649 10.023294-9.332562 0.184195-18.737779-3.126204-25.863067-10.023294-2.252299-2.114153-4.137231-4.600789-5.654796-7.081286l-129.780938-125.621194c-13.818741-13.33574-13.818741-34.944918 0-48.372756 13.816694-13.331646 36.231215-13.331646 50.049956 0l111.249868 107.689782 224.342712-217.030159c13.818741-13.33574 36.209726-13.33574 50.027443 0C754.596978 355.662704 754.596978 377.368074 740.77926 390.700744z" p-id="24240" fill="#2c2c2c"></path></svg>
            </i>
            <input
              type="number"
              pattern="\d*"
              maxlength="6"
              name="veri-code"
              placeholder="请输入验证码"
              class="form-control"
            >
            <button class="btn btn-default">获取验证码</button>
          </div>
          <button disabled="disabled" class="btn btn-default login-btn">登录</button>
        </div>
        <div class="other-methods">
          <div class="other-methods__qq icon icon-qq">        
            <a
              href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101214754&amp;redirect_uri=http%3A%2F%2Fwww.xishiqu.com%2FthirdPartyLogin%2Fqq%2Fcallback.php&amp;state=a18ac0f31ff9f9d989861495e1c5b37d&amp;scope=get_user_info"
            ></a>
          </div>
          <!---->
          <div class="other-methods__weibo icon icon-weibo">
            <a
              href="https://api.weibo.com/oauth2/authorize?client_id=2689896212&amp;redirect_uri=http%3A%2F%2Fm.xishiqu.com%2FthirdPartyLogin%2Fweibo&amp;response_type=code"
            ></a>
          </div>
        </div>
      </div>
      <div>
        <!---->
        <!---->
      </div>
      <div back-drop-close="true" class="captcha-modal">
        <!---->
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
@import '~@/assets/login.styl'


</style>
