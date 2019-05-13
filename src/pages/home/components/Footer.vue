<template>
    <div>
        <ul class="menu-list border-bottom">
            <li v-for="item in pathList" :key="item.id"><router-link :to="{path: item.path}">{{item.title}}</router-link></li>
        </ul>
        <div class="type">
            <a href="#0" class="mobile">触屏版</a>
            <a href="#0" class="pc">电脑版</a>
        </div>
        <p class="beian">Qunar 京ICP备05021087</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            pathList: [
                {id: 1, path: '/login', title: '登陆'},
                {id: 2, path: '/myindex', title: '我的订单'},
                {id: 3, path: '/look', title: '最近浏览'},
                {id: 4, path: '/about', title: '关于我们'}
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .menu-list
        width: 100%
        height: .8rem
        line-height: .8rem
        text-align: center
        font-size: 0
        padding-bottom: .2rem
        & li, & a
            color: #25a4bb
            font-size: .28rem
            display: inline-block
            margin-right: .2rem
    .type
        text-align: center
        height: .6rem
        line-height: .6rem
        font-size: 0
        & a
            color: #333
            font-size: .24rem
        & a:first-child
            color: #25a4bb
            margin-right: .2rem
    .beian
        color: #666
        font-size: .24rem
        text-align: center
        padding-bottom: .2rem
</style>


