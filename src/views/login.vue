<template>
  <div class="container">
    <!--  顶部  -->
    <van-nav-bar title="登录"/>
    <van-form @submit="onSubmit" :show-error-message="false" class="login-form" label-width="4rem">
      <van-field
          v-model="phone"
          name="phone"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请输入密码' }]"
      />

      <div style="margin: 12px;">
        <van-row>
          <van-col span="12" style="margin-right: 2rem">
            <van-button size="small" block type="info" native-type="submit">登录</van-button>
          </van-col>
          <van-col span="8">
            <van-button plain hairline size="small" type="info" @click='goReg'>注册账号</van-button>
          </van-col>
        </van-row>
      </div>
    </van-form>
  </div>
</template>
<script>
import {login} from '@/api/appuser'

export default {
  data() {
    return {
      phone: '',
      password: '',
    };
  },
  methods: {
    onSubmit(data) {
      login(data).then(res => {
        if (res.code === 200) {
          this.$store.commit('login', res.data)
          localStorage.setItem("name", res.data.name)
          this.$router.replace('/')
        } else {
          this.$notify(res.msg);
          this.password = '';
          this.phone = '';
        }
      })
    },
    goReg() {
      this.$router.push('/register')
    }
  },
};
</script>
<style scoped>
.container {
  position: absolute;
  height: 100vh;
}

.login-form {
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 40%;
  margin-left: 2rem;
  margin-right: 2rem;
  border: 0.1rem solid #F1F1F1;
  box-shadow: #F1F1F1 .1rem .1rem;
}
</style>
