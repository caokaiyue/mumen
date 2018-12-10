import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import 'babel-polyfill'
import 'es6-promise/auto'
import router from './router'
import './common.css'
import {
  Button, Menu, Form, FormItem, Input, Table, Row, Col, Container, Header, Aside, Main, Footer, Carousel, CarouselItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
Vue.config.productionTip = false
Vue.use(Vuex)
const elComponents = [
  Row, Col, Menu, Table,
  FormItem, Option, Button, Form, Input, Header,
  Aside, Main, Footer, Container, Carousel, CarouselItem]
elComponents.forEach(item => {
  Vue.component(item.name, item)
})

const store = new Vuex.Store({
  state: {
    navName: sessionStorage.getItem('navName'),
    navNameCn: sessionStorage.getItem('navNameCn')
  },
  mutations: {
    setNavName (state, navName) {
      // state.navName = navName
      sessionStorage.setItem('navName', navName)
      state.navName = navName
      switch (navName) {
        case 'aboutUs':
          // state.navNameCn = '关于我们'
          sessionStorage.setItem('navNameCn', '关于我们')
          break
        case 'news':
          // state.navNameCn = '新闻动态'
          sessionStorage.setItem('navNameCn', '新闻动态')
          break
        case 'product':
          // state.navNameCn = '产品展示'
          sessionStorage.setItem('navNameCn', '产品展示')
          break
        case 'case':
          // state.navNameCn = '案例展示'
          sessionStorage.setItem('navNameCn', '案例展示')
          break
        case 'contact':
          // state.navNameCn = '联系我们'
          sessionStorage.setItem('navNameCn', '联系我们')
          break
      }
      state.navNameCn = sessionStorage.getItem('navNameCn')
    }
  },
  actions: {
    setNavName: ({commit}, navName) => {
      commit('setNavName', navName)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
