<template>
  <div class="container">
    <!--  头部  -->
    <van-nav-bar title="我的"/>
    <!--  图片填充模式  -->
    <!--    <van-image-->
    <!--        fit="contain"-->
    <!--        src="https://img01.yzcdn.cn/vant/cat.jpeg"-->
    <!--    />-->
    <div class="header">
      <div>
        <van-image round width="5rem" height="5rem" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
        <span>姓名：</span>
      </div>
      <div></div>
    </div>
    <!--  卡片单元格  -->
    <van-cell-group inset>
      <van-cell title="我的预约" is-link icon="flag-o" size="large" to="/"/>
      <van-cell title="编辑资料" is-link icon="manager-o" size="large" to="/detail"/>
      <van-cell title="关于我们" is-link icon="like-o" size="large"/>
      <van-cell title="修改密码" is-link icon="shield-o" size="large" to="/chpwd"/>
      <van-cell title="退出登录" icon="close" size="large" @click="logout"/>
    </van-cell-group>
    <!--  底部导航栏  -->
    <tab-bar/>
  </div>
</template>

<script>
import TabBar from '@/components/tabbar.vue'

export default {
  components: {
    TabBar
  },
  methods: {
    logout() {
      this.$store.commit('logout');
      localStorage.removeItem("name")
      this.$router.replace('login')
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  background-color: #F7F8FA;
}

.header {
  width: 100vw;
  height: 26%;
  background-color: #39a9ed;
}

.van-cell-group {
  margin-top: 2rem;
}

/*.van-cell,*/
.van-icon {
  color: #55C7A4;
}
</style>