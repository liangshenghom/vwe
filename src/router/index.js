import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    }

  ]
})
