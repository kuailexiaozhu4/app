<template>
  <div>
    <!--  NavBar  -->
    <van-nav-bar title="编辑资料" left-arrow @click-left="onClickLeft"/>
    <!--表单-->
    <van-form @submit="onSubmit" :show-error-message="false">
      <van-field
          v-model="user.name"
          name="name"
          label="姓名"
          :rules="[{ required: true, message: '请填写用户姓名' }]"
      />
      <van-field
          v-model.number="user.age"
          name="age"
          label="年龄"
          :rules="[{ required: true, message: '请填写年龄' }]"
      />

      <van-field name="gender" label="性别">
        <template #input>
          <van-radio-group v-model="user.gender" direction="horizontal">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field
          readonly
          clickable
          name="address"
          :value="user.address"
          label="地区选择"
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
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">保存修改</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {update} from '@/api/appuser'

export default {
  created() {
    this.user = this.$store.state.user
  },
  data() {
    return {
      user: {
        id: '',
        name: '',
        age: '',
        gender: '',
        address: ''
      },

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
      },
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    onSubmit() {
      update(this.user).then(res => {
        if (res.code === 200) {
          this.$notify({
            type: 'primary',
            message: res.msg,
            duration: 2000
          });
          this.onClickLeft();
        }
      })
    },
    onConfirm(values) {
      this.user.address = values
          .filter((item) => !!item)
          .map((item) => item.name)
          .join('/');
      this.showArea = false;
    },
  },
};
</script>

<style scoped>

</style>