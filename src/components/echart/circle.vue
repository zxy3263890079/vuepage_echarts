<template>
  <div v-bind:id="id" v-bind:data="data"></div>
</template>

<script>
export default {
  name: 'baseEchartsAllComponent',
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
    this.drawLineGraph(this.id, this.data)
  },
  Updated () {},
  methods: {
    drawLineGraph (id, data) {
      let _this = this
      let myChart = document.getElementById(id)
      this.ChartLineGraph = this.echarts.init(myChart)
      this.ChartLineGraph.setOption(data)
      window.addEventListener('resize', () => {
        _this.ChartLineGraph.resize()
      })
      var myDate = new Date()
      var month = myDate.getMonth()
      if (month === 0) {
        month = 12
      }
      setTimeout(function () {
        _this.ChartLineGraph.dispatchAction({
          type: 'hideTip', // 不显示
          seriesIndex: 0,
          dataIndex: month - 1 // 显示第几个数据
        })
      }, 2000)
    }
  },
  beforeDestroy () {
    if (this.ChartLineGraph) {
      this.ChartLineGraph.clear()
    }
  }
}
</script>

<style scoped></style>
