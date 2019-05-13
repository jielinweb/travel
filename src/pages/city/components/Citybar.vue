<template>
  <ul class="cityBar">
      <!-- 添加prevent解决默认事件问题 -->
    <li v-for="item in letters" @click="handClick" :key="item" :ref="item"
    @touchstart.preventDefault="handTouchstart" @touchmove="handTouchmove" @touchend="handTouchend">{{item}}</li>
  </ul>
</template>

<script>
export default {
    props: {
        cityList: Object
    },
    data () {
        return {
            // touch状态
            touchStatus: false,
            // 手指距离顶部的距离
            startY: 0,
            timer: null
        }
    },
    // 当页面更新时
    updated () {
        // 获取字母距离顶部的高度
        this.startY = this.$refs['A'][0].offsetTop;
    },
    computed: {
        // 获取字母,返回一个数组
        letters () {
            const letters = [];
            for (let i in this.cityList) {
                letters.push(i);
            }
            return letters;
        }
    },
    methods: {
        handClick (e) {
            // 将数据传递给父集 e.target.innerText获取事件的内容
            this.$emit('change', e.target.innerText);
        },
        handTouchstart () {
            this.touchStatus = true
        },
        handTouchmove (e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                // 使用函数节流的方式提高性能
                this.timer = setTimeout(() => {
                    // 手指距离顶部的高度
                    const touchY = e.touches[0].clientY - 85;
                    // 字母的下标 20是字母的高度
                    const index = Math.floor((touchY - this.startY) / 20);
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index]);
                    }
                }, 16)
                
            }
        },
        handTouchend () {
            this.touchStatus = false
        }
    }
};
</script>

<style lang="stylus" scoped>
    .cityBar
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.7rem
        right: 0
        bottom: 0
        text-align: center
        & li
            width: .4rem
            line-height: .4rem
            color: #00bcd4
            font-size: .24rem
</style>

