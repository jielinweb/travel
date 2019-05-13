<template>
  <div class="header">
      <div class="header-left"><span class="iconfont">&#xe624;</span></div>
      <div class="header-input" @click="toCity">
        <span class="iconfont">&#xe632;</span>
        <input class="search" type="text" placeholder="城市/景点/游玩">
      </div>
      <div class="header-right" @click="toCity">{{this.$store.state.city}}<span class="iconfont">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  methods: {
    toCity () {
      this.$router.push({path: '/city'});
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
        display: flex
        background: $bgcolor
        color: #fff
        text-align: center
        .header-left
          width: .64rem
          float: left
          .iconfont
            display: block
        .header-input
          flex: 1
          height: .64rem
          line-height: .64rem
          margin-top: .12rem
          background: #fff
          border-radius: .1rem
          color: #ccc
          text-align: left
          position: relative
          .iconfont
            position: absolute
            left: .2rem
          .search
            width: 100%
            height: .64rem
            line-height: .64rem
            text-indent: .6rem
            border-radius: .1rem
            color: #333
        .header-right
          min-width: 1.24rem
          padding: 0 .1rem
</style>
