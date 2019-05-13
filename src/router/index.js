import Vue from 'vue'
import Router from 'vue-router'
// @ 相当于src路径下的根目录
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      // 动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 设置进入页面的时候滚动初始位置为0
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
