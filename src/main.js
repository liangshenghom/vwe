// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';



import VueSocketIO from 'vue-socket.io';

import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'

import "@/assert/icon/iconfont.css"

//图表包
import VCharts from 'v-charts'

Vue.use(VCharts)

 
//启用Vue国际化插件
Vue.use(VueI18n)
 
//配置VeeValidate
const i18n = new VueI18n({
  locale: 'zh_CN',
})
 
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
});


Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8088'
}));

Vue.use(EasyUI);



Vue.config.productionTip = false

//设置网页标题
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

/* eslint-disable no-new */
new Vue({
  
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
