import Vue from 'vue'
import Mint from 'mint-ui';
import "mint-ui/lib/style.css"

import App from './App.vue'
import router from './router/'
import store from './store'


// import './assets/reset.styl'
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (JSON.parse(localStorage.getItem("islogin"))) {
//       next();
//     } else {
//       next({
//         path: "/show"//指向为你的登录界面
//       });
//     }
//   } else {
//     next();
//   }

//   if (to.fullPath === "/show") {
//     if (JSON.parse(localStorage.getItem("islogin"))) {
//       next({
//         path: from.fullPath
//       });
//     } else {
//       next();
//     }
//   }
// });

Vue.config.productionTip = false
Vue.use(Mint);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

