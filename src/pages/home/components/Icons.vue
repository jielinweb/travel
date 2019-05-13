<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, $index) in pages" :key="$index">
        <div class="icon" v-for="item in page">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.id">
          </div>
          <div class="icon-desc">{{item.desc}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
    props: {
      iconsList: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
    computed: {
      // 这里通过计算属性解决超过8组小图标自动下一个轮播,利用二维数组
      pages () {
        const pages = [];
        // 遍历iconList
        this.iconsList.forEach((item, index) => {
          // 如果8可以被整除
          const page = Math.floor(index / 8);
          // 如果pages[page]不存在,等于0就是不存在
          if (!pages[page]) {
            // 等于空数组
            pages[page] = []
          }
          pages[page].push(item);
        })
        return pages;
      }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/bg.styl'
@import '~@/assets/styles/ellipsis.styl'
    // 宽高比例
    .wrapper
      margin: .2rem 0
    .wrapper >>> .swiper-container
        // overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 50%
        .icon
            position: relative
            overflow: hidden
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
            .icon-img
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding: .1rem
                .icon-img-content
                    display: block
                    margin: 0 auto
                    height: 100%
            .icon-desc
                font-size: .24rem
                position: absolute 
                left: 0
                right: 0
                bottom: 0
                height: .44rem
                line-height: .44rem
                text-align: center
                color: $darkTextColor
                ellipsis()
</style>
