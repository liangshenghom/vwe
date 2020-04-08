import Vue from 'vue'
import Router from 'vue-router'
import app_header from '@/components/header'
import app_footer from '@/components/footer'
import index from '@/components/index'
import chat from '@/components/chat'
import mb from '@/components/mb'
import detail from '@/components/detail'
import adminlogin from '@/components/admin/login'
import adminindex from '@/components/admin/index'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,

    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/mb',
      name: 'mb',
      component: mb
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
    ,
    {
      path: '/admin/login',
      name: 'adminlogin',
      component: adminlogin
    },
    {
      path: '/admin/index/',
      name: 'adminindex',
      beforeEnter(to, from, next) {

        if (localStorage.getItem('name')) {// 判断是否登录
          console.log(localStorage.getItem('name'));
          next()
        } else {// 没登录则跳转到登录界面
          next({
            path: '/admin/login',

          })
        }


      },
      component: adminindex
    }



  ]
})

