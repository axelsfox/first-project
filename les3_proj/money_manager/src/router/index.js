import Vue from 'vue'
import Router from 'vue-router'
import PageDashboard from '../components/page/PageDashboard.vue'
import PageAbout from '../components/page/PageAbout.vue'
import Page404 from '../components/page/Page404.vue'
import PrePage from '../components/page/PrePage.vue'
//import AddPaymentForm from '../components/AddPaymentForm.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '/add/payment/:category/value/:value',
      name: 'category',
      component: PrePage
    },
    {
      path: "*",
      component: Page404
    }
  ]

})
