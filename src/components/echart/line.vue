
<template>
  <div class="col-xs-4 col-sm-4 content-2" >
    <div class="half-content">
      <div class="title-1">
        <b>预算完成率</b>
        <slot name="title"></slot>
<!--        <div class="bottom-title">-->
<!--          <span>上月预算完成率</span>-->
<!--          <h4>81.70%</h4>-->
<!--          <div class="icon">-->
<!--            <img src="../../assets/images/icon/honglvdeng_hong.png"  alt="">-->
<!--            <span>租售比偏低</span>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <div class="right">
        <slot name="enchart"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseEchartscircle',
  data () {
    return {
      ChartLineGraph: null
    }
  },
  //  深度监听 父组件刚开始没有值，只有图标的配置项
  //  父组件ajax请求后改变数据的值，传递过来，图标已生成，监听传过来的值的改变
  watch: {
    data: {
      handler (newvalue, oldvalue) {
        this.drawLineGraph(this.id, newvalue)
      }
    },
    deep: true
  },
  props: ['id', 'data'],
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
  .content-2 {
    margin-bottom: 1rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content-2>div{
    background: beige;
    /*padding: 35px 39px;*/
    padding: 1.1rem 1.5rem;
    position: relative;
  }
  .content-2 .half-content {
    height: 48%;
    display: flex;
    flex-direction: row;
  }
  .content-2 .title-1{
    display: flex;
    flex-direction: column;
    flex: 1;
    /*width: 40%;*/
  }
  .content-2 .title-1 b {
    font-size: 16px;
  }
  .content-2 .title-1 span {
    font-size: 0.7rem;
  }
  .content-2 .title-1 h4 {
    /*font-size: 1rem;*/
    color: #2D80CC;
  }
  .bottom-title {
    margin-top: 30px;
  }
  .icon {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icon span {
    font-size: 0.6rem!important;
  }
  .right{
    width: 65%;
  }
</style>
