import Vue from 'vue'
import Router from 'vue-router'

import Show from '@/views/home/Show'
import CityPicker from '@/views/city/CityPicker'
import Category from '@/views/home/Category'
import Interest from '@/views/home/Interest'
import Resell from '@/views/home/Resell'
import Login from '@/views/home/Login'

import ActivityDisplay from '@/components/display/ActivityDisplay'
import FilmDisplay from '@/components/display/FilmDisplay'

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



// import MovieList from '@/components/movielist/MovieList'
// import ComingSoon from '@/components/movielist/ComingSoon'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/show'
    },
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
    },
    {
      path: '/activity',
      name: 'activity',
      component: ActivityDisplay
    },
    {
      path: '/filmdis',
      name: 'filmdis',
      component: FilmDisplay
    }
  ]
})
