import Vue from 'vue'
import Router from 'vue-router'
import app_header from '@/components/header'
import app_footer from '@/components/footer'
import index from '@/components/index'
import chat from '@/components/chat'
import mb from '@/components/mb'



Vue.use(Router)

export default new Router({
  mode:'history',
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
    }

  ]
})
