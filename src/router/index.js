import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = (resolve) => {
  require(['../components/index'], resolve)
}
const Home = (resolve) => {
  require(['../components/home'], resolve)
}
const AboutUs = (resolve) => {
  require(['../components/aboutUs'], resolve)
}
const News = (resolve) => {
  require(['../components/news'], resolve)
}
const Product = (resolve) => {
  require(['../components/product'], resolve)
}
const Case = (resolve) => {
  require(['../components/case'], resolve)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: {name: 'home'}
    }, {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }, {
          path: '/aboutUs',
          name: 'aboutUs',
          component: AboutUs
        }, {
          path: '/news',
          name: 'news',
          component: News
        }, {
          path: '/product',
          name: 'product',
          component: Product
        }, {
          path: '/case',
          name: 'case',
          component: Case
        }
      ]
    }
  ]
})
