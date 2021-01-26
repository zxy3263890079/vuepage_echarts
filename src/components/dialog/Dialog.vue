<template>
  <div class="dialog">
    <div class="dialog-l"></div>
    <div class="dialog-r">
      <i class="el-icon-circle-close"></i>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog'
}
</script>

<style scoped>
  .dialog {
    display: flex;
    align-items: center;
    height: 38px;
    font-size: 12px;
  }
  .dialog-l {
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-right-color: #ec615f;
    position: relative;
    left: 1px;
  }
  .dialog-r {
    padding: 0 20px 0 10px;
    display: flex;
    align-items: center;
    color: #fff;
    height: 38px;
    background-color: #ec615f;
    border-radius: 4px;
  }
  /deep/.el-icon-circle-close::before {
    font-size: 15px;
    padding-right: 5px;
  }
</style>
