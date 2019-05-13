<template>
    <div>
        <Header :cities="cities"></Header>
        <Citylist :hotCity="hotCity" :cityList="cities" :letter="letter"></Citylist>
        <Citybar :cityList="cities" @change="handChange"></Citybar>
    </div>
</template>

<script>
import Header from './components/Header'
import Citylist from './components/Citylist'
import Citybar from './components/Citybar'
import axios from 'axios'
export default {
    data () {
        return {
            nowCity: "",
            hotCity: [],
            cities: {},
            // 字母组件,传递给list组件
            letter: ''
        }
    },
    methods: {
        getCityInfo () {
            axios.get('api/city.json').then((res) => {
                res = res.data;
                if (res.ret && res.data) {
                    this.hotCity = res.data.hotCities;
                    this.cities = res.data.cities;
                }
            })
        },
        getCityNow () {
            axios.get('/api/index.json').then((res) => {
                res = res.data;
                if (res.ret && res.data) {
                    this.nowCity = res.data.city;
                }
            })
        },
        // 点击字母跳转到对应的项
        handChange (data) {
            // 接受子组件传递过来的数据
            this.letter = data;
        }
    },
    mounted () {
        this.getCityInfo();
        this.getCityNow ();
    },
    components: {
       Header,
       Citylist,
       Citybar
    }
}
</script>

<style>

</style>
