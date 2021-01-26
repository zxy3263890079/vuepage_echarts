<template>
  <div class="login-email">
    <div class="left">
      <h2>注册</h2>
      <p>已发送6位验证码到邮箱：{{$route.query.email}}</p>
      <p>请<span>登录邮箱</span>并根据提示输入验证码：</p>
      <div class="verifaction">
        <input ref="pwd" type="password" maxlength="6" v-model="msg"  style="position: absolute;z-index: -1;left:-100%;opacity: 0"/>
        <ul class="pwd-wrap" @click="focus">
          <li><i v-if="msgLength > 0"></i></li>
          <li><i v-if="msgLength > 1"></i></li>
          <li><i v-if="msgLength > 2"></i></li>
          <li><i v-if="msgLength > 3"></i></li>
          <li><i v-if="msgLength > 4"></i></li>
          <li><i v-if="msgLength > 5"></i></li>
        </ul>
      </div>
      <p class="note">温馨提示：输入的有效的验证码之前，请不要关闭此页！</p>
      <div class="submit">
        <el-button @click="toUserInfo">确定</el-button>
      </div>
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
  name: 'RegisterEmail',
  components: {
    Ad,
    Dialog
  },
  data () {
    return {
      msg: '',
      msgLength: 0
    }
  },
  methods: {
    // 跳转到登录
    toLogin () {
      this.$router.push({path: '/login'})
    },
    focus () {
      this.$refs.pwd.focus()
    },
    toUserInfo () {
      this.$router.push({path: '/userInfo'})
    }
  },
  watch: {
    msg (curVal) {
      if (/[^\d]/g.test(curVal)) {
        this.msg = this.msg.replace(/[^\d]/g, '')
      } else {
        this.msgLength = curVal.length
      }
    }
  }
}
</script>

<style scoped>
.login-email {
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
.left p {
  line-height: 1.43;
  font-size: 14px;
}
.left .note {
  color: #999;
  font-size: 12px;
}
.left p span {
  color: #3675d5;
  text-decoration: underline;
}
.verifaction {
  margin: 20px 0;
}
.login-email .pwd-wrap {
  width: 90%;
  height: 44px;
  padding-bottom: 1px;
  margin: 0 auto;
  background: #fff;
  border:1px solid #ddd;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  cursor: pointer;
}
.pwd-wrap li {
  list-style-type:none;
  text-align: center;
  line-height: 44px;
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-flex: 1;
  border-right:1px solid #ddd ;
}
.pwd-wrap li:last-child {
  border-right: 0;
}
.pwd-wrap li i {
  height: 10px;
  width: 10px;
  border-radius:50% ;
  background: #000;
  display: inline-block;
}
.right {
  flex: 1;
  background-color: #295aa6;
}
.submit {
  padding: 30px 0;
}
/deep/.submit .el-button {
  width: 100%;
  height: 45px;
  background-color: #295aa6;
  color: #fff;
  font-size: 18px;
}
</style>
