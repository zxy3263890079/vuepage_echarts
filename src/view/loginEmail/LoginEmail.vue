<template>
      <div class="login">
        <div class="left">
          <h2>忘记密码</h2>
          <div class="email">
            <p>已发送6位验证码到邮箱</p>
            <p>1039732307@qq.com</p>
            <p>请<span @click="toForgetPassword()">登录邮箱</span>并根据提示输入验证码</p>
          </div>
          <div class="submit" @click="toLogin()">
            <el-button>立即登录</el-button>
          </div>
        </div>
        <div class="right">
          <ad />
        </div>
  </div>
</template>

<script>
import Ad from '../../components/ad/Ad'
export default {
  name: 'Login',
  components: {
    Ad
  },
  data () {
    return {
      form: {
        email: '',
        password: '',
        verifyCode: '',
        checked: false
      }
    }
  },
  methods: {
    toForgetPassword () {
      console.log(111)
      this.$router.push({
        path: '../forgetPassword'
      })
    },
    toLogin () {
      this.$router.push({
        path: '../login'
      })
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  margin: 0 95px;
  background-color: #fff;
  color: #333;
}
.left {
  width: 41.6667%;
  padding: 30px 50px 10px;
}
.left h2 {
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: normal;
}
.email p{
  font-size: 14px;
  margin-top: 5px;
}
.email span{
  color: #3675d5;
  text-decoration: underline;
}
.submit {
  margin: 20px 0;
}
/deep/.submit .el-button {
  width: 100%;
  height: 45px;
  background-color: #295aa6;
  color: #fff;
  font-size: 18px;
  border-radius: 0;
  margin-top: 20px;
}
.footer {
  margin-bottom: 30px;
  text-align: center;
  font-size: 14px;
  color: #3675d5;
  display: flex;
}
.footer span {
  text-decoration: underline;
  margin-right: auto;
}
.right {
  flex: 1;
  background-color: #295aa6;
}
</style>
