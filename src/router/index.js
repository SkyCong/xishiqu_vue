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
          path: '/dashboard',
          component: Dashboard
        },
        {
          path: '/favorite',
          component: Favorite
        }
      ]
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/member') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
 
//     if (token === 'null' || token === '') {
//       next('/member');
//     } else {
//       next();
//     }
//   }
// })
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//       //判断该路由是否需要登录权限
//       if (cookies('token')) {
//           //通过封装好的cookies读取token，如果存在，name接下一步如果不存在，那跳转回登录页
//           next()//不要在next里面加"path:/",会陷入死循环
//       }
//       else {
//           next({
//               path: '/login',
//               query: {redirect: to.fullPath}//将跳转的路由path作为参数，登录成功后跳转到该路由
//           })
//       }
//   }
//   else {
//       next()
//   }
// })

export default router;