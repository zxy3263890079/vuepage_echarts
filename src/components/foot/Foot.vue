<template>
  <div class="foot">
    <div class="copyright">© 2016, 上海商加信息科技有限公司及其所有子公司保留所有权利。</div>
    <ul class="list">
      <li>隐私策略</li>
      <li>使用条款</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped>
.foot {
  display: flex;
  margin: 0 95px;
  padding-top: 15px;
  justify-content: space-between;
  height: 30px;
  color: #fff;
  font-size: 12px;
}
.list {
  display: flex;
}
.list li {
  padding: 0 10px;
  border-left: 1px solid #fff;
  text-decoration: underline;
}
.list li:first-child {
  border-left: none;
}
</style>
