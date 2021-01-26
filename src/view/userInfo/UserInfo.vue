<template>
      <div class="login">
        <div class="main">
          <h2>最后一步，马上开始试用...</h2>
          <div class="first">
            <el-input v-model="form.name"  placeholder="您的姓名"></el-input>
            <el-input v-model="form.serve"  placeholder="您的服务"></el-input>
          </div>
          <div class="second">
            <el-input v-model="form.name"  placeholder="公司名称"></el-input>
            <el-input v-model="form.serve"  placeholder="公司电话"></el-input>
            <!-- <el-input v-model="form.serve"  placeholder="管理规模"></el-input> -->
            <el-select placeholder="管理规模" v-model="value">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="third">
            <el-input v-model="form.phone"  placeholder="输入手机号码"></el-input>
          </div>
          <div class="checkBox">
              <el-checkbox>写字楼</el-checkbox>
              <el-checkbox>购物中心</el-checkbox>
              <el-checkbox>社区类</el-checkbox>
              <el-checkbox>产业园区</el-checkbox>
              <el-checkbox>专业专场</el-checkbox>
          </div>
          <div class="submit">
            <el-button size="medium">马上开启</el-button>
          </div>
        </div>
      </div>
</template>
<script>
import Ad from '../../components/ad/Ad'
export default {
  name: 'UserInfo',
  components: {
    Ad
  },
  data () {
    return {
      form: {
        name: '',
        serve: '',
        managerSize: '',
        phone: '',
        email: '',
        verifyCode: '',
        checked: false,
        value: ''
      },
      options: [],
      value: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.login {
  display: flex;
  height: 420px;
  color: #333;
  margin: 0 95px;
  background-color: #fff;
}
.main {
  padding: 30px 50px 10px;
  width: 100%;
}
.first,.second,.third{
  display: flex;
  margin-top: 20px;
}
.first{
  margin-top: 50px;
}
/deep/.main .el-input{
  width: 200px;
  margin-right: 10px;
}
/deep/.main .el-button--medium{
  margin-top: 40px;
  border-radius: 0;
  width: 160px;
}
.checkBox {
  margin-top: 20px;
}
/deep/.submit .el-button {
  height: 40px;
  width: 200px;
  background-color: #295aa6;
  color: #fff;
  font-size: 18px;
  border-radius: 0;
}
</style>
