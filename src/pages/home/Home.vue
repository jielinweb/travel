<template>
  <div>
    <Homeheader></Homeheader>
    <Swiper :swiperList="swiper"></Swiper>
    <Icon :iconsList="icons"></Icon>
    <Recommend :recommend="recommend"></Recommend>
    <Weekend :weekendList="weekend"></Weekend>
    <Footer></Footer>
  </div>
</template>

<script>
import Homeheader from './components/Header'
import Swiper from './components/Swiper'
import Icon from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import Footer from './components/Footer'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      // 上一次显示的城市
      lastCity: '',
      swiper: [],
      icons: [],
      recommend: [],
      weekend: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getIndexData () {
      axios.get('/api/index.json?city=' + this.city).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          this.swiper = res.data.swiperList
          this.icons = res.data.iconList
          this.recommend = res.data.recommendList
          this.weekend = res.data.weekendList
        }
      })
    }
  },
  // 挂载完成后
  mounted() {
    // 页面挂载完的时候给lastCity赋值
    this.lastCity = this.city
    // 页面初次加载的时候会发送一次ajax请求
    this.getIndexData()
  },
  // 加入keep-alive会多出一个该声明周期函数,当页面重新被显示的时候
  activated () {
    // 判断当前页面的城市跟上一次显示的城市是否相同,不相同再发送一次ajax请求
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getIndexData()
    }
  },
  components: {
    Homeheader,
    Swiper,
    Icon,
    Recommend,
    Weekend,
    Footer
  }
}
</script>

<style>
</style>
