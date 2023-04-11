<template>
  <div class="container">
    <!--  轮播图  -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!--  格子间隔  -->
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字"/>
    </van-grid>
    <!--  底部导航栏  -->
    <tab-bar/>
  </div>
</template>

<script>
import TabBar from '@/components/tabbar.vue'

export default {
  components: {
    TabBar
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>