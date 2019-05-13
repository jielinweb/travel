<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul class="item-list">
      <li class="item border-bottom" v-for="item in recommend" :key="item.id">
        <img class="item-left" :src="item.imgUrl" :alt="item.id">
        <div class="item-right">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <router-link :to="{path: '/detail/' + item.id}" :key="item.id">
            <input class="item-btn" type="button" value="产看详情">
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "HomeRecommend",
    props: {
        recommend: Array
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
            padding: .1rem .2rem
            height: 2rem;
            font-size: 0
            display: flex
            .item-left
                width: 2rem
                height: 2rem
                display: inline-block
            .item-right
                display: inline-block
                padding: .1rem
                min-width: 0
                flex: 1
                .item-title
                    font-size: .28rem
                    height: .6rem
                    line-height: .6rem
                    color: $darkTextColor
                .item-desc
                    font-size: .24rem
                    line-height: .44rem
                    color: #666
                    ellipsis()
                .item-btn
                    line-height: .44rem
                    color: #fff
                    background: #ff9300
                    font-size: .24rem
                    margin-top: .16rem
                    padding: 0 .2rem
                    border-radius: .06rem
</style>


