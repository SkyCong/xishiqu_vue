<template>
  <div id="wrapper-login">
    <div id="login" class="page">
      <div class="login__header"></div>
      <div class="page__tabs">
        <ul>
          <li :class="li_id === 0 ? 'tabs--activated' : ''"  @click="liClass(0)">
            <a href="#" name="shortcut">短信验证</a>
          </li>
          <li :class="li_id === 1 ? 'tabs--activated' : ''"  @click="liClass(1)">
            <a href="#" name="account">账号密码</a>
          </li>
        </ul>
      </div>
      <div class="page__tab-content">
        <div class="tab-content__shortcut" v-if="li_id === 0">
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
        <div class="tab-content__account" v-if="li_id === 1" :model="ruleForm" ref="ruleForm">
          <div class="input__account">
            <i class="icon icon-admin">
              <svg t="1553426650566" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22007"><path d="M508.96896 92.2624c-117.248 0-212.64384 96.80896-212.64384 215.7568 0 118.94784 95.39584 215.7568 212.64384 215.7568 117.248 0 212.64384-96.78848 212.64384-215.7568C721.6128 189.0304 626.21696 92.2624 508.96896 92.2624L508.96896 92.2624M596.5824 544.5632l-159.3344 0c-148.04992 0-268.47232 122.12224-268.47232 272.24064l0 16.15872c0 78.49984 118.49728 78.49984 268.47232 78.49984l159.3344 0c144.09728 0 268.51328 0 268.51328-78.49984l0-16.15872C865.09568 666.70592 744.6528 544.5632 596.5824 544.5632L596.5824 544.5632" p-id="22008" fill="#2c2c2c"></path></svg>
            </i> 
            <input type="text" name="account" placeholder="请输入登录账号" class="form-control" v-model="ruleForm.userName" ref="account">
          </div> 
          <div class="input__password">
            <i class="icon icon-lock">
              <svg t="1553694892246"  style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2173"><path d="M765.604952 364.063693l-42.267663 0 0-84.535325c0-116.65793-94.679359-211.337289-211.337289-211.337289s-211.337289 94.679359-211.337289 211.337289l0 84.535325-42.267663 0c-46.705742 0-84.535325 37.829584-84.535325 84.535325l0 422.674579c0 46.705742 37.829584 84.535325 84.535325 84.535325l507.209904 0c46.705742 0 84.535325-37.829584 84.535325-84.535325L850.140277 448.599018C850.140277 401.893276 812.310693 364.063693 765.604952 364.063693zM512 744.470609c-46.705742 0-84.535325-37.829584-84.535325-84.535325 0-46.705742 37.829584-84.535325 84.535325-84.535325s84.535325 37.829584 84.535325 84.535325C596.534302 706.642049 558.705742 744.470609 512 744.470609zM643.029242 364.063693 380.970758 364.063693l0-84.535325c0-72.27714 58.752102-131.029242 131.029242-131.029242S643.029242 207.251228 643.029242 279.528368L643.029242 364.063693z" p-id="2174" fill="#2c2c2c"></path></svg>
            </i> 
              <input :type="show" maxlength="18" name="password" placeholder="请输入登录密码" class="form-control" v-model="ruleForm.password" ref="password"> 
              <button>
                <i class="icon" :style="on_off === 0 ? 'display:none' : ''"  @click="iClass(0)">
                  <svg t="1553695040394" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3731"><path d="M332.8 729.6l34.133333-34.133333c42.666667 12.8 93.866667 21.333333 145.066667 21.333333 162.133333 0 285.866667-68.266667 375.466667-213.333333-46.933333-72.533333-102.4-128-166.4-162.133334l29.866666-29.866666c72.533333 42.666667 132.266667 106.666667 183.466667 192-98.133333 170.666667-243.2 256-426.666667 256-59.733333 4.266667-119.466667-8.533333-174.933333-29.866667z m-115.2-64c-51.2-38.4-93.866667-93.866667-132.266667-157.866667 98.133333-170.666667 243.2-256 426.666667-256 38.4 0 76.8 4.266667 110.933333 12.8l-34.133333 34.133334c-25.6-4.266667-46.933333-4.266667-76.8-4.266667-162.133333 0-285.866667 68.266667-375.466667 213.333333 34.133333 51.2 72.533333 93.866667 115.2 128l-34.133333 29.866667z m230.4-46.933333l29.866667-29.866667c8.533333 4.266667 21.333333 4.266667 29.866666 4.266667 46.933333 0 85.333333-38.4 85.333334-85.333334 0-12.8 0-21.333333-4.266667-29.866666l29.866667-29.866667c12.8 17.066667 17.066667 38.4 17.066666 64 0 72.533333-55.466667 128-128 128-17.066667-4.266667-38.4-12.8-59.733333-21.333333zM384 499.2c4.266667-68.266667 55.466667-119.466667 123.733333-123.733333 0 4.266667-123.733333 123.733333-123.733333 123.733333zM733.866667 213.333333l29.866666 29.866667-512 512-34.133333-29.866667L733.866667 213.333333z" fill="#444444" p-id="3732"></path></svg>
                </i>
                <i class="icon" :style="on_off === 1 ? 'display:none' : ''"  @click="iClass(1)">
                  <svg t="1553695092360" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3924"><path d="M512 298.666667c-162.133333 0-285.866667 68.266667-375.466667 213.333333 89.6 145.066667 213.333333 213.333333 375.466667 213.333333s285.866667-68.266667 375.466667-213.333333c-89.6-145.066667-213.333333-213.333333-375.466667-213.333333z m0 469.333333c-183.466667 0-328.533333-85.333333-426.666667-256 98.133333-170.666667 243.2-256 426.666667-256s328.533333 85.333333 426.666667 256c-98.133333 170.666667-243.2 256-426.666667 256z m0-170.666667c46.933333 0 85.333333-38.4 85.333333-85.333333s-38.4-85.333333-85.333333-85.333333-85.333333 38.4-85.333333 85.333333 38.4 85.333333 85.333333 85.333333z m0 42.666667c-72.533333 0-128-55.466667-128-128s55.466667-128 128-128 128 55.466667 128 128-55.466667 128-128 128z" fill="#444444" p-id="3925"></path></svg>
                </i>
              </button>
          </div> 
          <button class="btn btn-default login-btn" @click="submitForm" >登录</button> 
          <a href="#" class="forgot-pwd">找回密码</a> 
          <a href="#" class="register">新用户注册</a>
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
  data() {
    return {
      li_id: 0,
      on_off: 1,
      show : 'password',
      ruleForm: {
        userName: '', //用户名
        password: '' //密码
      },
    };
  },

  methods: {
    liClass(index) {
      this.li_id = index
    },
    iClass(index) {
      this.on_off = index
      if(index == 0)
        this.show='text'
      else
        this.show='password'
    },
    //点击登录调用方法
    submitForm() {
      console.log(0);
      
      //保存的账号
      var name=this.ruleForm.userName;
      //保存的密码
      var pass=this.ruleForm.password;
      if(name==''||name==null){
      alert("请输入正确的用户名");
      return
      }else if(pass==''||pass==null) {
      alert("请输入正确的密码");
      return
      }
      
      //接口
      var url='/login.json';
      this.$http.get(url,this.ruleForm)
      .then(res=>{
        if(res.body.from[0].userName==this.ruleForm.password && res.body.from[0].userName==this.ruleForm.password){
          alert("登陆成功！")
          this.$store.state.isLogin = true
          console.log(this.$store.state.isLogin);
          this.$router.push("/member")
        return
        } else{
          alert("用户名或密码错误,请重新输入");
          this.ruleForm.userName='';
          this.ruleForm.password='';
        }
    });
    },
  }


};


</script>


<style lang="stylus" scoped>
@import '~@/assets/login.styl'


</style>
