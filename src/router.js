import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      title:'登录页面',
      component:resolve => require(['@/pages/Login/login.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      title:'登录页面',
      component:resolve => require(['@/pages/Login/login.vue'], resolve)
    },

      {
          path: '/home',
          component: resolve => require(['@/views/Home.vue'], resolve),//
          redirect: '/homePage',
          meta: {
              keepAlive: false // 不需要被缓存
          },
          children: [
              /**
               * 主页
               */
              {
              path: '/homePage',
              component: resolve => require(['@/pages/home/homePage.vue'], resolve),//
              meta: {
                  keepAlive: false // 不需要被缓存
              },
          }
          ]
      }
   /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
    }*/
  ]
})
