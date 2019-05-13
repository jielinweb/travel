<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul class="item-list">
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-left"><img :src="item.imgUrl" :alt="item.id"></div>
        <div class="item-right">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "HomeWeekend",
    props: {
        weekendList: Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/ellipsis';
    @import '~@/assets/styles/bg'
    .title
        height: 0.8rem
        line-height: 0.8rem
        background: #eee
        text-indent: 0.4rem
        font-size: 0.28rem
    .item-list
        margin: .2rem 0
        .item
            padding: .1rem 0
            .item-left
                width: 100%
                height: 0
                padding-bottom: 36.643%
                & img 
                    display: block
                    width: 100%
            .item-right
                padding: .2rem
                .item-title
                    font-size: .28rem
                    height: .6rem
                    line-height: .6rem
                    color: $darkTextColor
                    ellipsis()
                .item-desc
                    font-size: .24rem
                    line-height: .44rem
                    color: #666
                    ellipsis()
</style>


