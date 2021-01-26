<template>
<div>
  <div class="header">
    TCL图表
  </div>
  <div class="main_list">
 <div class="list_item">
   <div class="item_Nav">
    <span class="item_button">{{chartList[0].title}}（&nbsp;{{chartList[0].percent}}&nbsp;）</span>
    <img  v-if='chartList[0].isshow==false' class="icon_right" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[0].id)"/>
    <img  v-if='chartList[0].isshow==true' class="icon_right drap_dowm" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[0].id)"/>
   </div>
      <div  class="right">
        <linegraph v-if="chartList[0].isshow==false" :id="'myChart'" :data=option :style="{width: '100%', height: '800px'}"></linegraph>
      </div>
  </div>
 <div class="list_item">
   <div class="item_Nav">
    <span class="item_button">{{chartList[1].title}}（&nbsp;{{chartList[1].percent}}&nbsp;)</span>
    <img  v-if='chartList[1].isshow==false' class="icon_right" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[1].id)"/>
    <img  v-if='chartList[1].isshow==true' class="icon_right drap_dowm" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[1].id)"/>
   </div>
      <div  class="right">
        <linegraph v-if="chartList[1].isshow==false" :id="'myChart1'" :data=option1 :style="{width: '100%', height: '500px'}"></linegraph>
        <div class="Collection_Flist" v-if="chartList[1].isshow==false">
          <div class="Collection_Fitem">
            <span class="Collection_Fitem_span1">125,100,301.15</span>
            <span class="Collection_Fitem_span2">应收金额(元）</span>
          </div>
          <div class="Collection_Fitem">
            <span class="Collection_Fitem_span1">125,100,301.15</span>
            <span class="Collection_Fitem_span2">已收金额(元）</span>
          </div>
        </div>
      </div>
  </div>
 <div class="list_item">
   <div class="item_Nav">
    <span class="item_button">{{chartList[2].title}}（&nbsp;{{chartList[2].percent}}&nbsp;）</span>
    <img  v-if='chartList[2].isshow==false' class="icon_right" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[2].id)"/>
    <img  v-if='chartList[2].isshow==true' class="icon_right drap_dowm" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[2].id)"/>
   </div>
      <div  class="right">
        <linegraph v-if="chartList[2].isshow==false" :id="'myChart2'" :data=option2 :style="{width: '100%', height: '500px'}"></linegraph>
      </div>
  </div>
 <div class="list_item">
   <div class="item_Nav">
    <span class="item_button">{{chartList[3].title}}（&nbsp;{{chartList[3].percent}}&nbsp;）</span>
    <img  v-if='chartList[3].isshow==false' class="icon_right" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[3].id)"/>
    <img  v-if='chartList[3].isshow==true' class="icon_right drap_dowm" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[3].id)"/>
   </div>
      <div  class="right">
        <linegraph v-if="chartList[3].isshow==false" :id="'myChart3'" :data=option3 :style="{width: '100%', height: '500px'}"></linegraph>
      </div>
  </div>
 <div class="list_item">
   <div class="item_Nav">
    <span class="item_button">{{chartList[4].title}}（&nbsp;{{chartList[4].percent}}&nbsp;）</span>
    <img  v-if='chartList[4].isshow==false' class="icon_right" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[4].id)"/>
    <img  v-if='chartList[4].isshow==true' class="icon_right drap_dowm" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[4].id)"/>
   </div>
      <div  class="right">
        <linegraph v-if="chartList[4].isshow==false" :id="'myChart4'" :data=option4 :style="{width: '100%', height: '500px'}"></linegraph>
      </div>
  </div>
 <div class="list_item">
   <div class="item_Nav">
    <span class="item_button">{{chartList[5].title}}（&nbsp;{{chartList[5].percent}}&nbsp;）</span>
    <img  v-if='chartList[5].isshow==false' class="icon_right" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[5].id)"/>
    <img  v-if='chartList[5].isshow==true' class="icon_right drap_dowm" src="../../assets/images/icon/下拉.png" @click="updateshow(chartList[5].id)"/>
   </div>
      <div  class="right">
        <linegraph v-if="chartList[5].isshow==false" :id="'myChart5'" :data=option5 :style="{width: '100%', height: '300px'}"></linegraph>
      </div>
  </div>
</div>
</div>

</template>

<script>
import linegraph from '../../components/echart/circle'
export default {
  name: 'Login',
  components: {
    linegraph
  },
  data () {
    return {
      // 出租率
      option: {},
      // 收缴率
      option1: {},
      // 租售比
      option2: {},
      option3: {},
      option4: {},
      option5: {},
      chartList: [],
      chartList1: [],
      chartList2: [],
      chartList3: [],
      chartList4: [],
      dom: ''
    }
  },
  mounted () {
    this.getList()
    this.setChart()
    this.setChart1()
    this.setChart2()
    this.setChart3()
    this.setChart4()
    this.setChart5()
  },
  created () {
  },
  methods: {
    // 切换隐藏/显示
    updateshow (id) {
      this.chartList.forEach(item => {
        if (item.id === id) {
          item.isshow = !item.isshow
        }
      })
    },
    // 取模块数组
    getList () {
      this.chartList = [
        {
          title: '当前出租率',
          percent: '55%',
          info: '（不含多经）',
          id: 1,
          money: '+200',
          type: 0,
          isshow: true
        },
        {
          title: '收缴率',
          percent: '89.50% ',
          info: '上月收缴率',
          id: 2,
          money: '5',
          type: 1,
          isshow: true
        },
        {
          title: '续租率',
          percent: '89.50% ',
          info: '上月租售比',
          id: 3,
          money: '租售比偏低',
          type: 2,
          isshow: true
        },
        {
          title: '合同租金单价趋势图',
          percent: '1081',
          info: '上月坪效 (元/㎡)',
          id: 4,
          money: '8',
          type: 2,
          isshow: true
        },
        {
          title: '预算达成情况',
          percent: '800',
          info: '在租合同 (元/日/㎡)',
          id: 5,
          money: '-10',
          type: 0,
          isshow: true
        },
        {
          title: '90天内到期合同面积及占比',
          percent: '89.50% ',
          info: '上月预算完成率',
          id: 6,
          money: '-20',
          type: 2,
          isshow: true
        }
      ]
      var a = this.chartList
      this.chartList1 = a.slice(2, 3)
      this.chartList2 = a.slice(0, 2)
      this.chartList3 = a.slice(-2)
      this.chartList4 = a.slice(2, 4)
    },
    // drawLine (dom, option) {
    //   // 基于准备好的dom，初始化echarts实例
    //   let myChart = this.echarts.init(document.getElementById(dom))
    //   let resizeDiv = document.getElementById(dom)
    //   // 绘制图表
    //   myChart.setOption(option)
    //   var autoHeight = 200
    //   myChart.getDom().style.height = autoHeight + 'px'
    //   let listener = function () {
    //     myChart.resize()
    //   }
    //   EleResize.on(resizeDiv, listener)
    // },
    // // 出租率
    setChart () {
      // let dom = 'myChart'
      this.option = {
    legend: {
        icon: 'pin',
        width: 800,
        itemWidth: 40,
        left: 'center',
        orient: 'vertical',
        height: 160,
        textStyle: {
          fontSize: 30,
          padding: [0, 80, 0, 0]
          // width: 80
        },
        top: 600,
        data: [
              {value: 1562, name: '停车场'},
              {value: 2457, name: '写字楼'},
              {value: 28, name: '飞机场'},
              {value: 1500, name: '黄花机场'},
              {value: 872, name: '其他'}
            ]
    },
        title: [{
          text: '21000\n总面积',
          textStyle: {
            fontSize: 25,
            color: 'black',
            label: {
            formatter: [
                '{a|这段文本采用样式a}',
                '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
            ].join('\n'),
            rich: {
                a: {
                    color: 'red',
                    lineHeight: 10
                },
                b: {
                    height: 40
                }
            }
}
          },
          textAlign: 'center',
          x: '49%',
          y: '45%'
        }, {
          subtextStyle: {
            fontSize: 28,
            color: '#333333'
          },
          textAlign: 'center',
          x: '29%',
          y: '85%'
        }
        ],
        series: [
          {
            roundCap: 2,
            name: '访问来源',
            type: 'pie',
            radius: ['43%', '53%'],
            top: 45,
            itemStyle: {
              normal: {
                // 显示颜色
                color: function (params) {
                  if (params.name === '写字楼') {
                    return '#339AF8'
                  } else if (params.name === '停车场') {
                    return '#F8B551'
                  } else if (params.name === '飞机场') {
                    return '#ACD598'
                  } else if (params.name === '黄花机场') {
                    return '#FC5659'
                  } else {
                    return '#D2D2D2'
                  }
                },
                label: {
                  formatter: '{b|{b}}\n{d|{d}%}}',
                  rich: {
                    b: {
                      fontSize: 28,
                      align: 'left',
                      padding: [4, 0],
                      color: '#666666'
                    },
                    d: {
                      fontSize: 28,
                      align: 'center',
                      padding: [4, 0],
                      color: '#666666'
                    },
                    hr: {
                      borderColor: '#d2d2d2',
                      width: '100%',
                      borderWidth: 10,
                      height: 0
                    },
                    c: {
                      fontSize: 28,
                      align: 'center',
                      padding: 4,
                      color: '#666666'
                    }
                  }
                }
              }
            },
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              {value: 1562, name: '停车场'},
              {value: 2457, name: '写字楼'},
              {value: 28, name: '飞机场'},
              {value: 1500, name: '黄花机场'},
              {value: 872, name: '其他'}
            ]
          }
        ]
      }
      // this.chartList.forEach((v, index) => {
      //   let dom = v.id
      //   this.drawLine(dom, option)
      // })
    },
    // 收缴率
    setChart1 () {
      this.option1 = {
        title: {
        // subtext: '价格/月份'
        },
    tooltip: {
        show: false
        // trigger: 'axis'
    },
    legend: {
          icon: 'pin',
          width: 1500,
          left: 'right',
          textStyle: {
            fontSize: 25,
            padding: [0, 50, 0, 0]
          }
        },
    toolbox: {
        show: false,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisTick: {
            show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 3,
              color: '#E5E5E5'
          }
        },
        axisLabel: {
            color: '#000000',
            fontSize: 25
        }
    },
    yAxis: {
        name: '价格/月份',
        nameTextStyle: {
            color: '#000000',
            fontSize: 25,
            padding: [0, 0, 15, 0]
        },
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 3,
              color: '#E5E5E5'
          }
        },
        show: true,
        axisLabel: {
            color: '#000000',
            formatter: '{value}',
            fontSize: 25
        },
        splitLine: {
            show: false,
            lineStyle: {
              color: '#57617B'
            }
          }
    },
    series: [
        {
            name: '2020年',
            smooth: true,
            type: 'line',
            symbol: 'none',
            data: [100, 200, 300, 500, 500, 400, 500, 400, 200, 300, 100, 400],
            lineStyle: {
                normal: {
                  width: 5,
                  color: '#339AF8',
                  opacity: 0.9
                }
            },
            areaStyle: {
                normal: {
                  // 阴影设置
                  color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#4788FD' },
                    { offset: 0.3, color: '#4788FD' },
                    { offset: 1, color: '#fff' }
                  ])
                }
              }
        },
        {
            name: '2019年 ',
            smooth: true,
            type: 'line',
            symbol: 'none',
            data: [300, 256, 406, 530, 510, 520, 444, 400, 510, 400, 350, 200],
            lineStyle: {
                normal: {
                  width: 5,
                  color: '#339AF8',
                  opacity: 0.9
                }
            }
        }
    ]
        // legend: {
        //   icon: 'pin',
        //   width: 800,
        //   left: 'right'
        // },
        // tooltip: {
        //   backgroundColor: '#fff',
        //   textStyle: {
        //     color: '#F8B551',
        //     fontSize: 12
        //   },
        //   trigger: 'axis',
        //   // hover 坐标轴指示器
        //   axisPointer: {
        //     // label: 'cross',
        //     show: true,
        //     lineStyle: {
        //       color: '#F7B310'
        //     }
        //   }
        // },
        // // formatter: '欠款金额 ：123 <br/> 收缴率：{c0}‰<br/>',
        // grid: {
        //   y: 45,
        //   x2: 20,
        //   left: '10',
        //   right: '10',
        //   bottom: '0',
        //   top: '25%',
        //   containLabel: true
        // },
        // xAxis: [
        //   {
        //     type: 'category',
        //     name: '月',
        //     boundaryGap: false,
        //     axisLine: {
        //       lineStyle: {
        //         color: '#0E2A43'
        //       }
        //     },
        //     splitLine: {
        //       show: false
        //     },
        //     axisLabel: {
        //       interval: 0,
        //       margin: 5,
        //       textStyle: {
        //         fontSize: 12,
        //         color: '#666666'
        //       }
        //     },
        //     axisTick: {
        //       show: false
        //     },
        //     data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        //   }, {
        //     axisPointer: {
        //       show: false
        //     },
        //     axisLine: {
        //       lineStyle: {
        //         color: '#0E2A43'
        //       }
        //     },
        //     axisTick: {
        //       show: false
        //     },
        //     position: 'bottom',
        //     offset: 20
        //   }],
        // yAxis: [{
        //   x: 'center',
        //   type: 'value',
        //   name: '价格/月份',
        //   axisTick: {
        //     show: false
        //   },
        //   axisLine: {
        //     lineStyle: {
        //       color: '#0E2A43'
        //     }
        //   },
        //   axisLabel: {
        //     margin: 10,
        //     formatter: '{value}',
        //     textStyle: {
        //       fontSize: 12,
        //       color: '#666666'
        //     }
        //   },
        //   splitLine: {
        //     show: false,
        //     lineStyle: {
        //       color: '#57617B'
        //     }
        //   }
        // }],
        // series: [{
        //   formatter: function (params) {
        //     console.log(params.seriesName)
        //     // return params[0].seriesName + '年'
        // },
        //   name: '移动',
        //   type: 'line',
        //   smooth: true,
        //   stack: '总量',
        //   symbol: 'circle',
        //   symbolSize: 3,
        //   showSymbol: false,
        //   animationDelay: 500,
        //   // animationDuration: 500,
        //   min: 0,
        //   max: 100,
        //   data: [32, 34, 39, 35, 38, 36, 34, 10, 40, 80, 50, 150],
        //   // markPoint: {
        //   //   symbolSize: 30,
        //   //   // symbol: 'image://url',
        //   //   data: [
        //   //     {type: 'max', name: '最大值'}
        //   //   ],
        //   //   animationDelay: 3000,
        //   //   animationDuration: 1000
        //   // },
        //   lineStyle: {
        //     normal: {
        //       width: 2,
        //       color: '#339AF8',
        //       opacity: 0.9
        //     }
        //   },
        //   itemStyle: {
        //     color: '#4788FD',
        //     borderWidth: 6
        //   },
        //   areaStyle: {
        //     normal: {
        //       // 阴影设置
        //       color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //         { offset: 0, color: '#4788FD' },
        //         { offset: 0.4, color: '#4788FD' },
        //         { offset: 1, color: '#fff' }
        //       ])
        //     }
        //   }
        // }, {
        //   name: '移动2',
        //   type: 'line',
        //   smooth: true,
        //   stack: '总量',
        //   symbol: 'circle',
        //   symbolSize: 3,
        //   showSymbol: false,
        //   animationDelay: 500,
        //   // animationDuration: 1000,
        //   min: 0,
        //   max: 100,
        //   data: [15, 93, 86, 45, 69, 15, 25, 30, 35, 40, 45, 50],
        //   // markPoint: {
        //   //   symbolSize: 30,
        //   //   // symbol: 'image://url',
        //   //   data: [
        //   //     {type: 'max', name: '最大值'}
        //   //   ],
        //   //   animationDelay: 3000,
        //   //   animationDuration: 1000
        //   // },
        //   lineStyle: {
        //     normal: {
        //       width: 5,
        //       color: '#339AF8',
        //       opacity: 0.9
        //     }
        //   },
        //   itemStyle: {
        //     color: '#4788FD',
        //     borderWidth: 6
        //   }
        //   // areaStyle: {
        //   //   normal: {
        //   //     // 阴影设置
        //   //     color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   //       { offset: 0, color: '#4788FD' },
        //   //       { offset: 0.4, color: '#4788FD' },
        //   //       { offset: 1, color: '#fff' }
        //   //     ])
        //   //   }
        //   // }
        // } ]
      }
    },
    // // 续租率
    setChart2 () {
      // let dom = 'myChart'
      var data = [
    {
        name: '装备制造',
        value: 54,
        type: '份',
        number: 1800
    }, {
        name: '现代材料',
        value: 44,
        type: '份',
        number: 3900
    }, {
        name: '新能源',
        value: 35,
        type: 'm²',
        number: 9990
    }, {
        name: '新能源',
        value: 80,
        type: 'm²',
        number: 9990
    }]
    var dataArray = []
dataArray.push({ id: 'sqjjhz', name: '社区居家照护', value: 1100, zs: 1578, colora: '#1db0d2', colorb: '#01438b', color: ['#1c80d5', '#2ed3dd'] })
 var data1 = [
    { value: dataArray[0].value, name: '占' },
    { value: dataArray[0].zs - dataArray[0].value, name: '不占' }]
        // var data1_1 = [{ value: dataArray[0].zs , name: '占' },
        // { value: 0, name: '不占' }]

            data1.push({ value: dataArray[0].zs,
            name: '__other',
            itemStyle: { normal: { color: 'rgba(0,0,0,0)' } } })

var seriesData = []
var titleData = []
  data.forEach(function (item, index) {
    titleData.push({
        value: item.value,
        text: data[index].value + '%',
        left: index % 2 === 0 ? 25 * 1 + '%' : 37 * 2 + '%',
        itemGap: 16,
        top: index < 2 ? 30 + '%' : 70 + '%',
        textAlign: 'center',
        textStyle: {
            fontSize: '19',
            color: '#000',
            fontWeight: '400'
        },
        subtext: '到期合同份数 : ' + item.number + item.type,
        subtextStyle: {
            // x:'80%',
            fontSize: 16
        }
    })
    seriesData.push({
        startAngle: -180,
        type: 'pie',
        radius: ['35%', '45%'],
        center: [index % 2 === 0 ? 25 * 1 + '%' : 37 * 2 + '%', index < 2 ? 35 + '%' : 75 + '%'],
        data: data1
        })
})
// let value = data.value || 0
      this.option2 = {
        backgroundColor: '#fff',
    title: titleData,
    series: seriesData
      }
      // this.chartList.forEach((v, index) => {
      //   let dom = v.id
      //   this.drawLine(dom, option)
      // })
    },
    // 合同租金单价趋势图
    setChart3 () {
      this.option3 = {
    //      toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         magicType: {show: true, type: ['line', 'bar']},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
   legend: {
          icon: 'pin',
          width: 800,
          left: 'right'
        },
    xAxis:
        {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            axisPointer: {
                type: 'shadow'
            },
            axisTick: {
                show: false
            }
        },
    yAxis: [
        {
            type: 'value',
            name: '单价/月份',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            },
            splitLine: {
                // show: false
            },
            axisTick: {
                show: false
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            },
            splitLine: {
                // show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            itemStyle: {
                // symbolSize: 5
            },
            barWidth: '30'
        },
        {
            symbol: 'circle',
            symbolSize: 10,
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
      }
    },
    // 预算完成率
    setChart4 () {
      var chartName = ['2015', '2016', '2017']
      var labelName = ['流动比率', '速动比率']
      var labelSetting = {
          normal: {
            formatter: function (params) {
              return params.value + '年'
            },
              show: true,
              position: 'right',
              color: '#000',
              // offset: [0, 0],//偏移
              textStyle: {
                  fontSize: 16
              }
          }
      }
      this.option4 = {
        title: {
      },
    legend: {
        itemWidth: 18,
        itemHeight: 18,
        icon: 'rect',
        data: labelName,
        left: 'center',
        right: '66%',
        bottom: '5%'
    },
    grid: {
        containLabel: true,
        left: 25
    },
    yAxis: {
        data: chartName,
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                fontSize: 16
            }
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: labelName[0],
        type: 'bar',
        barWidth: '10%',
        label: labelSetting,
        barCategoryGap: '40%',
        data: [{
            value: 22.73
        }, {
            value: 34
        }, {
            value: 62.43
        }, {}]
    }, {
        name: labelName[1],
        type: 'bar',
        barGap: '0%',
        label: labelSetting,
        barWidth: '10%',
        data: [{
            value: 23.31
        }, {
            value: 46
        }, {
            value: 90.07
        }, {}]
    }]
      }
    },
    // 有效租金单价
    setChart5 () {
      var data = [
    {
        name: '装备制造',
        value: 80
    }, {
        name: '现代材料',
        value: 90
    }, {
        name: '新能源',
        value: 95
    }]

var seriesData = []
var titleData = []
data.forEach(function (item, index) {
    titleData.push({
        // name: data[index].value + 'M',
        value: item.value,
        text: data[index].value + '%',
        left: index === 0 ? [18 * (index + 1)] + '%' : index === 1 ? [25 * (index + 1)] + '%' : [27 * (index + 1)] + '%',
        itemGap: 95,
        top: '38%',
        textAlign: 'center',
        textStyle: {
            fontSize: '19',
            color: '#000',
            fontWeight: '400'
        },
        subtext: '5192M\n\n\n深圳区域',
        subtextStyle: {
        }
    })
    // console.log(index)
    seriesData.push({
            type: 'pie',
            radius: ['50', '100'],
            center: [index === 0 ? [18 * (index + 1)] + '%' : index === 1 ? [25 * (index + 1)] + '%' : [27 * (index + 1)] + '%', '40%'],
            data: [{
                    labelLine: {show: false},
                    value: item.value,
                    name: data.text,
                    itemStyle: {
                        normal: {
                            // borderWidth: 5,
                            // borderColor: "#000"
                            // color: '#FFF',
                        }
                    }
                }, {
                    value: 100 - item.value,
                    name: data.text,
                    itemStyle: {
                        normal: {
                            color: '#FFF'
                        }
                    }
                }
            ]
        })
})
// var value = data.value || 0
      this.option5 = {
        backgroundColor: '#fff',
        title: titleData,
        series: seriesData
      }
    }
  }
}
</script>

<style scoped>
  .Collection_Flist{
    width: 100%;
    display: flex;
    justify-content: baseline;
    margin-top: 40px;
  }
  .Collection_Fitem{
    width: 400px;
    height: 200px;
    text-align: center;
  }
  .Collection_Fitem_span1{
    font-size: 38px;
    display: block;
    font-weight: 700;
  }
  .Collection_Fitem_span2{
    font-size: 24px;
    display: block;
  }
  .drap_dowm{
    transform: rotate(-90deg)
  }
  .icon_right{
    float:right;
    width: 25px;
    margin-right: 15px;
  }
  .item_Nav{
    margin-left: 15px;
  }
  .item_Nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .right{
    /* width: 65%; */
    /* display:none */
  }
  .list_item{
    background-color: white;
      margin: 28px 28px;
      /* width: 392px; */
      /* height: 429px; */
      overflow: hidden;
  }
    .table div.table-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.1rem 1.5rem;
    border-bottom: 1px solid #eee;
  }
  .table div.table-title p{
    font-weight: bold;
    font-size: 16px;
    color: #2d80cc;
    margin-bottom: 0;
  }
  .icon-2 span {
    font-size: 12px!important;
  }
  .icon {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icon span {
    font-size: 0.6rem!important;
  }
  .main_list{
    width: 100%;
    background-color: #F2F6F8
  }
  .item_button{
    font-size: 36px;
    font-weight: 600;
    line-height: 105px;
    color: #66A1D9;
    font-family: PangMenZhengDao Regular, PangMenZhengDao Regular-Regular;
  }
  .header{
    width: 100%;
    height: 128px;
    background-color: #2D80CC;
    color: white;
    /* text-align: center; */
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
