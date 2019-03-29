import Vue from 'vue'
import Router from 'vue-router'

import Splash from '../views/splash/Splash'
import Home from '../views/home/Home'
import Member from '@/views/member/Member'

import ActivityDisplay from '@/views/display/ActivityDisplay'
import FilmDisplay from '@/views/display/FilmDisplay'
import SerchDisplay from '@/views/display/SerchDisplay'

import Show from '@/views/home/Show'
import CityPicker from '@/views/city/CityPicker'
import Category from '@/views/home/Category'
import Interest from '@/views/home/Interest'
import Resell from '@/views/home/Resell'
import Login from '@/views/home/Login'

import CateQuanbu from '@/components/categorys/CateQuanbu'
import CateYanchanghui from '@/components/categorys/CateYanchanghui'
import CateHuajugeju from '@/components/categorys/CateHuajugeju'
import CateXiuxianyule from '@/components/categorys/CateXiuxianyule'
import CateFilm from '@/components/categorys/CateFilm'
import CateTiyusaishi from '@/components/categorys/CateTiyusaishi'
import CateErtongqinzi from '@/components/categorys/CateErtongqinzi'
import CateYinyuehui from '@/components/categorys/CateYinyuehui'
import CateQuyizaji from '@/components/categorys/CateQuyizaji'
import CateWudaobalei from '@/components/categorys/CateWudaobalei'

import Dashboard from '@/components/members/Dashboard'
import Favorite from '@/components/members/Favorite'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Splash
    },
    {
      path: '/home',
      component: Home,
      redirect: '/show',
      children: [
        {
          path: '/show',
          name: 'show',
          component: Show
        },
        {
          path: '/city',
          name: 'city',
          component: CityPicker
        },
        {
          path: '/category',
          name: 'category',
          redirect: '/category/quanbu',
          component: Category,
          children: [
            {
              path: 'quanbu',
              component: CateQuanbu
            },
            {
              path: 'yanchanghui',
              component: CateYanchanghui
            },
            {
              path: 'huajugeju',
              component: CateHuajugeju
            },
            {
              path: 'xiuxianyule',
              component: CateXiuxianyule
            },
            {
              path: 'film',
              component: CateFilm
            },
            {
              path: 'tiyusaishi',
              component: CateTiyusaishi
            },
            {
              path: 'ertongqinzi',
              component: CateErtongqinzi
            },
            {
              path: 'yinyuehui',
              component: CateYinyuehui
            },
            {
              path: 'quyizaji',
              component: CateQuyizaji
            },
            {
              path: 'wudaobalei',
              component: CateWudaobalei
            }
          ]
        },    
        {
          path: '/interest',
          name: 'interest',
          component: Interest
        },
        {
          path: '/resell',
          name: 'resell',
          component: Resell
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        }
      ]
    },
    {
      path: '/activity/:id',
      name: 'activity',
      component: ActivityDisplay
    },
    {
      path: '/filmdis/:id',
      name: 'filmdis',
      component: FilmDisplay
    },
    {
      path: '/serch',
      name: 'serch',
      component: SerchDisplay
    },
    {
      path: '/member',
      name: 'member',
      redirect: '/member/dashboard',
      component: Member,
      children: [
        {
          path: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'favorite',
          component: Favorite,
        }
      ]
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log('navigation-guards');
  
  
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

//   const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
//   let isLogin = global.isLogin;  // 是否登录
//   // 未登录状态；当路由到nextRoute指定页时，跳转至login
//   if (nextRoute.indexOf(to.name) >= 0) {  
//     if (!isLogin) {
//       console.log('不能进');
//       router.push({ name: 'login' })
//     }
//   }
//   next();
// });

export default router;