<template>
    <div class="wrapper" ref="Citywrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <ul class="city-address">
                    <li class="city">{{this.city}}</li>
                </ul>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <ul class="city-address">
                    <li class="city" v-for="city in hotCity" @click="handleCity(city.name)">{{city.name}}</li>
                </ul>
            </div>
            <div class="area" v-for="(item, key) in cityList">
                <div class="title" :ref="key">{{key}}</div>
                <ul class="citys-list">
                    <li @click="handleCity(cities.name)" class="city border-bottom" v-for="cities in item">{{cities.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// 使用better-scroll需要注意,布局必须有两个外层包裹
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
    props: {
        hotCity: Array,
        cityList: Object,
        letter: String
    },
    computed: {
        // 引用mapState将city映射到计算属性
        // this.$store.state.city 可以简写为 this.city
        ...mapState(['city'])
    },
    methods: {
       handleCity (city) {
        // 触发action,改变vuex的公共数据,第一个参数是事件,第二个是值,即派发一个名为changeCity的action,把city传过去
        // 组件可以直接调用commit
        // this.$store.commit('changeCity', city);
        this.changeCity(city)
        // this.$router.push({path: '/'})
       },
    //    将mutations映射到methods方法中
       ...mapMutations(['changeCity'])
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.Citywrapper, {click: true});
    },
    // 监听letter的变化,当letter改变的时候触发事件
    watch: {
        letter () {
            if (this.letter) {
                // 当前的字母所在位置,在后面加0才是dom节点
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element, {click: true});
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper
        position: absolute 
        top: 1.7rem
        left: 0
        right: 0
        bottom: 0
        overflow: hidden
        .area
            .title
                height: .6rem
                line-height: .6rem
                font-size: .26rem
                padding: 0 1.2%
                color: #333
                background: #eee
            .city-address
                background: #fff
                padding: .2rem 0
                font-size: 0
                .city
                    display: inline-block
                    width: 30%
                    text-align: center
                    padding: .14rem 0
                    font-size: .24rem
                    border: 1px solid #ddd
                    margin: 1.2%
            .citys-list
                background: #fff
                .city
                    width: 100%
                    padding: 2% 1.2%
                    font-size: .24rem
</style>
