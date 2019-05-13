<template>
    <div class="container" @click="handleGallary">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- :key值必须要加上 -->
                <swiper-slide v-for="(item, $index) in imgs" :key="$index">
                    <img class="gallaryImg" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommonGallary",
    props: {
        imgs: {
            type: Array,
            default () {
                return ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
            }
        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                // 这两个属性解决了当swiper的宽度计算问题
                observeParents: true,
                observer: true
            }
        }
    },
    methods: {
        handleGallary () {
            this.$emit('hideGallary')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        position: fixed
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: #000
        z-index: 99
        .wrapper
            width: 100%
            height: 0
            padding-bottom: 100%
            .gallaryImg
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>

