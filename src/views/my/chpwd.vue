<template>
  <div class="container">
    <!--  NavBar  -->
    <van-nav-bar title="修改密码" left-arrow @click-left="onClickLeft"/>
    <!-- 表单 -->
    <van-form @submit="onSubmit" :show-error-message="false">
      <van-field
          v-model="oldpwd"
          type="password"
          name="旧密码"
          label="旧密码"
          placeholder="请输入旧密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
          v-model="newpwd"
          type="password"
          name="新密码"
          label="新密码"
          placeholder="请输入新密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
          v-model="renewpwd"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="请确认密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      oldpwd: '',
      newpwd: '',
      renewpwd: ''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    onSubmit(formData) {
      console.log('submit', formData);
    },
  }
}
</script>

<style scoped>
.container {
  background-color: #F1F1F1;
  height: 100vh;
}

.card {
  margin-top: 2rem;
}
</style>