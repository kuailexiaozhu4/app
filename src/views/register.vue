<template>
  <div class="container">
    <!--  顶部  -->
    <van-nav-bar title="注册"/>
    <van-form @submit="onSubmit" :show-error-message="false" class="login-form" label-width="4rem">
      <van-field
          v-model="name"
          name="name"
          label="姓名"
          placeholder="请输入真实姓名"
          :rules="[{ required: true, message: '请输入真实姓名' }]"
      />
      <van-field
          v-model="phone"
          type="tel"
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
      <van-field name="gender" label="性别" :rules="[{ required: true}]">
        <template #input>
          <van-radio-group v-model="gender" direction="horizontal">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
          v-model.number="age"
          type="digit"
          name="age"
          label="年龄"
          placeholder="请输入年龄"
          :rules="[{ required: true, message: '请输入年龄' }]"
      />
      <van-field
          v-model="idCard"
          name="idCard"
          label="身份证"
          placeholder="请输入身份证号"
          :rules="[{ required: true, message: '请输入身份证号' }]"
      />

      <van-field
          readonly
          clickable
          name="address"
          :value="address"
          label="地址"
          placeholder="点击选择省市区"
          @click="showArea = true"
      />
      <van-popup v-model="showArea" position="bottom">
        <van-area
            :area-list="areaList"
            @confirm="onConfirm"
            @cancel="showArea = false"
        />
      </van-popup>

      <div style="margin: 2rem auto; width: 10rem;">
        <van-button block type="primary" native-type="submit">点击注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {register} from '@/api/appuser'

export default {
  data() {
    return {
      name: '',
      phone: '',
      password: '',
      gender: '',
      age: '',
      idCard: '',
      address: '',
      showArea: false,
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市',
        },
        city_list: {
          110100: '北京市',
          120100: '天津市',
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
        },
      }, // 数据格式见 Area 组件文档
    };
  },
  methods: {
    onSubmit(values) {
      register(values).then(res => {
        if (res.code === 200) {
          this.$router.replace('/login');
        } else {
          this.$notify(res.msg)
        }
      })
      // this.$router.replace('/login')
    },
    onConfirm(values) {
      this.address = values
          .filter((item) => !!item)
          .map((item) => item.name)
          .join('/');
      this.showArea = false;
    },
  },
}
</script>

<style scoped>
.container {
  position: absolute;
  height: 100vh;
}

.login-form {
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 10%;
  margin-left: 2rem;
  margin-right: 2rem;
  border: 0.1rem solid #F1F1F1;
  box-shadow: #F1F1F1 .1rem .1rem;
}
</style>