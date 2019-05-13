<template>
  <!-- swiperOption 需要在下边定义 -->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" :alt="item.id"></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    swiperList: Array
  },
  data () {
    return {
      // 设置小圆点颜色
      swiperOption: {
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true,
        autoplay: 3000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
// >>>表示样式穿透,强制修改颜色
  .wrapper >>> .swiper-pagination-bullet-active
      background: #666
//   宽高比例 图片的高度除以图片的宽度得到比例
  .wrapper
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 31.25%
      background: #eee
    .swiper-img
        width: 100%
</style>
