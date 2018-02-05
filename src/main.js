// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import Element from 'element-ui'

import HelloWorld from './components/HelloWorld'
import Watch from './components/Watch'
import Header from './components/Header'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

Vue.config.productionTip = false

var routers= new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Watch',
      name: 'Watch',
      component:Watch
    }, {
      path: '/(.*)',
      redirect: '/HelloWorld',
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:routers,
  template: '<App/>',
  components: { App }
})
