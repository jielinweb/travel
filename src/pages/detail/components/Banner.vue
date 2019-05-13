<template>
    <div>
        <div class="banner" @click="showGallaryList">
            <img class="banner-img" :src="bannerImg" :alt="titleName">
            <div class="banner-info">
                <div class="banner-title">{{titleName}}</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>{{this.banLen}}</div>
            </div>
        </div>
        <FadeAnimate>
            <CommonGallary :imgs="bannerImgList" v-show="showGallary" @hideGallary="handleGallary"></CommonGallary>
        </FadeAnimate>
    </div>
</template>

<script>
import FadeAnimate from '@/common/fade/FadeAnimation'
import CommonGallary from '@/common/gallary/Gallary'
export default {
    name: "Banner",
    props: {
        titleName: String,
        bannerImg: String,
        bannerImgList: Array
    },
    data () {
        return {
            showGallary: false,
        }
    },
    computed: {
        banLen () {
            return this.bannerImgList.length
        }
    },
    methods: {
        showGallaryList () {
            this.showGallary = true
        },
        handleGallary () {
            this.showGallary = false
        }
    },
    components: {
        FadeAnimate,
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        width: 100%
        height: 0;
        padding-bottom: 54.93%
        position: relative
        .banner-img
            width: 100%
        .banner-info
            display: flex
            width: 100%
            position: absolute 
            bottom: 0
            left: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                font-size: .24rem
                height: .32rem
                line-height: .32rem
                margin-top: .14rem
                padding: 0 .4rem
                border-radius: .2rem
                .banner-icon
                    font-size: .24rem
                    margin-right: .1rem
</style>
