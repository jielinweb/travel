import Vue from 'vue'
import App from './App'
import router from './router'
// 引入全局reset样式
import './assets/styles/reset.css'
// 引用1像素
import './assets/styles/border.css'
// 引用字体图标
import './assets/styles/iconfont.css'
// 引用轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 使用axios加载数据
// import axios from 'axios'
// import Vueaxios from 'vue-axios'
// 引用store
import store from './store'
// 安装babel-polyfill包解决promise的兼容性问题
import 'babel-polyfill'
Vue.config.productionTip = false
// 使用轮播图插件
Vue.use(VueAwesomeSwiper)

// 将axios挂载到vue的原型上
// Vue.prototype.axios = axios
// 这里需要注意的是Vueaxios必须在前面
// Vue.use(Vueaxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
