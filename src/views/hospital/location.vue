<template>
  <div>
    <!--  NavBar  -->
    <van-nav-bar title="定位" left-arrow @click-left="onClickLeft"/>
    <!-- 当前位置 -->
    {{ city }}
    <van-index-bar>
      <van-index-anchor index="A"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
      <van-index-anchor index="B"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
    </van-index-bar>
  </div>
</template>

<script>
import getCurrentCityName from '@/utils/getUserLocation'

export default {
  created() {
    this.getCurrentCity()
  },
  data() {
    return {
      city: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    //  获取地理位置
    getCurrentCity() {
      getCurrentCityName().then((res) => {
        this.city = res
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>