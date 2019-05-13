import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '杭州'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: localStorage.city || '东京'
  },
  // actions: {
  //   changeCity (ctx, city) {
  //   // actions要改变mutations必须执行commit方法
  //     ctx.commit('changeCityes', city)
  //   }
  // },
  // 调用mutions改变公共的数据
  mutations: {
    changeCity (state, city) {
      state.city = city
      // localStorage本地存储
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
