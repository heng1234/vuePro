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
          },
              {
              path: '/table',
              component: resolve => require(['@/pages/table.vue'], resolve),//
              meta: {
                  keepAlive: false, // 不需要被缓存
                  title: 'element-ui表格'
              },
          },
              {
              path: '/datepaick',
              component: resolve => require(['@/pages/datadk/datepaick.vue'], resolve),//
              meta: {
                  keepAlive: false, // 不需要被缓存
                  title: '日历本'
              },
          },
              {
              path: '/testkey',
              component: resolve => require(['@/pages/keyborad/testKeyborard.vue'], resolve),//
              meta: {
                  keepAlive: false, // 不需要被缓存
                  title: '键盘'
              },
          },
              {
              path: '/form',
              component: resolve => require(['@/pages/emenent-ui/form.vue'], resolve),//
              meta: {
                  keepAlive: false, // 不需要被缓存
                  title: 'form表单'
              },
          },
              {
                  path: '/vueEdito',
                  component: resolve => require(['@/pages/VueEditor/VueEdito.vue'], resolve),//
                  meta: {
                      keepAlive: false, // 不需要被缓存
                      title: '富文本编辑器'
                  },
              },{
                  path: '/markdown',
                  component: resolve => require(['@/pages/VueEditor/markdown.vue'], resolve),//
                  meta: {
                      keepAlive: false, // 不需要被缓存
                      title: 'markdown编辑器'
                  },
              },{
                  path: '/elupload',
                  component: resolve => require(['@/pages/upload/elupload.vue'], resolve),//
                  meta: {
                      keepAlive: false, // 不需要被缓存
                      title: '文件上传'
                  },
              },
              {
                  path: '/404',
                  component: resolve => require(['@/pages/error/404.vue'], resolve),//
                  meta: {
                      keepAlive: false, // 不需要被缓存
                      title: '404'
                  },
              },
              {
                  path: '/btn',
                  component: resolve => require(['@/pages/button/btn.vue'], resolve),//
                  meta: {
                      keepAlive: false, // 不需要被缓存
                      title: 'button'
                  },
              },
         /*     /!*404页面需要放在最下面*!/
              {
                  path: '*',
                  component: resolve => require(['@/pages/error/404.vue'], resolve),//
                  meta: {
                      keepAlive: false, // 不需要被缓存
                      title: '404'
                  },
              },*/
          ]
      }

  ]
})
