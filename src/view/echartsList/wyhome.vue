<template>
    <div class='home-root'>
		<div class='header' v-if='show'>
			<!-- <div></div> -->
			<img class='img' src='../../assets/png/1610607009.jpg' />
      <div class="mains" style="">
        <div class='left_title item'>
        	<span>居住人数：</span><span class='num_item'>37,583</span>
        	<span>访客人数：</span><span class='num_item'>794,258</span>
        	<span>车辆数：</span>
          <span class='num_item'>4,258</span>
        </div>
        <div class="content_ss"></div>
        <div class='right_title item'>
        	<span>项目数：</span><span class='num_item'>21</span><span style="color: #fff;">个</span>
        	<span>住宅项目：</span><span class='num_item'>18</span><span style="color: #fff;">个</span>
        	<span>园区项目：</span>
          <span class='num_item'>3</span><span style="color: #fff;">个</span>
        </div>
      </div>
		</div>
		<div class='main' v-if='show'>
			<div class='card_colems' style="width: 25%;">
				<div class='card_item'>
					<img style='float: right; position: absolute;z-index: 0;' src='../../assets/png/1610607471.jpg' />
					<div class='card_title'>今  日 工 单 数</div>
					<div class='card_headline'>
						<!-- {{data1.content}} -->
						<ICountUp
							:endVal="endVal"
							:options="options"
							@ready="onReady"
						/>
						<img src='../../assets/png/图片5.png' />
					</div>
					<div class='item1_content' style='z-index: 20;'>
						<div class='item'>
							<img src='../../assets/png/1610676135.jpg' />
							<div>
								<span>{{data1.str1}}</span>
								<div>今日未完成</div>
							</div>
						</div>
						<div class='item'>
							<img src='../../assets/png/1610676154.jpg' />
							<div>
								<span>{{data1.str2}}</span>
								<div>今日已完成</div>
							</div>
						</div>
						<div class='item'>
							<img src='../../assets/png/1610676184.jpg' />
							<div>
								<span>{{data1.str3}}</span>
								<div>今日投诉单</div>
							</div>
						</div>
					</div>
				</div>
				<div class='card_item'>
          <div class='item_title'>本 月 设 备 故 障 分 类</div>
					<img style='float: right; position: absolute;z-index: 0;' src='../../assets/png/1610607471.jpg' />
					<img class="falseimg" src='../../assets/png/2021_1_18.png' />
				</div>
				<div class='card_item'>
					<div class='card_title'>物 业 人 员 到 岗</div>
					<img style='float: right;' src='../../assets/png/1610607471.jpg' />
					<linegraph :data="option3" id="myChart4" style="z-index:50;width: 90%;height: 96%;position:absolute;left: 50%;transform: translateX(-50%);}"></linegraph>
				</div>
			</div>
			<div class='card_colems' style="width: 48%;">
				<div class='card_content' @click='show=!show'>
          <div class="item_title">项 目 分 布</div>
					<img style='margin: auto;' src='../../assets/png/微信图片_20210126101111.png' />
				</div>
				<div class='card_item' style="margin-top: 9px;">
          <div class='item_title'>客 户 服 务 指 标</div>
					<img style='float: right; position: absolute;z-index: 0;' src='../../assets/png/1610607471.jpg' />
          <linegraph :data="option4" id="myChart6" style="z-index:50;width: 90%;height: 96%;position:absolute;left: 50%;transform: translateX(-50%);}"></linegraph>

					<!-- <img class="falseimg" style="width: 90%;height: 38%;bottom: 20%;" src='../../assets/png/2021_1_18_10-49.png' /> -->
				</div>
			</div>
			<div class='card_colems' style="width: 25%;">
				<div class='card_item'>
					<div class="item_title">
						各 项 目 工 单 统 计（Top 5）
					</div>
					<img style='float: right; position: absolute;z-index: 0;' src='../../assets/png/1610607471.jpg' />
					<div class="right_item_content">
						<span>38153</span>
						任务总数
						<div class="sss"></div>
						<span>96.97%</span>
						任务完成率
					</div>
					<linegraph :data="option6" id="myChart1" style="z-index:50;width: 90%;height: 96%;position:absolute;left: 50%;transform: translateX(-50%);}"></linegraph>
				</div>
				<div class='card_item'>
					<!-- <img src='../../assets/png/1610612264.jpg' /> -->
					<div class='card_item'>
						<div class="item_title">
							各 项 目 维 保 任 务（Top 5）
						</div>
						<img style='float: right; position: absolute;z-index: 0;' src='../../assets/png/1610607471.jpg' />
						<div class="right_item_content">
							<span>2429</span>
							任务总数
							<div class="sss"></div>
							<span>96.87%</span>
							任务完成率
						</div>
						<linegraph :data="option6" id="myChart2" style="z-index:50;width: 90%;height: 96%;position:absolute;left: 50%;transform: translateX(-50%);}"></linegraph>
					</div>
				</div>
				<div class='card_item'>
					<!-- <img src='../../assets/png/1610612317.jpg' /> -->
					<div class='card_item'>
						<div class="item_title">
							各 项 目 巡 检 任 务（Top 5）
						</div>
						<img style='float: right; position: absolute;z-index: 0;' src='../../assets/png/1610607471.jpg' />
						<div class="right_item_content">
							<span>27376</span>
							任务总数
							<div class="sss"></div>
							<span>96.83%</span>
							任务完成率
						</div>
						<linegraph :data="option6" id="myChart3" style="z-index:50;width: 90%;height: 96%;position:absolute;left: 50%;transform: translateX(-50%);}"></linegraph>
					</div>
				</div>
			</div>
		</div>
		<div class='content' v-else>
      <div style="width: 100%;height: 55px;">
        	<div style="    display: flex;
        height: 35px;
        color: rgb(255, 255, 255);
        top: 0px;
        left: 0px;
        z-index: 99;
        padding: 10px;
        border: 1px solid #033143;
        cursor: pointer;
        align-items: center;
        background: #010C12;
        border-radius: 9px;
        margin: 10px;
        width: 69px;
        justify-content: center;
        margin-top: 15px;" @click="show=true">返回</div>
      </div>
			<div class='card_colems'>
				<div class='card_item1'>
					<div class='card_title'>碧 云 别 墅 银 杏 苑</div>
					<img src="../../assets/png/微信图片_20210125210018.png" />
				</div>
			</div>
			<div class='card_colems' style='display: flex;'>
				<div class='card_item2'>
					<div class='card_title'>今日工单数</div>
					<div class='card_content'>
						<div class='card_top'>394<span>个</span></div>
						<div class='card_bottom'>20<img style="width: 24px;height: 30px;" src="../../assets/png/图片5.png" />
            2021-1-13</div>
					</div>
				</div>
				<div class='card_item2'>
					<div class='card_title'>今日上岗人数</div>
					<div class='card_content'>
						<div class='card_top'>17<span>人</span></div>
						<div class='card_bottom'><span></span></div>
					</div>
				</div>
				<div class='card_item3'>
					<div class='card_title'>今 日 重 点 事 件</div>
					<ul>
						<li>201房被盗，窗户损毁，业主不在家</li>
						<li>C栋大堂发生斗殴事件，已报案</li>
						<li>车牌沪C H1324 在停车场发生刮蹭</li>
					</ul>
				</div>
			</div>
			<div class='card_colems' style='display: flex;'>
				<div class='card_item2'>
					<div class='card_title'>今日巡检任务完成率</div>
					<div class='card_content'>
						<div class='card_top'>98.4<span>%</span></div>
						<div class='card_bottom'></div>
					</div>
				</div>
				<div class='card_item2'>
					<div class='card_title'>社区人员情况</div>
					<div class='card_content'>
						<div class='card_top'>316<span>人</span></div>
						<div class='card_bottom'><span>已出租户数：169</span></div>
					</div>
				</div>
				<div class='card_item3'>
					<div class='card_title'>本 月 维 保 任 务 完 成 情 况</div>
					<img src='../../assets/png/1610673411.jpg' />
				</div>
			</div>
			<div class='card_colems2'>
				<div class='card_title'>本 月 客 户 服 务 指 标</div>
        <div class="img2">
          <img class="" src='../../assets/png/sf1.png' />
          <span>响应速度</span>
          <img class="" src='../../assets/png/sf2.png' />
          <span>服务态度</span>
          <img class="" src='../../assets/png/sf3.png' />
          <span>问题解决</span>
        </div>
				<img class="img1" src='../../assets/png/微信图片_20210120005617.png' />
			</div>
			<div class='card_colems3'>
				<div class='card_title'>本 月 设 备 故 障 情 况</div>
				<img src='../../assets/png/图片1.png' />
			</div>
			<div class='card_colems3'>
				<div class='card_title'>月 度 工 单 数 量 同 环 比</div>
				<img src='../../assets/png/图片2.png' />
			</div>
			<div class='card_colems3'>
				<div class='card_title'>月 度 投 诉 数 量 同 环 比</div>
				<img src='../../assets/png/s2.png' />
			</div>
			<div class='card_colems3'>
				<div class='card_title'>月 度 上 岗 人 数 同 环 比</div>
				<img src='../../assets/png/图片3.png' />
			</div>
		</div>
	</div>
</template>

<script>
// import {EleResize} from '../../assets/js/commen'
// import contentL from '../../components/ad/Ad'
import ICountUp from 'vue-countup-v2'
import linegraph from '../../components/echart/circle'
import echarts from 'echarts'
// import {reqhomeiconList, reqinfoList, reqwarninglist, reqechartsList, reqLogin} from '../../api/index'
export default {
        name: 'home',
        components: {
			linegraph,
			ICountUp
        },
        data () {
			return {
				endVal: 1000,
				options: {
				  useEasing: true,
				  useGrouping: true,
				  separator: ',',
				  decimal: '.',
				  prefix: '',
				  suffix: ''
				},
				data1:{
					content:2306,
					str1:300,
					str2:680,
					str3:20,
				},
				show: true,
				// image1: require('../../assets/images/icon/jiantou.png')
				option1: {},
				option2: {},
				option3: {},
				option4: {},
				option5: {},
				option6: {},
				option7: {},
				option8: {},
				option9: {},
				option10: {},
				option11: {}
			}
		},
		watch: {},
		created () {
      console.log(window.screen.width,'屏幕宽')
			this.sethandle1(1)
			this.sethandle1(2)
			this.sethandle1(3)
			setInterval(() => {
				// console.log(Math.floor(Math.random() * 3 + 1))
				this.sethandle1(Math.floor(Math.random() * 3 + 1))
			},Math.floor((Math.random()*10000)+10000))
			// this.getList()
			// this.setChart()
			// this.setChart1()
			// this.setChart2()
			this.setChart3()
			this.setChart4()
			// this.setChart5()
			this.setChart6()
			// this.setChart7()
			// this.setChart8()
			// this.setChart9()
			// this.setChart10()
		},
		methods: {
      goscreen(){
        window.open("http://szy-test.hnlyo.com:12888/vuepage/wyhome")
      },
			onReady (instance, CountUp) {
				const that = this;
				instance.update(this.data1.str1 + this.data1.str2 + this.data1.str3);
			},
			sethandle1 (value) {
				console.log(value)
				this.endVal = this.data1.str1 + this.data1.str2 + this.data1.str3
				let num1 = this.data1['str'+value] + Math.floor(Math.random()*51)+10
				this.data1['str'+value] = 0
				let settime = setInterval(() => {
					if (this.data1['str'+value] < num1) {
						this.data1['str'+value] = this.data1['str'+value] + Math.floor(num1 / 10)
					} else {
						window.clearInterval(settime)
					}
				},80)
			},
			setChart3 () {
				this.option3 = {
				    tooltip: {
				        trigger: 'axis',
				        show: false,
				        axisPointer: { // 坐标轴指示器，坐标轴触发有效
				            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				        },
				    },
				    legend: {
						show:false,
				        selectedMode: false,
				    },
				    grid: {
						top:'30%',
				        left: '3%',
				        right: '8%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis: [{
				        splitLine: {
				            show: false
				        },
				        type: 'value',
				        show: true,
				        axisLabel: {
				            textStyle: {
				                color: '#7F7F7F',
				                fontSize: 12
				            }
				        },
				    }],
				    yAxis: [{
				        splitLine: {
				            show: false
				        },
				        axisLine: { //y轴
				            show: false
				        },
				        type: 'category',
				        axisTick: {
				            show: false
				        },
				        axisLabel: {
				            textStyle: {
				                color: '#7F7F7F',
				                fontSize: 12
				            }
				        },
				        data: ['碧云别墅银杏苑', '碧云花园', '钻石碧云苑', '中环碧云庭', '由家人才公寓'],
				    }],
				    series: [{
				        name: '标准化',
				        type: 'bar',
				        barWidth: 10, // 柱子宽度
				        label: {
				            show: true,
				            position: 'right', // 位置
				            color: '#fff',
				            fontSize: 14,
				            fontWeight: 'bold', // 加粗
				            distance: 5 // 距离
				        }, // 柱子上方的数值
				        itemStyle: {
				            barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
				            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
				                '#2D59F3', '#56F7FF'
				            ].map((color, offset) => ({
				                color,
				                offset
				            }))), // 渐变
				        },
				        data: [28, 21, 18, 15, 10]
				    }, ]
				};
			},
      setChart4 () {
          var data = [
          {
              name: '服务回访满意',
              name2: '5.0分',
              value: 80.5,
              size: '5.0分',
          }, {
              name: '响应及时率',
              name2: '98'+'.'+'5%',
              value: 43,
              size: '98.5%'
          }, {
              name: '关闭率',
              name2: '57'+'.'+'3%',
              value: 65,
              size: '57.3%'
          }]
            var seriesData = []
            var titleData = []
            data.forEach((item, index) => {
              titleData.push({
                value: item.value,
                // text: data[index].value + '%',
                left: index === 0 ? [17 * (index + 1)] + '%' : index === 1 ? [24.5 * (index + 1)] + '%' : [27 * (index + 1)] + '%',
                itemGap: 0,
                top: '42%',
                textAlign: 'center',
                textStyle: {
                  fontSize: '16',
                  color: '#000',
                  fontWeight: '400'
                }
              }, {
                text: `{b_title|${item.name2}}\n{b_unit|${item.name}}`,
                // text: item.name2+'\n'+item.name,
                left: index === 0 ? [17 * (index + 1)] + '%' : index === 1 ? [24.5 * (index + 1)] + '%' : [27 * (index + 1)] + '%',
                itemGap: 0,
                top: '45%',
                textAlign: 'center',
                textStyle: {
                  rich: {
                      b_title: {
                        fontSize: 14,
                        padding: [5, 0, 0, 0],
                        color: '#fff'
                      },
                      b_unit: {
                        fontSize: 12,
                        padding: [10, 0, 0, 0],
                        color: '#fff'
                      }
                    }
                }
              })
            var getRandomColor = function () {
              return '#' + Math.floor(Math.random() * 16777215).toString(16)
            }
            // 生成随机色
            seriesData.push({
                hoverAnimation: false,
                type: 'pie',
                radius: ['40%', '46%'],
                center: [index === 0 ? [18 * (index + 1)] + '%' : index === 1 ? [25 * (index + 1)] + '%' : [27.5 * (index + 1)] + '%', '54%'],
                data: [{
                        labelLine: {show: false},
                        value: item.value,
                        name: data.text,
                        itemStyle: {
                            normal: {
                                 borderWidth: 9,
                                borderColor: {colorStops: [{
                                                  offset: 0,
                                                  color: '#' + 'FEF594' // 0% 处的颜色
                                              }, {
                                                  offset: 1,
                                                  color: '#' + '70F1CD' // 100% 处的颜色1
                                              }]}
                                // color: '#fff'
                            }
                        }
                    }, {
                        value: 100 - item.value,
                        name: data.text,
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        }
                    }
                ]
            })
          })
          titleData.push({
            text: '',
            textStyle: {
              fontSize: 18,
              color: '#2D80CC'
            }
          })
          this.option4 = {
            title: titleData,
            series: seriesData
          }
      },
			setChart6 () {
				this.option6 = {
					// backgroundColor: transparent,
					    tooltip: {
							backgroundColor:'#000',
					        trigger: 'axis',
					        axisPointer: {
					            type: 'shadow',
					            label: {
					                show: true
					            }
					        },
					    },
					    grid: {
					        // left: '8%',
					        top: '50%',
					        right: '15%',
                  left:'15%',
					        bottom: '12%'
					    },
					    legend: {
                itemGap :12,
                type:'scroll',
					        data: ['按时完成', '逾期完成', '待完成','过期未完成','任务完成率'],
					        top: '35%',
                  left:0,
                  icon: 'circle',
					        textStyle: {
					            color: '#1FC3CE',
					            fontSize: 10,
					        },
                    itemWidth:10,
					    },
					    xAxis: {
                nameTextStyle:{
                  padding:100,
                  width:100
                },
                      // offset:20,
                // nameRotate:'30',
					        data: [
					            '碧云别墅银杏苑',
                      '碧云花园',
                      '钻石碧云苑',
                      '中环碧云庭',
                      '由家人才公寓'
					        ],
					        axisLine: {
					            show: true,
					            lineStyle: {
					                color: '#3d5269',
					                width: 1
					            }
					        },
					        axisTick: {
					            show: true,
					            alignWithLabel: true
					        },
					        axisLabel: {
					            show: true,
					            textStyle: {
					                color: '#396A87',
					                fontSize: 8
					            },
					            interval: 0,
					        }
					    },
					    yAxis: [{
					            type: 'value',
					            name: '',
					            nameTextStyle: {
					                color: '#396A87',
					                fontSize: 14
					            },
					            splitLine: {
					                show: true,
					                lineStyle: {
					                    width: 1,
					                    color: '#3d5269'
					                }
					            },
					            axisTick: {
					                show: false
					            },
					            axisLine: {
					                show: false
					            },
					            axisLabel: {
					                show: true,
					                textStyle: {
					                    color: '#396A87',
					                    fontSize: 14
					                }
					            }
					        },
					        {
					            type: 'value',
					            name: '',
					            nameTextStyle: {
					                color: '#396A87',
					                fontSize: 14
					            },
					            position: 'right',
					            splitLine: {
					                show: false
					            },
					            axisTick: {
					                show: false
					            },
					            axisLine: {
					                show: false,
					                lineStyle: {
					                    color: '#396A87',
					                    width: 2
					                }
					            },
					            axisLabel: {
					                show: true,
					                formatter: '{value} %',
					                textStyle: {
					                    color: '#396A87',
					                    fontSize: 14
					                }
					            }
					        }
					    ],
					    series: [{
					            name: '按时完成',
					            type: 'bar',
					            barWidth: 10,
					            itemStyle: {
					                normal: {
					                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                            offset: 0,
					                            color: '#00FFFF'
					                        },
					                        {
					                            offset: 1,
					                            color: '#0080FF'
					                        }
					                    ])
					                }
					            },
					            data: [2400, 4500, 4003, 3500, 7600]
					        },
					        {
					            name: '逾期完成',
					            type: 'bar',
					            barWidth: 10,
					            itemStyle: {
					                normal: {
					                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                            offset: 0,
					                            color: '#1EC3FF'
					                        },
					                        {
					                            offset: 1,
					                            color: '#1EC3FF'
					                        }
					                    ])
					                }
					            },
					            data: [133, 23, 114, 67, 89]
					        },{
					            name: '待完成',
					            type: 'bar',
					            barWidth: 10,
					            itemStyle: {
					                normal: {
					                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                            offset: 0,
					                            color: '#A6FFE0'
					                        },
					                        {
					                            offset: 1,
					                            color: '#A6FFE0'
					                        }
					                    ])
					                }
					            },
					            data: [133, 23, 114, 67, 89]
					        },{
					            name: '过期未完成',
					            type: 'bar',
					            barWidth: 10,
					            itemStyle: {
					                normal: {
					                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                            offset: 0,
					                            color: '#E29052'
					                        },
					                        {
					                            offset: 1,
					                            color: '#FA5A53'
					                        }
					                    ])
					                }
					            },
					            data: [133, 23, 114, 67, 89]
					        },
					        {
					            name: '任务完成率',
					            type: 'line',
					            yAxisIndex: 1,
					            showAllSymbol: true,
					            symbol: 'circle',
					            symbolSize: 6,
					            itemStyle: {
					                width: 2,
					                shadowBlur: 2,
									 normal:{
											shadowColor: '#02ECEE',
											color: '#26D9FF',
											borderColor: '#26D9FF',
											lineStyle:{
											width:2,
											type:'dotted'
										}
									}
					            },
					            lineStyle: {
					                color: '#26D9FF',
					                width: 2,
					                shadowBlur: 2
					            },
					            data: [42, 35, 29, 78, 20]
					        }
					    ]
				}
			}
		}
    }
</script>

<style lang='less' scoped>
	body,html{
		height: 100%;
	}
	.home-root {
		width: 100%;
		padding: 0 0 0px 0;
		box-sizing: border-box;
	}
  @media screen and (max-width: 1537px){
    .card_colems3{
      height: 185px !important;
    }
    .card_colems2{
      height: 185px !important;
    }
    .header{
      height: 80px !important;
      .img{
        width:1600px !important;
        margin-left: -160px !important;
      }
      .mains{
        width: 100% !important;
        margin-left: 0px !important;
        height: 100%;
        position: absolute;
        top: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        .content_ss{
          width: 640px !important;
        }
        .left_title{

        }
        .right_title{

        }
      }
    }
  }
  @media screen and (max-width: 1900px){
    .header{
      .img{
        width:1920px;
      }
      .mains{
        width: 1600px;
        margin-left: -160px;
        height: 100%;
        position: absolute;
        top: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
      .content_ss{
        width: 788px;
      }
      .left_title{

      }
      .right_title{

      }
      }
    }
  }
	.header{
		position:relative;
		.img{
			/* width: 1920px; */
			margin-left: -320px;
		}
        .left_title{
          font-size: 12px;
          margin-top: 30px;
          color: #fff;
        }
        .right_title{
          font-size: 12px;
          margin-top: 30px;
          color: #fff;
        }
		.item{
			.num_item{
				margin-right: 10px;
				color: #FFC000;
			}
		}
		width: 1280px;
		margin: auto;
		height: 100px;
	}
	.main{
		width: 100%;
		height: 100%;
		background-color: #010C12;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		.card_colems{
			width: 32.5%;
			margin-top: 10px;
			.card_item{
        .falseimg{
          width: 72%;
          height: 50%;
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
        }
				// background-image: url(../../assets/png/1610607471.jpg);
				margin-top: 15px;
				width: 100%;
				height: 250px;
				background-size: contain;
				background-repeat: no-repeat;
				position: relative;
				.right_item_content{
					display: flex;
					align-items: baseline;
					z-index: 0;
					top: 22%;
					position: absolute;
					color: #fff;
					left: 50%;
					transform: translateX(-50%);
					white-space:nowrap;
					.sss{
						width: 30px;
					}
					span{
						font-weight: 600;
						color: #fff;
						font-size: 18px !important;
					}
					color: #81858F;
					font-size: 13px;
				}
				.item_title{
          font-size: 14px;
					z-index: 10;
					top: 5%;
					position: absolute;
					color: #fff;
					left: 50%;
					transform: translateX(-50%);
				}
				.item1_content{
					padding-top: 145px;
					display: flex;
					justify-content: space-around;
					.item{
						z-index: 99;
							display: flex;
						>img{
							width: 55px;
						}
						>div{
							// display: flex;
							>span{
								color: #fff;
								font-weight: 600;
								font-size: 18px;
							}
							>div{
								color: #7F808B;
							}
						}
					}
				}
				.card_headline{
					font-size: 38px;
					position: absolute;
					left: 55%;
					top: 22%;
					transform: translateX(-50%);
					color: #fff;
					font-weight: 900;
					img{
						width: 28px;
						vertical-align: middle;
						margin-left: 20px;
					}
				}
				img{
					width: 100%;
          height: 100%;
				}
				.card_title{
          font-size: 14px;
					position: absolute;
					left: 50%;
					top: 6%;
					transform: translateX(-50%);
					color: #fff;
				}
			}
			.card_content{
				margin-top: 8px;
				width: 100%;
				height: 528px;
				background-image: url(../../assets/png/e1ab9d787fabddfa23f3fccf28cbc0b.png);
				// padding: 5px;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				position: relative;
        .item_title{
          background-color: #1D3753;
        	position: absolute;
        	left: 50%;
        	top: 3%;
        	transform: translateX(-50%);
        	color: #fff;
          font-size: 15px;
        }
				img{
					width: 97%;
          /* height: 90%; */
					position: absolute;
					margin: auto;
					left: 50%;
					top: 50%;
					transform: translateY(-45%) translateX(-50%);
				}
			}
		}
	}
	.content{
		padding-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
		background-color: #010C12;
		justify-content: space-around;
		.card_colems3{
			height: 300px;
			background-image: url(../../assets/png/1610674713.jpg);
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin-top: 10px;
			position: relative;
			width: 32.5%;
			.card_title{
					font-size: 14px;
				position: absolute;
				left: 50%;
				top: 9%;
				transform: translateX(-50%);
				color: #fff;
			}
			img{
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				width: 80%;
				bottom: 15%;
			}
		}
		.card_colems2{
			height: 300px;
			background-image: url(../../assets/png/1610674011.jpg);
			width: 66%;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin-top: 10px;
			position: relative;
			.card_title{
					font-size: 14px;
				position: absolute;
				left: 50%;
				top: 9%;
				transform: translateX(-50%);
				color: #fff;
			}
			.img1{
				position: absolute;
				left: 50%;
				transform: translateX(-50%) scaleX(1.2);
				height: 50%;
				bottom: 8%;
			}
			.img2{
        position: absolute;
        /* width: 149px; */
        /* height: 20px; */
        right: 12%;
        top: 30%;
        color: #fff;
        img{
          width: 20px;
        }
				/* left: 50%; */
				/* transform: translateX(-50%) scaleX(1.1); */
				/* height: 60%; */
				/* bottom: 8%; */
			}
		}
		.card_colems{
			width: 32.5%;
			margin-top: 15px;
			justify-content: space-between;
			flex-wrap: wrap;
			.card_item{
			}
			.card_item1{
				background-image: url(../../assets/png/1610617047.jpg);
				background-size: 100% 100%;
				background-repeat: no-repeat;
				height: 400px;
				position: relative;
				.card_title{
					font-size: 14px;
					position: absolute;
					left: 50%;
					top: 3%;
					transform: translateX(-50%);
					color: #fff;
				}
        img{
          width: 90%;
          height: 80%;
          margin: auto;
					position: absolute;
          bottom: 5%;
					left: 50%;
					transform: translateX(-50%);
        }
			}
			.card_item2{
				position: relative;
				background-image: url(../../assets/png/1610617518.jpg);
				background-size: 100% 100%;
				background-repeat: no-repeat;
				height: 200px;
				width: 49%;
				position: relative;
				.card_title{
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					top: 8%;
					font-weight: 900;
					font-size: 18px;
					color: #fff;
					white-space:nowrap;
				}
				.card_content{
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					top: 40%;
					color: #8A92D9;
					.card_top{
						font-size: 30px;
						span{
							margin-left: 20px;
						}
						margin-bottom: 20px;
					}
					.card_bottom{
					}
				}
			}
			.card_item2:nth-child(even){
				background-image: url(../../assets/png/1610617586.jpg);
        .card_content{
          color: #72F3FC !important;
        }
			}
			.card_item3{
				background-image: url(../../assets/png/1610618088.jpg);
				background-size: 100% 100%;
				background-repeat: no-repeat;
				height: 190px;
				width: 100%;
				position: relative;
				.card_title{
					position: absolute;
					left: 50%;
					top: 5%;
					transform: translateX(-50%);
					color: #fff;
					font-size: 14px;
				}
				img{
					// width: 100%;
					// height: 95%;
					position: absolute;
					left: 50%;
					top: 30%;
					transform: translateX(-50%);
				}
				ul{
					li{
						color: #7F7F7F;
						font-size: 13px;
					}
					position: absolute;
					// left: 50%;
					top: 30%;
					margin-left: 60px;
					// transform: translateX(-50%);
				}
			}
		}
	}
	.iCountUp {
	    font-size: 12em;
	    margin: 0;
	    color: #4d63bc;
	  }
    .Full_screen{
      width: 50px;
      position: fixed;
      top: 0px;
      right: 0px;
        z-index: 99999;
      img{
        width: 100%;
        height: 100%;
      }
    }
</style>
