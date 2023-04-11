<template>
  <div class="container">
    <!--  顶部title  -->
    <van-nav-bar title="附近医院">
      <template #right>
        <van-button
            style="border: 0 white solid"
            plain hairline icon="location-o"
            type="default"
            size="mini"
            to="locate"
        >xx市
        </van-button>
      </template>
    </van-nav-bar>
    <!--  搜索  -->
    <van-search v-model="value" placeholder="请输入搜索关键词"/>
    <!--  医院  -->
    <van-cell-group inset>
      <van-cell title="疫苗" value="价格" label="描述信息"/>
    </van-cell-group>
    <!--  底部导航栏  -->
    <tab-bar/>
  </div>
</template>

<script>
import TabBar from '@/components/tabbar.vue'

export default {
  data() {
    return {
      value: '',
      hospital: [{
        name: '',
        price: '',
        place: '',
        time: '',
        distance: '',
        loss: true
      }]
    };
  },
  components: {
    TabBar
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  background-color: #F7F8FA;
}
</style>