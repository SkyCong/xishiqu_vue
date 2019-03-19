import Vue from 'vue'
import Router from 'vue-router'

import Show from '@/views/home/Show'
import Class from '@/views/home/Class'
import Interest from '@/views/home/Interest'
import Resell from '@/views/home/Resell'
import Login from '@/views/home/Login'

// import MovieList from '@/components/movielist/MovieList'
// import ComingSoon from '@/components/movielist/ComingSoon'

Vue.use(Router)

export default new Router({
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
      path: '/class',
      name: 'class',
      component: Class
      // ,
      // children: [
      //   {
      //     path: 'inTheater',
      //     component: MovieList
      //   },
      //   {
      //     path: 'comingSoon',
      //     component: ComingSoon
      //   }
      // ]
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
})
