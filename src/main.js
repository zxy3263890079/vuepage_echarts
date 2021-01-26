// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Echarts from 'echarts'
import axios from 'axios'
import vresource from 'vue-resource'
// import from 'utils/size.js'
// import $ from 'jquery'
axios.defaults.withCredentials = true
// Vue.forceUpdate()
Vue.prototype.$http = axios
axios.defaults.baseURL = ''
Vue.prototype.echarts = Echarts
Vue.use(vresource)
Vue.use(Echarts)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

fnResize();
window.onresize = function () {
  fnResize();
}

function fnResize() {
  document.documentElement.style.fontSize = 5 / 750 * window.innerWidth + 'px';
}
// 禁止双击放大
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
  var now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);
