<template>
    <div>
        <Banner :titleName="sightName" :bannerImg="bannerImg" :bannerImgList="gallaryImg"></Banner>
        <DetailHeader></DetailHeader>
        <div class="content">
            <DetailContent :titleList="DataList"></DetailContent>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import DetailContent from'./components/DetailList'
import axios from 'axios'
export default {
    nane: "Detail",
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImg: [],
            DataList: []
        }
    },
    methods: {
        getDetailData () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then((res) => {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImg = data.gallaryImgs
                    this.DataList = data.categoryList
                }
            })
        }
    },
    mounted () {
        this.getDetailData()
    },
    components: {
        Banner,
        DetailHeader,
        DetailContent
    }
}
</script>

<style lang="stylus" scoped>
    .content 
        height: 20rem
</style>

