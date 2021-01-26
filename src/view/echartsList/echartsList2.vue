<template>
  <div class="main">
    <!--顶部六个功能模块-->
    <div class="row" v-if="rowheaderlist!==undefined">
      <div v-for="(item,index) in rowheaderlist" :key='index' class="col-xs-2 col-sm-2 model">
        <div>
          <img :src="rowiconlist[index].imgurl" alt=""/>
          {{item.name}}
          <div></div>
        </div>
      </div>
    </div>
    <!--中间图表模块-->
    <!--如果是三个模块-->
      <div class="row mid-box" v-if="chartList.length===4">
        <div class="col-xs-4 col-sm-4 content-1" v-for="(item, index) in chartList" :key="index" >
          <div>
            <div class="title">
              <b>{{item.title}}</b>
              <h4 style="display: flex;flex-direction: row;align-items: center">
                {{item.percent}}
                <span>{{item.info}}</span>
                <div v-if="item.id===2||item.id===4" class="icon-2">
                  <img v-if='item.type===1' src="../../assets/images/icon/sz.png" alt="">
                  <img v-if='item.type===2' src="../../assets/images/icon/xj.png" alt="">
                  <span :style="item.type===1?'color: #2AC007':'color: #E9494D'">{{item.money}}%</span>
                  <span>相比上上月</span>
                </div>
                <div class="icon" v-if="item.id===3||item.id===5">
                  <img v-if='item.type === 2' src="../../assets/images/icon/honglvdeng_hong.png" alt="">
                  <img v-if='item.type === 1' src="../../assets/images/icon/honglvdeng_lv.png" alt="">
                  <span>{{item.money}} {{item.id===5?'万元':''}}</span>
                </div>
              </h4>
            </div>
            <linegraph v-if="item.id===1" :id="'myChart'" :data="option" :style="{width: '100%', height: '200px'}"></linegraph>
            <linegraph v-if="item.id===2" :id="'myChart1'" :data="option1" :style="{width: '100%', height: '200px'}"></linegraph>
            <linegraph v-if="item.id===3" :id="'myChart2'" :data="option2" :style="{width: '100%', height: '200px'}"></linegraph>
            <linegraph v-if="item.id===4" :id="'myChart3'" :data="option3" :style="{width: '100%', height: '200px'}"></linegraph>
            <linegraph v-if="item.id===5" :id="'myChart4'" :data="option4" :style="{width: '100%', height: '200px'}"></linegraph>
            <linegraph v-if="item.id===6" :id="'myChart5'" :data="option5" :style="{width: '100%', height: '200px'}"></linegraph>
          </div>
        </div>
      </div>
    <!--如果是四个模块-->
    <div class="row mid-box" v-if="chartList.length===4">
      <!--取数组前两条循环-->
      <div class="col-xs-4 col-sm-4 content-1" v-for="(item, index) in chartList2" :key="index">
        <div>
          <div class="title">
            <b>{{item.title}}</b>
            <h4 style="display: flex;flex-direction: row;align-items: center">
              {{item.percent}}
              <span>{{item.info}}</span>
              <div v-if="item.id===2||item.id===4" class="icon-2">
                <img v-if='item.type===1' src="../../assets/images/icon/sz.png" alt="">
                <img v-if='item.type===2' src="../../assets/images/icon/xj.png" alt="">
                <span :style="item.type===1?'color: #2AC007':'color: #E9494D'">{{item.money}}%</span>
                <span>相比上上月</span>
              </div>
              <div class="icon" v-if="item.id===3||item.id===5">
                <img v-if='item.type === 2' src="../../assets/images/icon/honglvdeng_hong.png" alt="">
                <img v-if='item.type === 1' src="../../assets/images/icon/honglvdeng_lv.png" alt="">
                <span>{{item.money}} {{item.id===5?'万元':''}}</span>
              </div>
            </h4>
          </div>
          <linegraph v-if="item.id===1" :id="'myChart'" :data="option" :style="{width: '100%', height: '200px'}"></linegraph>
          <linegraph v-if="item.id===2" :id="'myChart1'" :data="option1" :style="{width: '100%', height: '200px'}"></linegraph>
          <linegraph v-if="item.id===3" :id="'myChart2'" :data="option2" :style="{width: '100%', height: '200px'}"></linegraph>
          <linegraph v-if="item.id===4" :id="'myChart3'" :data="option3" :style="{width: '100%', height: '200px'}"></linegraph>
          <linegraph v-if="item.id===5" :id="'myChart4'" :data="option4" :style="{width: '100%', height: '200px'}"></linegraph>
          <linegraph v-if="item.id===6" :id="'myChart5'" :data="option5" :style="{width: '100%', height: '200px'}"></linegraph>
        </div>
      </div>
      <!--取数组后两条循环-->
      <div class="col-xs-4 col-sm-4 content-2">
        <div class="half-content" v-for="(item, index) in chartList3" :key="index">
          <div class="title-1">
            <b>{{item.title}}</b>
            <div class="bottom-title">
              <span>{{item.info}}</span>
              <h4>{{item.percent}} </h4>
              <div class="icon" v-if="item.id===3||item.id===5">
                <img v-if='item.type === 2' src="../../assets/images/icon/honglvdeng_hong.png" alt="">
                <img v-if='item.type === 1' src="../../assets/images/icon/honglvdeng_lv.png" alt="">
                <span>{{item.money}} {{item.id===5?'万元':''}}</span>
              </div>
              <div class="icon" v-if="item.id===2||item.id===4">
                <img v-if='item.type===1' src="../../assets/images/icon/sz.png" alt="">
                <img v-if='item.type===2' src="../../assets/images/icon/xj.png" alt="">
                <span :style="item.type===1?'color: #2AC007':'color: #E9494D'">{{item.money}}%</span>
                <span style="margin-left: 5px">相比上上月</span>
              </div>
            </div>
          </div>
          <div class="right">
            <linegraph v-if="item.id===1" :id="'myChart'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===2" :id="'myChart1'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===3" :id="'myChart2'" :data="option2" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===4" :id="'myChart3'" :data="option3" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===5" :id="'myChart4'" :data="option4" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===6" :id="'myChart5'" :data="option5" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
<!--        <div class="half-content">-->
<!--          <div class="title-1">-->
<!--            <b>有效租金单价</b>-->
<!--            <div class="bottom-title">-->
<!--              <span>在租合同 (元/日/㎡)</span>-->
<!--              <h4>800</h4>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="right">-->
<!--            <linegraph :id="'myChart5'" :data="option5" :style="{width: '100%', height: '100%'}"></linegraph>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
    <!--如果是五个模块-->
    <div class="row mid-box" v-if="chartList.length===5">
      <!--取数组前两条循环-->
          <div class="col-xs-4 col-sm-4 content-2">
            <div class="half-content" v-for="(item, index) in chartList2" :key="index">
              <div class="title-1">
                <b>{{item.title}}</b>
                <div class="bottom-title">
                  <span>{{item.info}}</span>
                  <h4>{{item.percent}} </h4>
                  <div class="icon" v-if="item.id===3||item.id===5">
                    <img v-if='item.type === 2' src="../../assets/images/icon/honglvdeng_hong.png" alt="">
                    <img v-if='item.type === 1' src="../../assets/images/icon/honglvdeng_lv.png" alt="">
                    <span>{{item.money}} {{item.id===5?'万元':''}}</span>
                  </div>
                  <div class="icon" v-if="item.id===2||item.id===4">
                    <img v-if='item.type===1' src="../../assets/images/icon/sz.png" alt="">
                    <img v-if='item.type===2' src="../../assets/images/icon/xj.png" alt="">
                    <span :style="item.type===1?'color: #2AC007':'color: #E9494D'">{{item.money}}%</span>
                    <span style="margin-left: 5px">相比上上月</span>
                  </div>
                </div>
              </div>
              <div class="right">
                <linegraph v-if="item.id===1" :id="'myChart'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
                <linegraph v-if="item.id===2" :id="'myChart1'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
                <linegraph v-if="item.id===3" :id="'myChart2'" :data="option2" :style="{width: '100%', height: '100%'}"></linegraph>
                <linegraph v-if="item.id===4" :id="'myChart3'" :data="option3" :style="{width: '100%', height: '100%'}"></linegraph>
                <linegraph v-if="item.id===5" :id="'myChart4'" :data="option4" :style="{width: '100%', height: '100%'}"></linegraph>
                <linegraph v-if="item.id===6" :id="'myChart5'" :data="option5" :style="{width: '100%', height: '100%'}"></linegraph>
              </div>
            </div>
          </div>
            <!--取数组中间那条-->
      <div class="col-xs-4 col-sm-4 content-1" v-for="(item, index) in chartList1" :key="index">
        <div>
          <div class="title">
            <b>{{item.title}}</b>
            <h4 style="display: flex;flex-direction: row;align-items: center">
              {{item.percent}}
              <span>{{item.info}}</span>
              <div v-if="item.id===2||item.id===4" class="icon-2">
                <img v-if='item.type===1' src="../../assets/images/icon/sz.png" alt="">
                <img v-if='item.type===2' src="../../assets/images/icon/xj.png" alt="">
                <span :style="item.type===1?'color: #2AC007':'color: #E9494D'">{{item.money}}%</span>
                <span>相比上上月</span>
              </div>
              <div class="icon" v-if="item.id===3||item.id===5">
                <img v-if='item.type === 2' src="../../assets/images/icon/honglvdeng_hong.png" alt="">
                <img v-if='item.type === 1' src="../../assets/images/icon/honglvdeng_lv.png" alt="">
                <span>{{item.money}} {{item.id===5?'万元':''}}</span>
              </div>
            </h4>
          </div>
          <linegraph v-if="item.id===1" :id="'myChart'" :data="option" :style="{width: '100%', height: '200px'}"></linegraph>
          <linegraph v-if="item.id===2" :id="'myChart1'" :data="option1" :style="{width: '100%', height: '200px'}"></linegraph>
          <linegraph v-if="item.id===3" :id="'myChart2'" :data="option2" :style="{width: '100%', height: '200px'}"></linegraph>
          <linegraph v-if="item.id===4" :id="'myChart3'" :data="option3" :style="{width: '100%', height: '200px'}"></linegraph>
          <linegraph v-if="item.id===5" :id="'myChart4'" :data="option4" :style="{width: '100%', height: '200px'}"></linegraph>
          <linegraph v-if="item.id===6" :id="'myChart5'" :data="option5" :style="{width: '100%', height: '200px'}"></linegraph>
        </div>
      </div>
      <!--取数组后两条循环-->
      <div class="col-xs-4 col-sm-4 content-2">
        <div class="half-content" v-for="(item, index) in chartList3" :key="index">
          <div class="title-1">
            <b>{{item.title}}</b>
            <div class="bottom-title">
              <span>{{item.info}}</span>
              <h4>{{item.percent}} </h4>
              <div class="icon" v-if="item.id===3||item.id===5">
                <img v-if='item.type === 2' src="../../assets/images/icon/honglvdeng_hong.png" alt="">
                <img v-if='item.type === 1' src="../../assets/images/icon/honglvdeng_lv.png" alt="">
                <span>{{item.money}} {{item.id===5?'万元':''}}</span>
              </div>
              <div class="icon" v-if="item.id===2||item.id===4">
                <img v-if='item.type===1' src="../../assets/images/icon/sz.png" alt="">
                <img v-if='item.type===2' src="../../assets/images/icon/xj.png" alt="">
                <span :style="item.type===1?'color: #2AC007':'color: #E9494D'">{{item.money}}%</span>
                <span style="margin-left: 5px">相比上上月</span>
              </div>
            </div>
          </div>
          <div class="right">
            <linegraph v-if="item.id===1" :id="'myChart'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===2" :id="'myChart1'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===3" :id="'myChart2'" :data="option2" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===4" :id="'myChart3'" :data="option3" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===5" :id="'myChart4'" :data="option4" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===6" :id="'myChart5'" :data="option5" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
    </div>
    <!--如果是六个模块-->
    <div class="row mid-box" v-if="chartList.length===6">
      <!--取数组前两条循环-->
      <div class="col-xs-4 col-sm-4 content-2">
        <div class="half-content" v-for="(item, index) in chartList2" :key="index">
          <div class="title-1">
            <b>{{item.title}}</b>
            <div class="bottom-title">
              <span>{{item.info}}</span>
              <h4>{{item.percent}} </h4>
              <div class="icon" v-if="item.id===3||item.id===5">
                <img v-if='item.type === 2' src="../../assets/images/icon/honglvdeng_hong.png" alt="">
                <img v-if='item.type === 1' src="../../assets/images/icon/honglvdeng_lv.png" alt="">
                <span>{{item.money}} {{item.id===5?'万元':''}}</span>
              </div>
              <div class="icon" v-if="item.id===2||item.id===4">
                <img v-if='item.type===1' src="../../assets/images/icon/sz.png" alt="">
                <img v-if='item.type===2' src="../../assets/images/icon/xj.png" alt="">
                <span :style="item.type===1?'color: #2AC007':'color: #E9494D'">{{item.money}}%</span>
                <span style="margin-left: 5px">相比上上月</span>
              </div>
            </div>
          </div>
          <div class="right">
            <linegraph v-if="item.id===1" :id="'myChart'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===2" :id="'myChart1'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===3" :id="'myChart2'" :data="option2" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===4" :id="'myChart3'" :data="option3" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===5" :id="'myChart4'" :data="option4" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===6" :id="'myChart5'" :data="option5" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!--取数组中间两条循环-->
      <div class="col-xs-4 col-sm-4 content-2">
        <div class="half-content" v-for="(item, index) in chartList4" :key="index">
          <div class="title-1">
            <b>{{item.title}}</b>
            <div class="bottom-title">
              <span>{{item.info}}</span>
              <h4>{{item.percent}} </h4>
              <div class="icon" v-if="item.id===3||item.id===5">
                <img v-if='item.type === 2' src="../../assets/images/icon/honglvdeng_hong.png" alt="">
                <img v-if='item.type === 1' src="../../assets/images/icon/honglvdeng_lv.png" alt="">
                <span>{{item.money}} {{item.id===5?'万元':''}}</span>
              </div>
              <div class="icon" v-if="item.id===2||item.id===4">
                <img v-if='item.type===1' src="../../assets/images/icon/sz.png" alt="">
                <img v-if='item.type===2' src="../../assets/images/icon/xj.png" alt="">
                <span :style="item.type===1?'color: #2AC007':'color: #E9494D'">{{item.money}}%</span>
                <span style="margin-left: 5px">相比上上月</span>
              </div>
            </div>
          </div>
          <div class="right">
            <linegraph v-if="item.id===1" :id="'myChart'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===2" :id="'myChart1'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===3" :id="'myChart2'" :data="option2" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===4" :id="'myChart3'" :data="option3" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===5" :id="'myChart4'" :data="option4" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===6" :id="'myChart5'" :data="option5" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!--取数组后两条循环-->
      <div class="col-xs-4 col-sm-4 content-2">
        <div class="half-content" v-for="(item, index) in chartList3" :key="index">
          <div class="title-1">
            <b>{{item.title}}</b>
            <div class="bottom-title">
              <span>{{item.info}}</span>
              <h4>{{item.percent}} </h4>
              <div class="icon" v-if="item.id===3||item.id===5">
                <img v-if='item.type === 2' src="../../assets/images/icon/honglvdeng_hong.png" alt="">
                <img v-if='item.type === 1' src="../../assets/images/icon/honglvdeng_lv.png" alt="">
                <span>{{item.money}} {{item.id===5?'万元':''}}</span>
              </div>
              <div class="icon" v-if="item.id===2||item.id===4">
                <img v-if='item.type===1' src="../../assets/images/icon/sz.png" alt="">
                <img v-if='item.type===2' src="../../assets/images/icon/xj.png" alt="">
                <span :style="item.type===1?'color: #2AC007':'color: #E9494D'">{{item.money}}%</span>
                <span style="margin-left: 5px">相比上上月</span>
              </div>
            </div>
          </div>
          <div class="right">
            <linegraph v-if="item.id===1" :id="'myChart'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===2" :id="'myChart1'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===3" :id="'myChart2'" :data="option2" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===4" :id="'myChart3'" :data="option3" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===5" :id="'myChart4'" :data="option4" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.id===6" :id="'myChart5'" :data="option5" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
    </div>
    <!--底下表格模块-->
    <div class="row">
      <div class="col-xs-6 col-sm-6 table">
        <div class="table-content">
          <div class="table-title">
            <p style="flex: 1;font-size: 20px;">{{infoListobj.title}}<span style="color: #2D80CC">（{{infoListobj.sumCount}}）</span></p>
            <span style="color: #999999;font-size: 12px" @click="rowUrl">查看更多 ></span>
          </div>
          <!-- <div class="table-head">
            <div>
            <span class="table-h-span table-h-span1">待办摘要</span>
            <span class="table-h-span table-h-span2">用户</span>
            <span class="table-h-span table-h-span3">时间</span>
            </div>
          </div> -->
          <div class="list_line" v-for="(item,index) in infoList" :key="index">
            <span class="list_l_span list_l_span1">{{item.xh}}、{{item.summary}}</span>
            <span class="list_l_span list_l_span2">{{item.lastUserName}}</span>
            <span class="list_l_span list_l_span3">{{item.sendtime}}</span>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 table">
        <div class="table-content">
          <div class="table-title">
            <div style="flex: 1;display: flex;flex-direction: row;align-items: center">
              <p :class="{'warningactive':warningnum=2}" @click="warninglistc(2)">预警</p>
              <div :class="{'warningactive':warningnum=1}" @click="warninglistc(1)" style="font-size: 14px;margin-left:20px">将到期<span style="color: #2D80CC">（20）</span></div>
              <div :class="{'warningactive':warningnum=0}" @click="warninglistc(0)" style="font-size: 14px;margin-left:10px">已逾期<span style="color: #F8B551">（5）</span></div>
            </div>
            <span style="color: #999999;font-size: 12px">查看更多 ></span>
          </div>
          <div class="tableline-warning" v-for="(item, index) in warninglist[warningnum]" :key="index">
            <div class="table-line-warning">
              <p class="tableline-warning-p" style="">{{index+1}}、{{item.warningMsg}}</p>
              <img class="tableline-warning-img" src="../../assets/images/icon/js.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {EleResize} from '../../assets/js/commen'
// import contentL from '../../components/ad/Ad'
import linegraph from '../../components/echart/circle'
import {reqLogin, reqhomeiconList, reqinfoList, reqwarninglist, reqechartsList} from '../../api/index'
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
      dom: '',
      rowheaderlist: undefined,
      infoList: [],
      infoListobj: [],
      warninglist: [
        [], [], []
      ],
      echartsList: [
        [], [], [], [], [], []
      ],
      warningnum: 2,
      rowiconlist: [
        {
          imgurl: require('../../assets/images/icon/zcgl.png')
        }, {
          imgurl: require('../../assets/images/icon/zlzc.png')
        }, {
          imgurl: require('../../assets/images/icon/ksgl.png')
        }, {
          imgurl: require('../../assets/images/icon/htgl.png')
        }, {
          imgurl: require('../../assets/images/icon/htjs.png')
        }, {
          imgurl: require('../../assets/images/icon/zhjf.png')
        }
      ]
    }
  },
  mounted () {
    this.getListAll()
  },
  created () {
    // this.getLogin()
    // this.geroowList()
    // this.getinfoList()
    // this.getwarninglist()
    // console.log($)
  },
  methods: {
    warninglistc (num) {
      this.warningnum = num
    },
    expiring () {
    },
    expire () {
    },
    rowUrl () {
    },
    getListAll () {
      Promise.all([reqLogin(), reqhomeiconList(), reqinfoList(), reqwarninglist(), reqechartsList()]).then((res) => {
        // console.log(res)
        this.rowheaderlist = res[1].data.data.data
        // 顶部按钮数据

        this.infoList = res[2].data.data.data.infoList.splice(0, 5)
        this.infoListobj = res[2].data.data.data
        // 待办数据

        res[3].data.data.data.infoList.forEach(item => {
          if (item.oweDays < 0) {
            this.warninglist[0].push(item)
          } else if (item.oweDays < 30) {
            this.warninglist[1].push(item)
          } else {
            this.warninglist[2].push(item)
          }
        })

        var jsonObj = JSON.parse(res[4].data.data.data.chartList[0].chartDetail)
        // this.echartsList[0] = jsonObj
        jsonObj.areaList.forEach(item => {
          item.Proportion = parseFloat(item.name.split(':')[1])
          item.name = item.name.split(':')[0]
          item.value = parseFloat(item.value)
          this.echartsList[0].push(item)
        })
        console.log(this.echartsList[0])
        this.getList()
        this.setChart()
        this.setChart1()
        this.setChart2()
        this.setChart3()
        this.setChart4()
        this.setChart5()
      }).catch(() => {
        console.log('数据获取失败')
      })
    },
    getList () {
      this.chartList = [
        {
          title: '当前出租率',
          percent: '55%',
          info: '（不含多经）',
          id: 1,
          money: '+200',
          type: 0
        },
        {
          title: '收缴率',
          percent: '89.50% ',
          info: '上月收缴率',
          id: 2,
          money: '5',
          type: 1
        },
        {
          title: '租售比',
          percent: '89.50% ',
          info: '上月租售比',
          id: 3,
          money: '租售比偏低',
          type: 2
        },
        {
          title: '销售坪效',
          percent: '1081',
          info: '上月坪效 (元/㎡)',
          id: 4,
          money: '8',
          type: 2
        },
        {
          title: '有效租金单价',
          percent: '800',
          info: '在租合同 (元/日/㎡)',
          id: 6,
          money: '-10',
          type: 0
        }
      ]
      var a = this.chartList
      this.chartList1 = a.slice(2, 3)
      this.chartList2 = a.slice(0, 2)
      this.chartList3 = a.slice(-2)
      this.chartList4 = a.slice(2, 4)
      console.log(this.chartList3)
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
        title: [{
          text: 12345,
          textStyle: {
            fontSize: 16,
            color: 'black'
          },
          textAlign: 'center',
          x: '49%',
          y: '45%'
        }, {
          subtext: '出租率及空置面积',
          subtextStyle: {
            fontSize: 14,
            color: '#333333'
          },
          textAlign: 'center',
          x: '49%',
          y: '80%'
        }
        ],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['35%', '55%'],
            itemStyle: {
              normal: {
                // 显示颜色
                // color: function (params) {
                //   if (params.name === '写字楼') {
                //     return '#339AF8'
                //   } else if (params.name === '停车场') {
                //     return '#F8B551'
                //   } else {
                //     return '#D2D2D2'
                //   }
                // },
                labelLine: {
                  // length: 0
                },
                label: {
                  formatter: '{b|{b}}{d|{d}%}\n{hr|}\n{c|{c}㎡}',
                  rich: {
                    b: {
                      fontSize: 12,
                      align: 'left',
                      padding: [-5, 0],
                      color: '#666666'
                    },
                    d: {
                      fontSize: 12,
                      align: 'center',
                      padding: [0, 0],
                      color: '#666666'
                    },
                    hr: {
                      borderColor: '#d2d2d2',
                      width: '100%',
                      borderWidth: 2,
                      height: 0
                    },
                    c: {
                      fontSize: 12,
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
            data: this.echartsList[0]
          }
        ]
      }
      // this.chartList.forEach((v, index) => {
      //   console.log(v.id)
      //   let dom = v.id
      //   this.drawLine(dom, option)
      // })
    },
    // 收缴率
    setChart1 () {
      this.option1 = {
        tooltip: {
          backgroundColor: '#fff',
          textStyle: {
            color: '#F8B551',
            fontSize: 12
          },
          trigger: 'axis',
          // hover 坐标轴指示器
          axisPointer: {
            // label: 'cross',
            show: true,
            lineStyle: {
              color: '#F7B310'
            }
          }
        },
        // formatter: '欠款金额 ：123 <br/> 收缴率：{c0}‰<br/>',
        formatter: function (params) {
          console.log(params)
          return params[0].axisValue + '月' + '<br/>' + '欠款金额：123' + '<br/>' + '收缴率：' + params[0].value + '%'
        },
        grid: {
          y: 45,
          x2: 20,
          left: '10',
          right: '10',
          bottom: '0',
          top: '25%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            name: '月',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#0E2A43'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              interval: 0,
              margin: 5,
              textStyle: {
                fontSize: 12,
                color: '#666666'
              }
            },
            axisTick: {
              show: false
            },
            data: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06']
          }, {
            axisPointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#0E2A43'
              }
            },
            axisTick: {
              show: false
            },
            position: 'bottom',
            offset: 20
          }],
        yAxis: [{
          x: 'center',
          type: 'value',
          name: '收缴率',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#0E2A43'
            }
          },
          axisLabel: {
            margin: 10,
            formatter: '{value} %',
            textStyle: {
              fontSize: 12,
              color: '#666666'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: '移动',
          type: 'line',
          smooth: true,
          stack: '总量',
          symbol: 'circle',
          symbolSize: 3,
          showSymbol: false,
          animationDelay: 2000,
          animationDuration: 1000,
          min: 0,
          max: 100,
          data: [5.03, 55.79, 22.07, 64.63, 30.92, 88.26, 34, 10, 40, 80, 50, 0],
          // markPoint: {
          //   symbolSize: 30,
          //   // symbol: 'image://url',
          //   data: [
          //     {type: 'max', name: '最大值'}
          //   ],
          //   animationDelay: 3000,
          //   animationDuration: 1000
          // },
          lineStyle: {
            normal: {
              width: 2,
              color: '#339AF8',
              opacity: 0.9
            }
          },
          itemStyle: {
            color: '#4788FD'
          },
          areaStyle: {
            normal: {
              // 阴影设置
              color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#4788FD' },
                { offset: 0.4, color: '#4788FD' },
                { offset: 1, color: '#fff' }
              ])
            }
          }
        } ]
      }
    },
    // // 租售比
    setChart2 () {
      // let dom = 'myChart'
      this.option2 = {
        title: [{
          text: 666,
          textStyle: {
            fontSize: 16,
            color: 'black'
          },
          textAlign: 'center',
          x: '49%',
          y: '45%'
        }, {
          subtext: '上月租售比及销售额',
          subtextStyle: {
            fontSize: 14,
            color: '#333333'
          },
          textAlign: 'center',
          x: '49%',
          y: '80%'
        }
        ],
        grid: {
          left: '10',
          right: '10',
          bottom: '0',
          top: '25%',
          containLabel: true
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '65%'],
            itemStyle: {
              normal: {
                // 显示颜色
                color: function (params) {
                  if (params.name === '服装') {
                    return '#339AF8'
                  } else if (params.name === '餐饮') {
                    return '#F8B551'
                  } else {
                    return '#D2D2D2'
                  }
                },
                label: {
                  formatter: '{b|{b}}{d|{d}%}\n{hr|}\n{c|{c}㎡}',
                  rich: {
                    b: {
                      fontSize: 11,
                      align: 'left',
                      padding: [4, 0],
                      color: '#666666'
                    },
                    d: {
                      fontSize: 11,
                      align: 'center',
                      padding: [4, 0],
                      color: '#666666'
                    },
                    hr: {
                      borderColor: '#d2d2d2',
                      width: '100%',
                      borderWidth: 2,
                      height: 0
                    },
                    c: {
                      fontSize: 11,
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
              {value: 400, name: '服装'},
              {value: 40, name: '餐饮'},
              {value: 872, name: '其他'}
            ]
          }
        ]
      }
      // this.chartList.forEach((v, index) => {
      //   console.log(v.id)
      //   let dom = v.id
      //   this.drawLine(dom, option)
      // })
    },
    // 销售坪效
    setChart3 () {
      this.option3 = {
        grid: {
          y: 45,
          x2: 20,
          left: '0',
          right: '0',
          bottom: '0',
          top: '25%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 12
          },
          axisPointer: {
            type: 'shadow',
            label: {
              show: true
            }
          }
          // formatter: function (params) {
          //   console.log(params)
          //   return params[0].axisValue + '月' + '<br/>' + '销售额：' + params[1].value + '<br/>' + '坪效：' + params[0].value
          // }
        },
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          data: [{name: '坪效', icon: 'roundRect'}, {name: '销售额'}],
          textStyle: {
            color: '#666'
          }
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: { // 坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#D2D2D2'
            }
          },
          axisLabel: { // 坐标轴刻度标签的相关设置
            interval: 0,
            textStyle: {
              color: '#666666',
              margin: 15
            }
          },
          axisTick: {
            show: false
          },
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        }],
        // eslint-disable-next-line no-sparse-arrays
        yAxis: [{
          name: '元',
          type: 'value',
          // formatter: '{value} 元',
          min: 0,
          // max: 140,
          splitNumber: 7,
          splitLine: {
            show: false,
            lineStyle: {
              color: '#0a3256'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#666666'

            }
          },
          axisTick: {
            show: false
          }
        },
        {
          name: '万元',
          type: 'value',
          // formatter: '{value} 万元',
          splitNumber: 3,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#666666'

            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#0a3256'
            }
          },
          max: 30,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }],
        series: [{
          name: '坪效',
          type: 'line',
          smooth: true, // 是否平滑曲线显示
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            show: false,
            normal: {
              color: 'transparent' // 线条颜色
            }
          },
          itemStyle: {
            normal: {
              color: '#F8B551'
            }
          },
          tooltip: {
            show: true
          },
          data: [39, 0, 20, 63, 68, 82, 98, 100, 120, 20, 45, 18]
        }, {
          name: '销售额',
          type: 'bar',
          barGap: '80%',
          barCategoryGap: '50%',
          barWidth: 10,
          tooltip: {
            show: true
          },
          label: {
            show: false,
            position: 'top',
            textStyle: {
              color: 'black'
            }
          },
          itemStyle: {
            normal: {
              color: '#339AF8'
            }
          },
          data: [20, 38, 10, 26, 18, 31, 66, 89, 50, 14, 120, 77]
        }]
      }
    },
    // 预算完成率
    setChart4 () {
      var data = [78, 60, 60]
      var titlename = ['本年完成', '本月完成', '上月完成']
      var valdata = [50, 130, 77]
      var myColor = ['#339AF8', '#26C6DA', '#F7B310']
      this.option4 = {
        title: [{
          text: '参数',
          x: '15%',
          y: '15%',
          textStyle: {
            color: '#666',
            fontSize: 10
          },
          textAlign: 'center'
        }, {
          text: '数值',
          x: '50%',
          y: '15%',
          textStyle: {
            color: '#666',
            fontSize: 10
          },
          textAlign: 'center'
        }, {
          text: '完成率',
          x: '80%',
          y: '15%',
          textStyle: {
            color: '#666',
            fontSize: 10
          },
          textAlign: 'center'
        }],
        grid: {
          x: 60,
          y: 50,
          x2: 10,
          y2: 0
          // left: '25%',
          // right: '0',
          // bottom: '0'
          // top: '25%'
          // containLabel: true
          // borderWidth:10
        },
        tooltip: {
          backgroundColor: '#fff',
          textStyle: {
            color: '#D2D2D2',
            fontSize: 12
          },
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            label: {
              show: false
            }
          },
          formatter: '{b0}: {c0}<br />'
          // formatter: function (params) {
          //   console.log(params)
          //   return params[0].axisValue + '月' + '<br/>' + '销售额：' + params[1].value + '<br/>' + '坪效：' + params[0].value
          // }
        },
        xAxis: {
          show: false
        },
        yAxis: [{
          show: true,
          data: titlename,
          inverse: true,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#666',
            fontSize: 12,
            align: 'right',
            padding: 5
          }
        }, {
          show: false,
          inverse: true,
          data: valdata,
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#666666'
            }
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: data,
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: function (params) {
                var num = myColor.length
                // console.log(params)
                return myColor[params.dataIndex % num]
              }
            }
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{c}%'
            }
          }
        }, {
          name: '框',
          type: 'bar',
          yAxisIndex: 1,
          barGap: '-100%',
          data: [100, 100, 100],
          barWidth: 10,
          itemStyle: {
            normal: {
              // borderColor: '#E6E7E9',
              borderWidth: 3,
              barBorderRadius: 15,
              color: 'rgba(226,234,238,0.4)'
            }
          }
        }]
      }
    },
    // 有效租金单价
    setChart5 () {
      this.option5 = {
        color: ['#339AF8', '#F8B551'],
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 12
          },
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          icon: 'roundRect',
          itemWidth: 10,
          itemHeight: 10,
          selectedMode: false, // 取消图例上的点击事件
          data: [{name: '平均政策价'}, {name: '在租合同单价'}],
          textStyle: {
            fontSize: '12',
            color: '#666666'
          }
        },
        grid: {
          left: '10',
          right: '10',
          bottom: '0',
          top: '25%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['写字楼', '商铺', '停车场', '其他'],
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#D2D2D2'
              }
            },
            axisLabel: {
              interval: 0,
              // rotate: 45, // 斜体字可不用
              textStyle: {
                fontSize: '12',
                color: '#666666'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false,
              lineStyle: {
                color: '#666'
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                fontSize: '12',
                color: '#666'
              }
            }
          }
        ],
        series: [
          {
            name: '平均政策价',
            type: 'bar',
            stack: '排名',
            data: [120, 132, 101, 134, 90],
            barWidth: 10
          },
          {
            name: '在租合同单价',
            type: 'bar',
            stack: '排名',
            data: [220, 182, 191, 234, 290],
            barWidth: 8
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .model>div{
    width: 100%;
    background: #fff;
    text-align: center;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 0;
    font-size: 1rem;
    cursor: pointer;
  }
  .model>div img{
    width: 2rem;
    height: 2rem;
    margin-right: 12px;
  }
  .main{
    margin: 25px;
  }
  .mid-box{
    margin-top: 25px;
  }
  .content-1>div{
    background: #fff;
    /*padding: 35px 39px;*/
    padding: 1.5rem 1.5rem;
    position: relative;
    /*min-height:350px;*/
  }
  .content-1 {
    margin-bottom: 1rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .content-1>div .title b{
    color: #000;
    font-size: 20px;
  }
  .content-1>div .title h4{
    color: #2D80CC;
    margin-top: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #ddd;
  }
  .content-1>div .title span{
    color: #333333;
    font-size: 16px;
    flex: 1;
    margin-left: 2px;
  }
  .content-2 {
    margin-bottom: 1rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    display: flex;
    height: 400px;
    flex-direction: column;
    justify-content: space-between;
  }
  .content-2>div{
    background: #fff;
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
    margin-top: 25px;
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
    width: 75%;
  }
  .icon-2 span {
    font-size: 12px!important;
  }
.table{
  width:100%;
}
  .table div.table-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.1rem 1.5rem;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px
  }
  .table div.table-title p{
    font-weight: bold;
    font-size: 16px;
    color:#333;
    margin-bottom: 0;
    font-size: 20px
  }
  .table .table-line {
    padding: 11px 22px;
    font-size: 14px;
  }
  .table .table-line div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    line-height: 30px;
  }
  .table-content{
    background: #fff;
    min-height: 311px;
  }
  .table .table-line img{
    width: 20px;
    height: 20px;
  }
  .table_line_span{
    font-size: 16px;
    line-height: 16px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .tableline_span1{
    width: 330px;
  }
  .tableline_span2{
    width: 113px;
    text-align: left;
  }
  .tableline_span3{
  }
  .table-head{
    padding: 11px 22px;
    font-size: 14px;
  }
  .table-h-span{
    /* line-height: 44px; */
    font-size: 16px
  }
  .table-h-span1{
    width: 270px
  }
  .table-h-span2{
    text-align: left;
    width: 55px;
  }
  .table-h-span3{
    width: 142px
  }
  .table-head div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    line-height: 30px;
  }
  .tableline-warning-p{
    width:90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 0px;
    font-size: 14px;
    display: inline-block
  }
  .table-content .tableline-warning{
    margin: -3px 22px;
    line-height: 18px;
    margin: 18px 21px;
  }
  .tableline-warning-img{
    float: right
  }
  .list_head{
      display: flex
        }
        .list_h_span{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-block;
            margin: 11px 22px;
        }
        .list_h_span1{
            width: 60%;
        }
        .list_h_span2{
            width: 20%;
        }
        .list_h_span3{
            width: 20%;
        }
        .list_line{
            /* width: 550px; */
            display: flex
        }
        .list_l_span{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-block;
            margin: 11px 22px;
            font-size: 13px;
        }
        .list_l_span1{
            width: 65%;
        }
        .list_l_span2{
            width: 15%;
        }
        .list_l_span3{
            width: 20%;
        }
        .warningactive{
          font-size: 20
        }
</style>
