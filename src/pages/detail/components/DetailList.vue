<template>
    <div>
        <div class="item" v-for="(item, $index) in titleList" :key="$index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>{{item.title}}
            </div>
            <!-- 递归显示内容,条件为v-if='item.children' -->
            <div class="item-children" v-if="item.children">
                <DetailList :titleList="item.children"></DetailList>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        titleList: Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title
        line-height: .8rem  
        font-size: .32rem
        padding: 0 .2rem
        .item-title-icon
            position: relative
            left: .06rem
            top: .06rem
            display: inline-block
            width: .36rem
            height: .36rem
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
            margin-right: .1rem
            background-size: .4rem 3rem
    .item-children
        padding-left: .5rem
</style>
