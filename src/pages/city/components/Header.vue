<template>
  <div>
    <div class="header">
        <div class="header-left" @click="go"><span class="iconfont">&#xe624;</span></div>
        <div class="header-text">城市选择</div>
        <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          <input class="search" type="text" v-model="keyword" placeholder="城市/景点/游玩">
        </div>
    </div>
    <div class="searchContent" ref="searchContent" v-show="keyword">
        <ul>
          <li class="search-item border-bottom" @click="handleCity(item.name)" v-for="item in list" :key="item.id">{{item.name}}</li>
          <li v-show="hasData" class="hasData">没有找到相关内容</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      // 搜索关键字
      keyword: '',
      // 返回的搜索结果
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.searchContent, {click: true});
  },
  computed: {
    hasData () {
      return !this.list.length;
    }
  },
  watch: {
    // 监听数值输入的变化
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((val) => {
            // 如果能搜索到关键词就添加到result中
            if (val.spell.indexOf(this.keyword) > -1 || 
            val.name.indexOf(this.keyword) > -1) {
              result.push(val);
            }
          })
          this.list = result;
        }
      }, 100)
    }
  },
  methods: {
    go () {
      this.$router.go(-1);
    },
    handleCity (city) {
      this.$store.commit('changeCity', city);
      this.$router.push({path: '/'});
    }
  }
}
</script>

<style lang="stylus" scoped>
// 引入全局样式
// @import '../../../assets/styles/bg.styl'
@import '~@/assets/styles/bg.styl'
    .header
        line-height: .86rem
        background: $bgcolor
        color: #fff
        text-align: center
        padding-bottom: .2rem
        position: relative
        .header-left
          width: .64rem
          height: .86rem
          position: absolute 
          left: 0
          top: 0
          .iconfont
            display: block
        .header-text
            width: 100%
            height: .86rem
        .header-input
          height: .64rem
          line-height: .64rem
          border-radius: .1rem
          color: #ccc
          text-align: center
          position: relative
          .iconfont
            position: absolute
            left: .3rem
          .search
            width: 96%
            height: .64rem
            line-height: .64rem
            border-radius: .1rem
            text-align: center
            color: $darkTextColor
    .searchContent
      position: absolute 
      left: 0
      bottom: 0
      right: 0
      top: 1.7rem
      width: 100%
      overflow: hidden
      background: #fff
      z-index: 1
      & li
        width: 100%;
        padding: 2% 1.2%;
        font-size: 0.24rem;
      & .hasData
        text-align: center
</style>
