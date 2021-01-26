import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Router.beforeEach((to, from, next) => {
//   // ...
// })

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vuepage/echartshome',
      component: () => import('../view/echartsList/echartsList.vue')
    },
    {
      path: '/vuepage/echartsShopping',
      component: () => import('../view/echartsList_two/echartsList.vue')
    },
    {
      path: '/vuepage/wyhome',
      component: () => import('../view/echartsList/wyhome.vue')
    },
    {
      path: '/',
      redirect: '/vuepage/echartshome'
    }
  ]
})
