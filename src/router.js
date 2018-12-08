import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      title:'登录页面',
      component:resolve => require(['@/pages/Login/login.vue'], resolve)
    },


      {
          path: '/',
          component: resolve => require(['@/views/Home.vue'], resolve),//
          redirect: '/homePage',

          meta: {
              keepAlive: false, // 不需要被缓存
              title: '首页'
          },
          children: [
              /**
               * 主页
               */
              {
              path: '/homePage',
              component: resolve => require(['@/pages/home/homePage.vue'], resolve),//
              meta: {
                  keepAlive: false, // 不需要被缓存
                  title: '首页'
              },
          }
          ]
      }

  ]
})
