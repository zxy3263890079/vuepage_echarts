<template>
  <div class="main" :class="{Mask:!Mask_none}">
    <!--顶部六个功能模块-->
    <div class="row">
      <div class="col-xs-2 col-sm-2 model headesicon" v-for="(item, index) in rowheaderlist" :key="index">
        <div @click="rowheadercli(item.linkUrl)">
          <img :src="rowiconlist[index]" alt=""/>
          {{item.name}}
          <div></div>
        </div>
      </div>
    </div>
    <!--中间图表模块-->
    <!--如果是三个模块-->
    <div class="row mid-box" v-if="echartsListEA.length===3">
      <!-- 小分辨率前两条 -->
      <div class="content-3" v-if="!isshowScreen">
        <div class="half-content_2 col-lg-6" v-for="(item, index) in chartList2" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div class="right">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!-- 大分辨率全部三条 -->
      <div class="col-xs-4 col-sm-12 col-md-12 col-lg-4 content-2" :class="{activenone:isshowScreen}" v-for="(item, index) in echartsListEA" :key="index">
          <div class="title">
            <h4 class="title_h4" style="display: flex;flex-direction: row;align-items: center">
              {{item.name}}
            </h4>
            <h3 class="title_h3" v-if="item.chartDetail">
              <div class="title_h3_dLeft">
                <span v-if="item.targetCode!=='ED1'" class="title_h3_left_span1">{{item.chartDetail.targetValue}}&nbsp; </span>
                <span v-else class="title_h3_left_span1">{{targetlist_value}}&nbsp;</span>
                <span class="title_h3_left_span2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</span>
                <span class="title_h3_left_span2" style="position:absolute;height:100px;top:95px" v-else>
                  <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
                  <img style="margin-left:5px;vertical-align:baseline" src="../../assets/images/icon/下 拉 拷贝 3.png" />
                  <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                    <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
                  </span>
                </span>
              </div>
              <div class="title_h3_dright">
                <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
                <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
                <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
                <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
                <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
              </div>
            </h3>
          </div>
          <div class="bigcontent_line">
            <div></div>
          </div>
          <div class="bigcontent">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
      </div>
      <!-- 小分辨率后一条 -->
      <div class="content-3" v-if="!isshowScreen">
        <div class="half-content_2 col-lg-12" v-for="(item, index) in chartList1" :key="index" style="flex: 0 0 100%">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div class="right">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
    </div>
    <!--如果是四个模块-->
    <div class="row mid-box" v-if="echartsListEA.length===4">
      <!--取数组前两条循环-->
      <!-- 小分辨率前两条 -->
      <div class="col-xs-4 col-lg-6 col-md-6 col-ms-6 content-2"  v-if="!isshowScreen">
        <div class="half-content" v-for="(item, index) in chartList2" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div class="right">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!-- 大分辨率前两条 -->
      <div class="col-xs-4 col-lg-4 content-2" v-for="(item, index) in chartList2" :key="index" :class="{activenone:!isshowScreen}">
          <div class="title">
            <h4 class="title_h4" style="display: flex;flex-direction: row;align-items: center">
              {{item.name}}
            </h4>
            <h3 class="title_h3"  v-if="item.chartDetail">
              <div class="title_h3_dLeft">
                <span v-if="item.targetCode!=='ED1'" class="title_h3_left_span1">{{item.chartDetail.targetValue}}&nbsp;</span>
                <span v-else class="title_h3_left_span1">{{targetlist_value}}&nbsp;</span>
                <span class="title_h3_left_span2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</span>
                <span class="title_h3_left_span2" style="position:absolute;height:100px;top:95px" v-else>
                  <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
                  <img style="margin-left:5px;vertical-align:baseline" src="../../assets/images/icon/下 拉 拷贝 3.png" />
                  <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                    <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
                  </span>
                </span>
              </div>
              <div class="title_h3_dright">
                <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
                <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
                <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
                <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
                <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
              </div>
            </h3>
          </div>
          <div class="bigcontent_line">
            <div></div>
          </div>
          <div class="bigcontent">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
      </div>
      <!--取数组后两条循环-->
      <!-- 全部分辨率后两条 -->
      <div class="content-2 col-md-6 col-ms-6 " :class="{'col-lg-4':isshowScreen, 'col-lg-6':!isshowScreen}">
        <div class="half-content" v-for="(item, index) in chartList3" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div class="right">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
    </div>
    <!--如果是五个模块-->
    <div class="row mid-box" v-if="echartsListEA.length===5">
      <!--取数组前两条循环-->
      <!-- 小分辨率中间一条 -->
      <div class="col-xs-12 col-sm-12 content-2" style="height:250px" v-if="!isshowScreen">
        <div class="half-content" style="height:100%" v-for="(item, index) in chartList1" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div class="right">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!-- 全分辨率前两条 -->
      <div class="content-2" :class="{'col-lg-4':isshowScreen, 'col-lg-6':!isshowScreen,'col-md-4':isshowScreen, 'col-md-6':!isshowScreen}">
        <div class="half-content" v-for="(item, index) in chartList2" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div class="right">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!--取数组中间那条-->
      <!-- 大分辨率中间一条 -->
      <div class="col-xs-4 col-lg-4 content-2" v-for="(item, index) in chartList1" :key="index" :class="{activenone:!isshowScreen}">
          <div class="title">
            <h4 class="title_h4" style="display: flex;flex-direction: row;align-items: center">
              {{item.name}}
            </h4>
            <h3 class="title_h3" v-if="item.chartDetail">
              <div class="title_h3_dLeft">
                <span v-if="item.targetCode!=='ED1'" class="title_h3_left_span1">{{item.chartDetail.targetValue}}&nbsp;</span>
                <span v-else class="title_h3_left_span1">{{targetlist_value}}&nbsp;</span>
                <span class="title_h3_left_span2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</span>
                <span class="title_h3_left_span2" style="position:absolute;height:100px;top:95px" v-else>
                  <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
                  <img style="margin-left:5px;vertical-align:baseline" src="../../assets/images/icon/下 拉 拷贝 3.png" />
                  <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                    <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
                  </span>
                </span>
              </div>
              <div class="title_h3_dright">
                <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
                <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
                <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
                <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
                <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
              </div>
            </h3>
          </div>
          <div class="bigcontent_line">
            <div></div>
          </div>
          <div class="bigcontent">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
      </div>
      <!--取数组后两条循环-->
      <!-- 全分辨率后两条 -->
      <div class="content-2" :class="{'col-lg-4':isshowScreen, 'col-lg-6':!isshowScreen,'col-md-4':isshowScreen, 'col-md-6':!isshowScreen}">
        <div class="half-content" v-for="(item, index) in chartList3" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div class="right">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
    </div>
    <!--如果是六个模块-->
    <div class="row mid-box" v-if="echartsListEA.length===6">
      <!--取数组前两条循环-->
      <!-- 全分辨率前两条 -->
      <div class="content-2 col-sm-4" :class="{'col-lg-4':isshowScreen, 'col-lg-6':!isshowScreen,'col-md-6':!isshowScreen,'col-md-4':isshowScreen}">
        <div class="half-content" v-for="(item, index) in chartList2" :key="index">
          <!-- <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div> -->
          <div class="content_left_title2">{{item.name}}</div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EL1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EM1'" :id="'myChart2'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EN1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option3" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!--取数组中间两条循环-->
      <!-- 全分辨率中间两条 -->
      <div class="content-2 col-sm-4" :class="{'col-lg-4':isshowScreen, 'col-lg-6':!isshowScreen,'col-md-6':!isshowScreen,'col-md-4':isshowScreen}">
        <div class="half-content" v-for="(item, index) in chartList4" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EL1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EM1'" :id="'myChart2'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EN1'" :id="'myChart3'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option3" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!--取数组后两条循环-->
      <!-- 大分辨率后两条 -->
      <div class="content-2 col-sm-4 col-md-4 col-lg-4" v-if='isshowScreen'>
        <div class="half-content" v-for="(item, index) in chartList3" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div class="right">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!-- 小分辨率后两条 -->
      <div class="content-3" v-if="!isshowScreen">
        <div class="half-content_2 col-lg-6" v-for="(item, index) in chartList3" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}</p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{item.chartDetail.targetName}}</span>
              <img style="padding-left:10px;vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div class="right">
            <linegraph v-if="item.targetCode==='1'" :id="'myChart1'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
    </div>
    <!--底下表格模块-->
    <div class="row">
      <div class="col-xs-6 col-sm-6 table">
        <div class="table-content">
          <div class="table-title">
            <p style="flex: 1;font-size: 17px;">上新项目<span style="color: #2D80CC">（{{NewProjectList.length}}）</span></p>
            <span style="color: #999999;font-size: 12px" @click="rowUrl(infoListobj.linkUrl)">查看更多 ></span>
          </div>
          <div style="height:245px;" :class="{activescroll:infoList.length > 6}">

            <div class="list_line" style="width:97.5%">
              <span class="list_l_span list_l_span1">序号</span>
              <span class="list_l_span list_l_span2">项目名称</span>
              <span class="list_l_span list_l_span3">项目类型</span>
            </div>
            <div style="height:88%; overflow:auto">
              <div class="list_line" v-for="(item, index) in NewProjectList" :key="index">
                <span class="list_l_span list_l_span1" style="color:#2D80CC">{{index+1}}</span>
                <span  style="color:#2D80CC" class="list_l_span list_l_span2">{{item.projectName}}</span>
                <span style="color:#2D80CC" class="list_l_span list_l_span3">{{item.businessName}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 table">
        <div class="table-content">
          <div class="table-title">
            <p style="flex: 1;font-size: 17px;">商业信息<span style="color: #2D80CC">（{{BusiOppInfo.length}}）</span></p>
            <span style="color: #999999;font-size: 12px" @click="rowUrl(infoListobj.linkUrl)">查看更多 ></span>
          </div>
          <div style="height:245px;" :class="{activescroll:infoList.length > 6}">
            <div class="list_line" style="width:97.5%">
              <span class="list_l_span list_l_span1">序号</span>
              <span class="list_l_span list_l_span2 waring_list_l_span2">用户名称</span>
              <span class="list_l_span list_l_span3 waring_list_l_span3">联系电话</span>
              <span class="list_l_span list_l_span4 waring_list_l_span4">意向项目</span>
            </div>
            <div style="height:88%; overflow:auto">
              <div class="list_line" v-for="(item, index) in BusiOppInfo" :key="index">
                <span class="list_l_span list_l_span1" style="color:#2D80CC">{{index+1}}</span>
                <span class="list_l_span list_l_span2 waring_list_l_span2" style="color:#2D80CC">{{item.name}}</span>
                <span class="list_l_span list_l_span3 waring_list_l_span3" style="color:#2D80CC">{{item.phone}}</span>
                <span class="list_l_span list_l_span4 waring_list_l_span4" style="color:#2D80CC">{{item.projectname}}</span>
              </div>
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
import {reqLogin, reqaWeekStatistics, reqNewProjectList, reqBusiOppInfo, requserapplist} from '../../api/index'
export default {
  name: 'Login',
  components: {
    linegraph
  },
  props: {
    isshowMask: {
      type: Function
    },
    arrsize: {
      type: Function
    }
  },
  data () {
    return {
      targetlist_value: '',
      warninglistUrl: null,
      Screenwidth: 1600,
      isshowop11: false,
      op11index: 0,
      Mask_none: true,
      warningnum: 2,
      // 出租率
      htmlsize: 0,
      ifsize: 1300,
      option: {},
      // 收缴率
      option1: {},
      // 租售比
      option2: {},
      option3: {},
      option4: {},
      option5: {},
      option6: {},
      option7: {},
      option8: {},
      option9: {},
      option10: {},
      option11: {},
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
      NewProjectList: [],
      BusiOppInfo: [],
      echartsList: [
        [], [], [], [], [], []
      ],
      echartsListEA: [],
      rowiconlist: [
        require('../../assets/images/icon/轮播图管理.png'),
        require('../../assets/images/icon/项目信息维护.png'),
        require('../../assets/images/icon/楼栋维护.png'),
        require('../../assets/images/icon/户型维护.png'),
        require('../../assets/images/icon/房源维护.png'),
        require('../../assets/images/icon/yuyue.png')
      ]
    }
  },
  mounted () {
  },
  computed: {
    isshowScreen () {
      if (screen.width > this.Screenwidth) {
        return true
      } else {
        return false
      }
    }
  },
  beforeCreate () {
  },
  created () {
    let projectid = window.parent.GetSession('projectid')
    let userid = window.parent.GetSession('userid')
    let comid = window.parent.GetSession('comid')
    // let comid = '433222a1_5cde_4276_9118_b6ef910c5845'
    // let userid = '3c5b0122_bb4b_4f83_b2c7_bb3891906fe9'
    // let projectid = '1e71d939_df04_4a5a_9546_60862b0f5c85'
    // this.getLogin(comid, userid, projectid)
    this.getUserAppList_KFXCX(comid, userid, projectid)
    this.getaWeekStatistics(comid, userid, projectid)
    this.getNewProjectList(comid, userid, projectid)
    this.getBusiOppInfo(comid, userid, projectid)
    // this.getwarninglist()
    // this.getechartsList()

    // this.getListAll()

    // this.gethomeiconList()
    // this.getinfoList()
  },
  watch: {
  },
  methods: {
    judgeFormat (num) {
      if (num.split(',')[1] !== undefined) {
        return num.split(',')[0] + num.split(',')[1]
      } else {
        return num
      }
    },
    op11Cli (index) {
      this.isshowop11 = !this.isshowop11
      this.op11index = index
      this.targetlist_value = this.echartsListEA[index].chartDetail.targetList[this.op11index].value
      this.setChart11()
    },
      // 查看更多跳转
    rowUrl (url) {
      window.parent.SetWindowHash(url)
    },
    // 顶部图标点击
    rowheadercli (linkUrl) {
      window.parent.SetWindowHash(linkUrl)
    },
    // 待办信息列表点击
    infocli (item) {
      window.parent.AssetDetails2(item.actionid, item.wfCode)
    },
    // 预警信息列表点击
    warningcli (item) {
      if (item.msgType !== 'C') {
        alert('找不到条目')
        return
      }
      window.parent.ShowPageDialog('w_4c9f9358_87e1_46e5_abee_754edb03b6c2', '查看合同', `isnewrecord=0&ck=1&recordid=${item.actionId}`, '100%', '100%', 2, 'main', null, null, null, true)
    },
    // 数字千分位分隔
    miliFormat (num) {
      return num && num.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',')
    },
    // 根据指标图数据位数显示指标图内小标题
    istitleshow (typename, EX) {
      let value = false
      if (EX !== undefined) {
        let arr = [
        //   'EC1',
          // 'EA1',
          // 'EJ1',
          // 'EB1',
          // 'EX',
          // 'EA',
          // 'ED1'
        ]
        arr.forEach((item, index) => {
          if (item === typename) {
            value = true
          }
        })
        return value
      }
      if (this.echartsListEA.length >= 6) {
        return true
      } else if (this.echartsListEA.length === 3 && !this.isshowScreen) {
        return true
      } else if (this.echartsListEA.length <= 3) {
        return false
      } else if (this.echartsListEA.length === 4) {
        this.echartsListEA.forEach((item, index) => {
          if (item.targetCode === typename && index <= 1) {
            value = false
          } else if (index >= 2) {
            value = true
          }
        })
        return value
      } else if (this.echartsListEA.length === 5) {
        this.echartsListEA.forEach((item, index) => {
          if (item.targetCode === typename && index === 2) {
            value = false
          } else {
            value = true
          }
        })
        return value
      }
    },
    // 根据指标图类型从后台数组中查找对应类型的指标图数据并返回索引
    forindex (targetCode) {
      var indexs = null
      this.echartsListEA.forEach((item, index) => {
        if (targetCode === item.targetCode) {
          indexs = index
        }
      })
      return indexs
    },
    // 顶部图标接口
    getUserAppList_KFXCX () {
      requserapplist().then(res => {
        this.rowheaderlist = res.data.data.data
        console.log(this.rowheaderlist)
      }).catch(err => {
        console.log(err, '顶部列表处理失败')
      })
    },
    // 商业信息列表
    getBusiOppInfo () {
      reqBusiOppInfo().then(res => {
        // console.log(res.data.data)
        this.BusiOppInfo = res.data.data.data
        console.log(this.BusiOppInfo)
      }).catch(err => {
        console.log(err, '商业信息')
      })
    },
    // 最新项目列表
    getNewProjectList () {
      reqNewProjectList().then(res => {
        this.NewProjectList = res.data.data.data
      }).catch(err => {
        console.log(err, '最新项目处理失败')
      })
    },
    // 最近一周新增预约量和关注量
    getaWeekStatistics () {
      reqaWeekStatistics().then(res => {
        debugger
        this.echartsListEA = res.data.data.data.chartList
        console.log(this.echartsListEA)
        this.echartsListEA.map(item => {
          item.chartDetail = JSON.parse(item.chartDetail)
        })
          // this.echartsListEA.push([])
          // this.echartsListEA.push([])
          // this.echartsListEA.push([])
        this.getList()
        this.setChart()
        this.setChart1()
        this.setChart3()
        this.setChart6()
        this.onresize()
      }).catch(err => {
        console.log(err, '最近一周新增量处理失败')
      })
    },
    // 登录
    getLogin (projectid, userid, comid) {
      reqLogin(comid, userid, projectid).then(res => {
        this.getUserAppList_KFXCX(comid, userid, projectid)
        this.getaWeekStatistics(comid, userid, projectid)
        this.getNewProjectList(comid, userid, projectid)
        this.getBusiOppInfo(comid, userid, projectid)
        // this.getwarninglist()
        // this.getechartsList()
        // 登录
      }).catch(err => {
        console.log(err, '自动登录处理失败')
      })
    },
    // 监测屏幕大小适配
    onresize (typename) {
      window.onresize = () => {
        if (window.innerWidth < this.ifsize && this.htmlsize > this.ifsize) {
          this.setChart()
          this.htmlsize = 0
        } else if (window.innerWidth > this.ifsize && this.htmlsize < this.ifsize) {
          this.setChart()
          this.htmlsize = this.ifsize + 100
        }
      }
    },
    isAdaptation (min, max) {
      if (window.innerWidth < this.ifsize) {
        return min
      } else {
        return max
      }
    },
    // 分开取指标图数据条数
    getList () {
      var a = this.echartsListEA
      debugger
      this.chartList1 = a.slice(2, 3)
      this.chartList2 = a.slice(0, 2)
      this.chartList3 = a.slice(-2)
      this.chartList4 = a.slice(2, 4)
      // console.log(this.chartList1, this.chartList2, this.chartList3, this.chartList4)
    },
    setChart () {
      var targetCode = 'EL1'
      var index = this.forindex(targetCode)
      if (index === null) { return }
      var i = 0
      var j = 0
      let value = null
        let data = this.echartsListEA[index].chartDetail[0].targetinfo.numList
        let data2 = this.echartsListEA[index].chartDetail[1].targetinfo.numList
      // 租售率
      this.option = {
        legend: [
            {
                selectedMode: true,
                padding: [-9, 0, -9, 0],
                icon: 'circle',
                itemWidth: 10,
                left: '8%',
                orient: 'vertical',
                // itemGap: this.isAdaptation(3, 30),
                height: 50,
                textStyle: {
                    fontSize: this.isAdaptation(10, 12)
                },
                top: '85%',
                data: this.echartsListEA[index].chartDetail[0].targetinfo.numList,
                formatter: (params) => {
                    console.log(params)
                    if (data[j].name === params) {
                      value = data[j].value
                    }
                    j++
                    if (j >= data.length) {
                      j = 0
                    }
                    return params + '    ' + value
                  }
            }, {
                selectedMode: true,
                itemGap: 0,
                padding: [-9, 0, -9, 0],
                icon: 'circle',
                itemWidth: 10,
                left: '77%',
                orient: 'vertical',
                // itemGap: this.isAdaptation(3, 30),
                height: 200,
                top: '3%',
                data: data2,
                  formatter: (params) => {
                    if (data2[i].name === params) {
                      value = data2[i].value
                    }
                    i++
                    if (i >= data2.length) {
                      i = 0
                    }
                    return params + '\n' + value
                  },
                  textStyle: {
                    padding: [15, 0, 0, 0]
                  }
            }
        ],
        title: [{
          text: this.echartsListEA[index].chartDetail[1].targetinfo.centerValue,
          textStyle: {
            fontSize: 16
          },
          textAlign: 'center',
          left: '57%',
          top: '35%',
          subtext: this.echartsListEA[index].chartDetail[1].name,
          subtextStyle: {
            fontSize: 13
          }
        }, {
          text: this.echartsListEA[index].chartDetail[0].targetinfo.centerValue,
          textStyle: {
            fontSize: 16
          },
          textAlign: 'center',
          left: '19%',
          top: '35%',
          subtext: this.echartsListEA[index].chartDetail[0].name,
          subtextStyle: {
            fontSize: 13
          }
        }, {
          subtextStyle: {
            fontSize: 16,
            color: '#333333'
          },
          textAlign: 'center',
          x: '29%',
          y: '85%'
        }
        ],
        series: [
          {
            startAngle: 90,
            avoidLabelOverlap: true,
            minShowLabelAngle: '5',
            name: '访问来源',
            type: 'pie',
            radius: ['37%', '52%'],
            top: '-7%',
            left: '-60%',
            label: {
                show: false
            },
            itemStyle: {
              normal: {
                labelLine: {
                    show: false
                }
              }
            },
            // data: data
            data: this.echartsListEA[index].chartDetail[0].targetinfo.numList
          }, {
            startAngle: 90,
            avoidLabelOverlap: true,
            minShowLabelAngle: '5',
            // hoverAnimation: false,
            name: '访问来源',
            type: 'pie',
            radius: ['49%', '63%'],
            top: '-7%',
            left: '16%',
            label: {
                show: false
            },
            itemStyle: {
              normal: {
                // 显示颜色
                // color: (params) => {
                //   if (params.title === '写字楼') {
                //     return '#339AF8'
                //   } else if (params.title === '停车场') {
                //     return '#F8B551'
                //   } else if (params.title === '飞机场') {
                //     return '#ACD598'
                //   } else if (params.title === '黄花机场') {
                //     return '#FC5659'
                //   } else {
                //     return '#D2D2D2'
                //   }
                // },
                labelLine: {
                    show: false
                }
              }
            },
            // data: data
            data: data2
          }
        ]
      }
    },
    setChart1 () {
      var targetCode = 'EM1'
      var index = this.forindex(targetCode)
      if (index === null) { return }
      console.log(this.echartsListEA[index].chartDetail[0].targetinfo.numList)
      var i = 0
      var j = 0
      let value = null
        let data = this.echartsListEA[index].chartDetail[0].targetinfo.numList
        let data2 = this.echartsListEA[index].chartDetail[1].targetinfo.numList
      // 租售率
      this.option1 = {
        legend: [
            {
                selectedMode: true,
                padding: [-9, 0, -9, 0],
                icon: 'circle',
                itemWidth: 10,
                left: '8%',
                orient: 'vertical',
                // itemGap: this.isAdaptation(3, 30),
                height: 50,
                textStyle: {
                    fontSize: this.isAdaptation(10, 12)
                },
                top: '85%',
                data: this.echartsListEA[index].chartDetail[0].targetinfo.numList,
                formatter: (params) => {
                    console.log(params)
                    if (data[j].name === params) {
                      value = data[j].value
                    }
                    j++
                    if (j >= data.length) {
                      j = 0
                    }
                    return params + '    ' + value
                  }
            }, {
                selectedMode: true,
                itemGap: 0,
                padding: [-9, 0, -9, 0],
                icon: 'circle',
                itemWidth: 10,
                left: '77%',
                orient: 'vertical',
                // itemGap: this.isAdaptation(3, 30),
                height: 200,
                top: '3%',
                data: data2,
                  formatter: (params) => {
                    console.log(params)
                    if (data2[i].name === params) {
                      value = data2[i].value
                    }
                    i++
                    if (i >= data2.length) {
                      i = 0
                    }
                    return params + '\n' + value
                  },
                  textStyle: {
                    padding: [15, 0, 0, 0]
                  }
            }
        ],
        title: [{
          text: this.echartsListEA[index].chartDetail[1].targetinfo.centerValue,
          textStyle: {
            fontSize: 16
          },
          textAlign: 'center',
          left: '57%',
          top: '35%',
          subtext: this.echartsListEA[index].chartDetail[1].name,
          subtextStyle: {
            fontSize: 13
          }
        }, {
          text: this.echartsListEA[index].chartDetail[0].targetinfo.centerValue,
          textStyle: {
            fontSize: 16
          },
          textAlign: 'center',
          left: '19%',
          top: '35%',
          subtext: this.echartsListEA[index].chartDetail[0].name,
          subtextStyle: {
            fontSize: 13
          }
        }, {
          subtextStyle: {
            fontSize: 16,
            color: '#333333'
          },
          textAlign: 'center',
          x: '29%',
          y: '85%'
        }
        ],
        series: [
          {
            startAngle: 90,
            avoidLabelOverlap: true,
            minShowLabelAngle: '5',
            name: '访问来源',
            type: 'pie',
            radius: ['37%', '52%'],
            top: '-7%',
            left: '-60%',
            label: {
                show: false
            },
            itemStyle: {
              normal: {
                // 显示颜色
                // color: (params) => {
                //   if (params.title === '写字楼') {
                //     return '#339AF8'
                //   } else if (params.title === '停车场') {
                //     return '#F8B551'
                //   } else if (params.title === '飞机场') {
                //     return '#ACD598'
                //   } else if (params.title === '黄花机场') {
                //     return '#FC5659'
                //   } else {
                //     return '#D2D2D2'
                //   }
                // },
                labelLine: {
                    show: false
                }
              }
            },
            // data: data
            data: this.echartsListEA[index].chartDetail[0].targetinfo.numList
          }, {
            startAngle: 90,
            avoidLabelOverlap: true,
            minShowLabelAngle: '5',
            // hoverAnimation: false,
            name: '访问来源',
            type: 'pie',
            radius: ['49%', '63%'],
            top: '-7%',
            left: '16%',
            label: {
                show: false
            },
            itemStyle: {
              normal: {
                // 显示颜色
                // color: (params) => {
                //   if (params.title === '写字楼') {
                //     return '#339AF8'
                //   } else if (params.title === '停车场') {
                //     return '#F8B551'
                //   } else if (params.title === '飞机场') {
                //     return '#ACD598'
                //   } else if (params.title === '黄花机场') {
                //     return '#FC5659'
                //   } else {
                //     return '#D2D2D2'
                //   }
                // },
                labelLine: {
                    show: false
                }
              }
            },
            // data: data
            data: data2
          }
        ]
      }
    },
    // 合同租金单价趋势图
    setChart3 () {
      var data = [190, 170, 110, 50, 45, 45, 30, 20, 19, 5]
      var data2 = ['梅溪湖玺悦', '恒大滨江左岸', '印湘江2', '万科魅力之城', '碧桂园印象', '融创会展上东区', '时代梅溪领峰', '梅溪乐章', '旭辉都会山', '小舟']
      let num = 0
      let index = 1
      let itemcolorindex = 0
      data2.forEach((item, index) => {
            if (item.length > num) {
                num = item.length
            }
        })
      //   var lengths = data2[]
      // var chartName = ['2016', '2017', '2018']
      var labelName = ['预算情况']
      this.option3 = {
        grid: {
          x2: 5,
          left: num * 1.5 + 20,
          right: '30',
          bottom: '',
          top: '18%',
          containLabel: true
        },
        title: {
          text: 'TOP10热门房源',
          textStyle: {
            fontSize: 14,
            color: '#2D80CC'
          }
      },
      legend: {
        show: false,
        itemHeight: 18,
        icon: 'circle',
        itemWidth: 10,
        data: labelName,
        right: '0'
      },
      yAxis: {
        data: data2,
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
          margin: 0,
          formatter: (value) => {
            let ss = index
            // console.log(ss)
            index = index + 1
            if (index > data2.length) {
                index = 1
            }
            return '{icon|' + ss + '}' + '' + '{value|' + value + '}'
          },
          rich: {
                value: {
                    width: num * 10 + 20,
                    // align: 'right',
                    padding: [0, 10, 0, 0],
                    fontSize: 11
                },
                icon: {
                    // backgroundColor: '#000',
                    borderRadius: 10,
                    color: '#000',
                    align: 'center',
                    // backgroundColor: {
                    // //   image: require('../../assets/images/icon/2020-07-01_175658.png')
                    // },
                    height: 12,
                    width: 12
                }
            },
            borderColor: '#000',
            textStyle: {
                fontSize: 12
            }
        }
      },
      xAxis: {
        // max: 100,
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
        barWidth: '55%',
        label: {
          show: true,
          position: 'right',
          fontSize: 9,
          color: '#000',
          formatter: (params) => {
            return params.value
          }
        },
        barCategoryGap: '40%',
        barGap: '60%',
        data: data,
        itemStyle: {
          color: function (value) {
            if (itemcolorindex === data2.length) {
              itemcolorindex = 0
            }
            itemcolorindex = itemcolorindex + 1
            if (itemcolorindex === 1) {
              return '#E60012'
            } else if (itemcolorindex === 2) {
              return '#EB6100'
            } else if (itemcolorindex === 3) {
              return '#89C997'
            } else {
              return '#52BCF8'
            }
          }
        }
      }]
      }
    },
    // 出租率
    setChart6 () {
      var targetCode = 'EN1'
      var index = this.forindex(targetCode)
      if (index === null) { return }
      console.log(this.echartsListEA[index].chartDetail)
      this.echartsListEA[index].chartlist = [
        [], [], []
      ]
      // this.echartsListEA[index].chart
      this.echartsListEA[index].chartDetail.forEach((item, indexs) => {
        this.echartsListEA[index].chartlist[0].push(item.weekName)
        this.echartsListEA[index].chartlist[1].push(item.upCount)
        this.echartsListEA[index].chartlist[2].push(item.downCount)
      })
      this.option6 = {
        grid: {
          left: '5',
          right: '10',
          bottom: '',
          top: '60',
          containLabel: true
        },
        title: [
          {
          text: '近一周上下架情况',
          textStyle: {
            color: '#2D80CC',
            fontSize: 14
          }
        }
        ],
      tooltip: {
          show: false
      },
      legend: {
          icon: 'circle',
          width: 1500,
          left: 'right',
          itemWidth: 10,
          textStyle: {
            fontSize: 12,
            padding: [0, 0, 0, 0]
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
        data: this.echartsListEA[index].chartlist[0],
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
            fontSize: 12
        }
      },
      yAxis: {
        name: '价格/月份',
        nameTextStyle: {
            color: '#000000',
            fontSize: 12,
            padding: [10, 0, 0, 0]
        },
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
              color: '#E5E5E5'
          }
        },
        show: true,
        axisLabel: {
            color: '#000000',
            formatter: '{value}',
            fontSize: 12
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
            name: '下架',
            smooth: true,
            type: 'line',
            symbol: 'none',
            data: this.echartsListEA[index].chartlist[1],
            lineStyle: {
              normal: {
                width: 2,
                color: '#339AF8',
                  opacity: 0.9
                }
            },
            areaStyle: {
                normal: {
                  // 阴影设置
                  color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#A3DBFB' },
                    { offset: 1, color: '#fff' }
                  ])
                }
              }
          },
          {
            name: '上架 ',
            smooth: true,
            type: 'line',
            symbol: 'none',
            data: this.echartsListEA[index].chartlist[2],
            lineStyle: {
                normal: {
                  width: 2,
                  color: '#F8952F',
                  opacity: 0.9
                }
            }
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
    color: #999999;
    position: relative;
    margin: 18px 21px 0px;
    background-color: #F4F6FA
  }
  html, body{
    background-color: #F4F6FA
  }
  .mid-box{
    margin-top: 16px;
  }
  .content-1>div{
    background: #F4F6FA;
    /*padding: 35px 39px;*/
    padding: 1.5rem 1.5rem;
    position: relative;
    /*min-height:350px;*/
    height: 100%;
  }
  .content-1 {
    /* width: 100; */
    height: 300px;
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
    /* padding-bottom: 30px; */
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
    height: 500px;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: #fff */
  }
  .content-2>div{
    background: #fff;
    /*padding: 35px 39px;*/
    padding: 1.1rem 1.5rem;
    position: relative;
  }
  .content-2 .half-content {
    height: 48.5%;
    display: flex;
    flex-direction: row;
  }
  .title{
    z-index: 5;
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
    width: 100%;
  }
  .icon-2 span {
    font-size: 12px!important;
  }
  .table{
    width:100%;
    padding-left: 8px;
    padding-right: 8px
  }
  .table div.table-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.1rem 1.5rem;
    border-bottom: 1px solid #eee;
    /* margin-bottom: 20px */
  }
  .table div.table-title p{
    font-weight: bold;
    font-size: 16px;
    color:#333;
    margin-bottom: 0;
  }
  .table .table-line {
    /* padding: 1.1rem 1.5rem; */
    /* padding-top: 11px; */
    /* padding-bottom: 11px; */
    /* padding-left: 22px; */
    padding: 11px 22px;
    font-size: 14px;
  }
  .table .table-line div{
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    /* justify-content: space-between; */
    line-height: 30px;
  }
  .table-content{
    background: #fff;
    min-height: 311px;
    /* overflow: hidden; */
  }
  .table .table-line img{
    width: 20px;
    height: 20px;
  }
  .table_line_span{
    font-size: 14px;
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
    width: 100%;
  }
  .table-h-span{
    /* line-height: 44px; */
    font-size: 16px;
    display: inline-block;
  }
  .table-h-span1{
    width: 57%;
  }
  .table-h-span2{
    text-align: left;
    width: 21%;
  }
  .table-h-span3{
    width: 20%
  }
  .table-head div{
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    /* justify-content: space-between; */
    /* line-height: 30px; */
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
    margin: 16px 21px;
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
    margin: 8px 5px;
    font-size: 13px;
}
.list_l_span1{
    text-align: center;
    width: 8%;
    margin-left: 15px
  }
  .list_l_span2{
    text-align: center;
    width: 60%;
  }
  .list_l_span3{
    text-align: center;
    width: 20%;
    margin-right: 22px
  }
  .table_echarts{
    width: 100%;
    height: 100%;
  }
  .contents{
    height: 250px;
  }
  .flecenter{
    /* width: 100%; */
    /* height: 100%; */
    display: flex;
    justify-content: center;
    background-color: #fff
  }
  .h4_line{
  }
  .title_h3{
  }
  .bigcontent{
    height: 320px
  }
  .title_h3 div{
    display: inline-block;
  }
  .title_h3 .title_h3_dLeft{
    float: left
  }
  .title_h3 .title_h3_dright{
    float: right
  }
  .bigcontent_line{
    height: 52px;
  }
  .bigcontent_line div{
    height: 8px;
    border-bottom: #EAEAEA dashed 2px
  }
  .title_h4{
    color: #2D80CC;
    margin-top: 10px;
    margin-bottom: 32px;
    font-size: 15px
  }
  .title_h3_left_span1{
    font-size: 28px;
    color: #0F6DC7
  }
  .title_h3_left_span2{
    margin-left: 10px;
    font-size: 11px
  }
  .warningactive{
   font-size: 17px;
   font-weight: bold
  }
  .table_title_div{
    font-size: 18;
    margin-left: 14px;
  }
  .content_left_title{
    /* width: 130px; */
    height: 100%;
  }
  .content_left_title p{
    margin-bottom: 0px;
  }
  .content_left_title_p1{
    /* font-family: 'PangMenZhengDao Regular'; */
    font-size: 15px;
    font-weight: 600;
    color: #2D80CC;
  }
  .content_left_title_p2{
    font-size: 11px;
    /* transform: scale(0.8); */
    /* margin-left: -12px; */
    margin-top: 50px;
    position:absolute;
    background-color: #fff;
  }
  .content_left_title_p3{
    font-size: 28px;
    color: #0F6DC7;
    margin-top: 66px;
    font-weight: 500
  }
  .content_left_title_p4{
    margin-left: -11px;
    white-space: nowrap;
    transform: scale(0.9);
    font-size: 9px;
    margin-top: 50px;
    position:absolute;
    bottom: 25px;
  }
  .content_left_title_p{
    width: 120px;;
  }
  .main_Mask{
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin:auto;
    width: 80%;
    position: absolute;
    height: 80%;
    z-index: 5;
    /* background-color: #fff; */
    /* opacity:1 */
     background-color:rgba(0, 0, 0, 1)
  }
  .Mask_none{
    display: none;
  }
  .main_Mask_iframe{
    width: 100%;
    height: 100%;
  }
  .parent_mask{
    /* background-color: #000; */
     /* opacity:0.3; */
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, 0.5);
     position: absolute;
     z-index: 10;
  }
  .headesicon{
    padding-left: 8px;
    padding-right: 8px
  }
  .content_left_title_p4_span1{
    font-size: 10px;
    /* color: #2AC007; */
  }
  .content_left_title_p4_span2{
    font-size: 13px;
  }
  .content_left_title_p__op11All{
    /* float: left; */
    text-align: center;
    display: block;
    background-color: #FFF
  }
  .content_left_title_p_op11cli{
    display: block!important
  }
  .content_left_title_p_op11cli:hover{
    background-color: #ddd
  }
  .activenone{
    display: none;
  }
  .content-3{
    width: 100%;
    margin-bottom: 1rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    display: flex;
    height: 250px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .half-content_2{
    flex:0 0 49.2%;
    background-color: #fff;
    padding: 1.1rem 1.5rem;
    height: 100%;
    display: flex;
  }
  .span4colorsz{
    color:#26C201
  }
  .span4colorxj{
    color:crimson
  }
  .activescroll{
    overflow-y: scroll
  }
  .waring_list_l_span2{
    width: 20%;
  }
  .waring_list_l_span3{
    width: 20%;
  }
  .waring_list_l_span4{
    text-align: center;
    width: 30%;
  }
    .content_left_title2{
    position: absolute;
    font-size: 15px;
    font-weight: 600;
    color: #0F6DC7
  }
</style>
