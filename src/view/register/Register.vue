<template>
  <div class="register">
    <div class="left">
      <h2>注册</h2>
      <div class="ipt">
        <el-input v-model="form.email" @change="verifyEmail" placeholder="请输入邮箱"></el-input>
        <div class="error" v-show="emailError">
          <Dialog>请填写正确邮箱格式。</Dialog>
        </div>
      </div>
      <div class="ipt">
        <el-input v-model="form.password" @input="verifyPassword" placeholder="设置密码" show-password></el-input>
        <ul class="strength" v-show="showPwdLevel">
          <li><span>弱</span></li>
          <li><span v-show="strengthLevel >= 1">中</span></li>
          <li><span v-show="strengthLevel === 2">强</span></li>
        </ul>
        <div class="error" v-show="pwdError">
          <Dialog>请填写密码。</Dialog>
        </div>
      </div>
      <div class="ipt">
        <el-input v-model="form.password2" @change="verifyPassword2" placeholder="再次输入密码" show-password></el-input>
        <div class="error" v-show="pwdError2">
          <Dialog>两次密码不一致。</Dialog>
        </div>
      </div>
      <div class="verify-code ipt">
        <el-input v-model="form.verifyCode" placeholder="验证码" @change="verification"></el-input>
        <div class="code-img"></div>
        <div class="error" v-show="verifyError">
          <Dialog>请填写验证码。</Dialog>
        </div>
      </div>
      <div class="checked">
        <el-checkbox v-model="form.checked">同意 <span class="protocal">《商加信息商业地产SAAS平台用户协议》</span></el-checkbox>
      </div>
      <div class="submit">
        <el-button @click="toLoginEmail">立即注册</el-button>
      </div>
      <div class="footer">已有账号？<span @click="toLogin">立即登录</span></div>
    </div>
    <div class="right">
      <ad />
    </div>
  </div>
</template>

<script>
import Ad from '../../components/ad/Ad'
import Dialog from '../../components/dialog/Dialog'
export default {
  name: 'Register',
  components: {
    Ad,
    Dialog
  },
  data () {
    return {
      form: {
        email: '',
        password: '',
        password2: '',
        verifyCode: '',
        checked: false
      },
      emailError: false,
      pwdError: false,
      pwdError2: false,
      verifyError: false,
      showPwdLevel: false,
      strengthLevel: 0
    }
  },
  methods: {
    // 邮箱格式验证
    verifyEmail (e) {
      let emailReg = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      this.emailError = !emailReg.test(e)
    },
    // 密码格式验证
    verifyPassword (e) {
      let pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      if (pwdReg.test(e) && e.length >= 6) {
        this.pwdError = false
        this.showPwdLevel = true
      } else {
        this.pwdError = true
        this.showPwdLevel = false
      }
      // 密码强度
      if (e.length >= 10) {
        this.strengthLevel = 2
      } else if (e.length >= 8) {
        this.strengthLevel = 1
      } else {
        this.strengthLevel = 0
      }
    },
    verifyPassword2 (e) {
      this.pwdError2 = this.form.password !== this.form.password2
    },
    verification (e) {
      this.verifyError = e.length !== 4
    },
    // 跳转到登录
    toLogin () {
      this.$router.push({path: '/login'})
    },
    toLoginEmail () {
      this.$router.push({path: '/registerEmail', query: {email: this.form.email}})
    }
  }
}
</script>

<style scoped>
.register {
  display: flex;
  color: #333;
  background-color: #fff;
  margin: 0 95px;
}
.left {
  width: 41.6667%;
  padding: 30px 50px 40px;
}
.left h2 {
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: normal;
}
.right {
  flex: 1;
  background-color: #295aa6;
}
/deep/.left .el-input__inner {
  height: 45px;
}
.left .el-input {
  margin-bottom: 10px;
}
.verify-code {
  display: flex;
  justify-content: space-between;
}
.ipt {
  position: relative;
}
.verify-code .el-input {
  width: 58.333%;
}
.code-img {
  width: 33.333%;
  height: 45px;
  background-color: pink;
}
.protocal {
  text-decoration: underline;
}
.checked {
  padding: 6px;
}
/deep/.checked .el-checkbox__label {
  color: #333;
  font-size: 12px;
}
.submit {
  padding: 20px 0;
}
/deep/.submit .el-button {
  width: 100%;
  height: 45px;
  background-color: #295aa6;
  color: #fff;
  font-size: 18px;
}
.footer {
  text-align: center;
  font-size: 12px;
  color: #3675d5;
}
.footer span {
  text-decoration: underline;
}
.error {
  position: absolute;
  transform: translateX(310px);
  top: 3px;
}
.strength {
  display: flex;
}
.strength li {
  text-align: center;
  line-height: 20px;
  margin: 0 3px 10px 0;
  width: 65px;
  height: 20px;
  background-color: #ccc;
  font-size: 12px;
}
.strength li span {
  display: block;
  height: 100%;
  color: #fff;
}
.strength li:first-child span {
  background-color: #e60012;
}
.strength li:nth-child(2) span {
  background-color: #f90;
}
.strength li:last-child span {
  background-color: #090;
}
</style>
