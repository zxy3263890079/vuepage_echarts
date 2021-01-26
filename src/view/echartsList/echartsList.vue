<template>
  <div class="main" :class="{Mask:!Mask_none}">
    <!--顶部六个功能模块-->
    <div class="row" v-if="rowheaderlist!==undefined">
      <div v-for="(item,index) in rowheaderlist" :key='index' class="col-xs-2 col-sm-2 model headesicon">
        <div @click="rowheadercli(item.linkUrl)">
          <img :src="rowiconlist[index]" alt=""/>
          {{item.name}}
          <div></div>
        </div>
      </div>
    </div>
    <!--中间图表模块-->
    <!--如果是三个模块-->
    <div class="row mid-box" v-if="echartsListEA.length === 3">
      <!-- 小分辨率前两条 -->
      <div class="content-3" v-if="!isshowScreen">
        <div class="half-content_2 col-lg-6" v-for="(item, index) in chartList2" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
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
          <div v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <div class="content-3" v-if="!isshowScreen">
        <div class="half-content_2 col-lg-12" v-for="(item, index) in chartList1" :key="index" style="flex:0 0 100%">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
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
          <div v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.chartDetail.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!-- 大分辨率全部三条 -->
      <div class="col-xs-4 col-sm-12 col-md-12 col-lg-4 content-2" :class="{activenone:!isshowScreen}" v-for="(item, index) in echartsListEA" :key="index">
          <div class="title">
            <h4 class="title_h4" style="display: flex;flex-direction: row;align-items: center">
              {{item.name}}
            </h4>
            <h3 class="title_h3">
              <div class="title_h3_dLeft">
                <span v-if="item.targetCode!=='ED1'" class="title_h3_left_span1">{{item.chartDetail.targetValue}}&nbsp; </span>
                <span v-else class="title_h3_left_span1">{{targetlist_value}}&nbsp;</span>
                <span class="title_h3_left_span2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</span>
                <span class="title_h3_left_span2" style="position:absolute;height:100px;top:95px" v-else>
                  <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
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
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
      </div>
      <!-- 小分辨率后一条 -->
    </div>
    <!--如果是四个模块-->
    <div class="row mid-box" v-if="echartsListEA.length===4">
      <!--取数组前两条循环-->
      <!-- 小分辨率前两条 -->
      <div class="col-xs-4 col-lg-6 col-md-6 col-ms-6 content-2"  v-if="!isshowScreen">
        <div class="half-content" v-for="(item, index) in chartList2" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
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
          <div  v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.chartDetail.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
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
            <h3 class="title_h3">
              <div class="title_h3_dLeft">
                <span v-if="item.targetCode!=='ED1'" class="title_h3_left_span1">{{item.chartDetail.targetValue}}&nbsp;</span>
                <span v-else class="title_h3_left_span1">{{targetlist_value}}&nbsp;</span>
                <span class="title_h3_left_span2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</span>
                <span class="title_h3_left_span2" style="position:absolute;height:100px;top:95px" v-else>
                  <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
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
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
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
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
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
          <div  v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.chartDetail.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
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
    <div class="row mid-box" v-if="echartsListEA.length===5 ">
      <!--取数组前两条循环-->
      <!-- 小分辨率中间一条 -->
      <div class="col-xs-12 col-sm-12 content-2" style="height:250px" v-if="!isshowScreen">
        <div class="half-content" style="height:100%" v-for="(item, index) in chartList1" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
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
          <div  v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
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
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
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
          <div  v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.chartDetail.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
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
            <h3 class="title_h3">
              <div class="title_h3_dLeft">
                <span v-if="item.targetCode!=='ED1'" class="title_h3_left_span1">{{item.chartDetail.targetValue}}&nbsp;</span>
                <span v-else class="title_h3_left_span1">{{targetlist_value}}&nbsp;</span>
                <span class="title_h3_left_span2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</span>
                <span class="title_h3_left_span2" style="position:absolute;height:100px;top:95px" v-else>
                  <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
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
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
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
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
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
          <div v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.chartDetail.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
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
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
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
          <div v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
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
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="!item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!--取数组后两条循环-->
      <!-- 大分辨率后两条 -->
      <div class="content-2 col-sm-4 col-md-4 col-lg-4" v-if='isshowScreen'>
        <div class="half-content" v-for="(item, index) in chartList3" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline" v-if="item.chartDetail.targetList.length !== 0" @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
              <span v-if="isshowop11" class="content_left_title_p__op11ALL">
                <div class="content_left_title_p_op11cli" @click="op11Cli(index)" v-for="(items,index) in item.chartDetail.targetList" :key="index">{{items.name}}</div>
              </span>
            </p>
            <p v-if="!item.targetCode!=='ED1'" class="content_left_title_p content_left_title_p3">{{item.chartDetail.targetValue}}&nbsp;</p>
            <p v-else class="content_left_title_p content_left_title_p3">{{targetlist_value}}&nbsp;</p>
            <p class="content_left_title_p content_left_title_p4">
              <img src="../../assets/images/icon/xj.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">
              <img src="../../assets/images/icon/sz.png" alt="" style="vertical-align:baseline" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">
              <span class="content_left_title_p4_span1" style="color:#26C201" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]!=='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span1" style="color:crimson" v-if="item.chartDetail.contrastValue!=undefined&&item.chartDetail.contrastValue[0]==='-'">{{item.chartDetail.contrastValue}}</span>
              <span class="content_left_title_p4_span2">{{item.chartDetail.contrastTitle}}</span>
            </p>
          </div>
          <div v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.chartDetail.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EF1'" :id="'myChart3'" :data="option1" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EC1'" :id="'myChart4'" :data="option7" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EB1'" :id="'myChart5'" :data="option9" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EJ1'" :id="'myChart6'" :data="option8" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='ED1'" :id="'myChart7'" :data="option11" :style="{width: '100%', height: '100%'}"></linegraph>
          </div>
        </div>
      </div>
      <!-- 小分辨率后两条 -->
      <div class="content-3" v-if="!isshowScreen">
        <div class="half-content_2 col-lg-6" v-for="(item, index) in chartList3" :key="index">
          <div class="content_left_title" v-if='istitleshow(item.targetCode, 1)'>
            <p class="content_left_title_p content_left_title_p1">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></p>
            <p class="content_left_title_p content_left_title_p2" v-if="item.targetCode!=='ED1'">{{item.chartDetail.targetName}}</p>
            <p class="content_left_title_p content_left_title_p2" v-else>
              <span @click="{isshowop11 = !isshowop11}">{{targetlist_name}}</span>
              <img style="vertical-align:baseline"  @click="{isshowop11 = !isshowop11}" src="../../assets/images/icon/下 拉 拷贝 3.png" />
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
          <div v-else class="content_left_title2">{{item.chartDetail.chartTitle}}<span v-if="item.targetCode === 'EA2'">（{{item.targetValue}}）</span></div>
          <div class="right">
            <linegraph v-if="item.targetCode==='EA1'" :id="'myChart1'" :data="option6" :style="{width: '100%', height: '100%'}"></linegraph>
            <linegraph v-if="item.targetCode==='EA2'" :id="'myChart2'" :data="option" :style="{width: '100%', height: '100%'}"></linegraph>
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
            <p style="flex: 1;font-size: 17px;">{{infoListobj.title}}<span style="color: #2D80CC" v-if="infoList">（{{infoList.length}}）</span></p>
            <span style="color: #999999;font-size: 12px" @click="rowUrl(infoListobj.linkUrl)">查看更多 ></span>
          </div>
          <div style="height:245px;" :class="{activescroll:infoList.length > 6}" v-if="infoList">
            <div class="list_line" v-for="(item,index) in infoList" :key="index" @click="infocli(item)">
              <span class="list_l_span list_l_span1">{{item.xh?item.xh:''}}、{{item.summary?item.summary:''}}</span>
              <span class="list_l_span list_l_span2">{{item.lastUserName?item.lastUserName:''}}</span>
              <span class="list_l_span list_l_span3">{{item.sendtime?item.sendtime:''}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 table">
        <div class="table-content">
          <div class="table-title">
            <div style="flex: 1;display: flex;flex-direction: row;align-items: center">
              <div class="table_title_div" :class="{warningactive:warningnum==2}" @click="warningnum = 2">预警<span style="color: #2D80CC">（{{warninglist[2].length}}）</span></div>
              <div class="table_title_div" :class="{warningactive:warningnum==1}" @click="warningnum = 1">将到期<span style="color: #2D80CC">（{{warninglist[1].length}}）</span></div>
              <div class="table_title_div" :class="{warningactive:warningnum==0}" @click="warningnum = 0">已逾期<span style="color: #F8B551">（{{warninglist[0].length}}）</span></div>
            </div>
            <span style="color: #999999;font-size: 12px" @click="rowUrl(warninglistUrl)">查看更多 ></span>
          </div>
          <div style="height:245px;" :class="{activescroll:warninglist[warningnum].length > 6}" v-if="warninglist[warningnum]">
            <div class="tableline-warning" v-for="(item, index) in warninglist[warningnum]" :key="index">
              <div class="table-line-warning">
                <p class="tableline-warning-p" @click="warningcli(item)" style="">{{index+1}}、{{item.warningMsg}}</p>
                <img class="tableline-warning-img" src="../../assets/images/icon/js.png" alt="">
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
import {reqhomeiconList, reqinfoList, reqwarninglist, reqechartsList, reqLogin} from '../../api/index'
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
      targetlist_name: '',
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
      echartsList: [
        [], [], [], [], [], []
      ],
      echartsListEA: [],
      rowiconlist: [
        require('../../assets/images/icon/zcgl.png'),
        require('../../assets/images/icon/zlzc.png'),
        require('../../assets/images/icon/ksgl.png'),
        require('../../assets/images/icon/htgl.png'),
        require('../../assets/images/icon/htjs.png'),
        require('../../assets/images/icon/zhjf.png')
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
    this.getwarninglist(userid, comid)
    this.getechartsList(projectid, userid, comid)

    // let comid = '433222a1_5cde_4276_9118_b6ef910c5845'
    // let userid = '3c5b0122_bb4b_4f83_b2c7_bb3891906fe9'
    // let projectid = '1e71d939_df04_4a5a_9546_60862b0f5c85'
    // this.getLogin(projectid, userid, comid)

    this.gethomeiconList(userid, comid)
    this.getinfoList(userid, comid)
  },
  watch: {
  },
  methods: {
    numdraction (num) {
      if (num === null && num === undefined) {
        return num
      } else if (num.toString().length >= 5) {
        return num.toString().slice(0, -4) + '万'
      } else {
        return num
      }
    },
    judegtitlespan4 (value) {
      if (value !== undefined && value[0] === '-') {
        return false
      } else if (value !== undefined && value[0] !== '-') {
        return true
      }
    },
    judgeFormat (num) {
      if (num.split(',')[1] !== undefined) {
        return num.split(',')[0] + num.split(',')[1]
      } else {
        return num
      }
    },
    op11Cli (index) {
      let targetCode = 'ED1'
      this.isshowop11 = !this.isshowop11
      this.op11index = index
      var indexs = this.forindex(targetCode)
      if (indexs === null) { return }
      console.log()
      if (this.echartsListEA[this.forindex(targetCode)].chartDetail.targetList.length === 0) { return }
      this.targetlist_value = this.echartsListEA[this.forindex(targetCode)].chartDetail.targetList[this.op11index].value
      this.targetlist_name = this.echartsListEA[this.forindex(targetCode)].chartDetail.targetList[this.op11index].name
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
          'EC1',
          'EA1',
          'EJ1',
          'EB1',
          'EX',
          'EA',
          'ED1'
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
    // 登录
    getLogin (projectid, userid, comid) {
      reqLogin().then(res => {
        this.getwarninglist(userid, comid)
        this.getechartsList(projectid, userid, comid)
        // 登录
      }).catch(err => {
        console.log(err, '自动登录处理失败')
      })
    },
    // 顶部按钮数据
    gethomeiconList (userid, comid) {
      reqhomeiconList(userid, comid).then(res => {
        this.rowheaderlist = res.data.data.data
      }).catch(err => {
        console.log(err, '顶部按钮数据处理失败')
      })
    },
    // 待办数据
    getinfoList (userid, comid) {
      reqinfoList(userid, comid).then(res => {
        if (res.data.data.data.infoList === null) {
          this.infoList = []
        } else {
          this.infoList = res.data.data.data.infoList
        }
        this.infoListobj = res.data.data.data
      }).catch(err => {
        console.log(err, '待办数据处理失败')
      })
    },
    // 预警数据
    getwarninglist (userid, comid) {
      reqwarninglist(userid, comid).then(res => {
        res.data.data.data.infoList.forEach(item => {
          if (item.oweDays < 0) {
            this.warninglist[0].push(item)
          } else if (item.oweDays > 0) {
            this.warninglist[1].push(item)
          }
          this.warninglist[2].push(item)
        })
        this.warninglistUrl = res.data.data.data.linkUrl
      }).catch(err => {
        console.log(err, '预警数据处理失败')
      })
    },
    // 指标图数据
    getechartsList (projectid, userid, comid) {
      // console.log(projectid)
      // let projectid = '1e71d939_df04_4a5a_9546_60862b0f5c85'
      // console.log(projectid)
      reqechartsList(projectid, userid, comid).then(res => {
        this.echartsListEA = res.data.data.data.chartList
        this.arrsize(this.echartsListEA.length)
        // // 将指标数据表中的所有数据删选加入到EA1list中
        this.echartsListEA.map(item => {
          item.chartDetail = JSON.parse(item.chartDetail)
        })
        this.getList()
        this.setChart()
        this.setChart1()
        this.setChart2()
        this.setChart3()
        this.setChart4()
        this.setChart5()
        this.setChart6()
        this.setChart7()
        this.setChart8()
        this.setChart9()
        this.setChart10()
        // this.setChart11()
        this.op11Cli(0)
        this.isshowop11 = !this.isshowop11
        this.onresize()
        // 预警数据
      }).catch(err => {
        console.log(err, '处理失败')
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
      this.chartList1 = a.slice(2, 3)
      this.chartList2 = a.slice(0, 2)
      this.chartList3 = a.slice(-2)
      this.chartList4 = a.slice(2, 4)
      console.log(this.chartList1, this.chartList2, this.chartList3, this.chartList4)
    },
    setChart () {
      var targetCode = 'EA2'
      var index = this.forindex(targetCode)
      if (index === null) { return }
      if (this.echartsListEA[index].chartDetail.areaList.length === 0) { return }
      var i = 0
      var value = null
      // 租售率
      this.option = {
        legend: {
          // selectedMode: false,
          padding: [-9, 0, -9, 0],
          icon: 'circle',
          itemWidth: 10,
          left: 0,
          orient: 'vertical',
          itemGap: this.isAdaptation(3, 30),
          height: this.isAdaptation(30, 200),
          textStyle: {
            fontSize: this.isAdaptation(10, 12)
          },
          top: this.isAdaptation('90%', '30%'),
          data: this.echartsListEA[index].chartDetail.areaList,
          formatter: (params) => {
            if (this.echartsListEA[index].chartDetail.areaList[i].name === params) {
              value = this.echartsListEA[index].chartDetail.areaList[i].value
            }
            i++
            if (i >= this.echartsListEA[index].chartDetail.areaList.length) {
              i = 0
            }
            return params + ' : ' + value.split('.')[0] + 'm²'
          }
        },
        title: [{
          text: this.numdraction(parseInt(this.echartsListEA[index].chartDetail.centerValue)) + '㎡',
          textStyle: {
            fontSize: 16
          },
          textAlign: 'center',
          left: this.isAdaptation('49.5%', '69%'),
          top: this.isAdaptation('34%', '43%'),
          subtext: '总面积',
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
            // minShowLabelAngle: '2',
            // hoverAnimation: false,
            name: '访问来源',
            type: 'pie',
            radius: [this.isAdaptation('32%', '47%'), this.isAdaptation('45%', '65%')],
            top: this.isAdaptation('-7%', '5%'),
            left: this.isAdaptation('0%', '40%'),
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
                  lineStyle: {
                    type: 'solid'
                  }
                },
                label: {
                  formatter: '{b|{b}}\n{d|{d}%}',
                  rich: {
                    b: {
                      fontSize: 11,
                      padding: [0, 0],
                      color: '#666666'
                    },
                    d: {
                      fontSize: 11,
                      padding: [0, 0],
                      color: '#666666'
                    }
                  }
                  // alignTo: 'labelLine',
                  // margin: '-10%',
                }
              }
            },
            label: {
              normal: {
                show: true
              },
              emphasis: {
                // show: false// 鼠标悬停隐藏label
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: this.echartsListEA[index].chartDetail.areaList
          }
        ]
      }
    },
    // 收缴率
    setChart1 () {
      // let targetCode =
      var data = [
        [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 110, 120, 48.7, 18.8, 6.0, 2.3],
        [92, 91, 91.5, 92.3, 93.6, 91, 92.5, 91, 92, 93, 93, 93.5]
      ]
      var numberm = (arr) => {
          var ss = Math.round((Math.max(...arr) - Math.min(...arr)) / 7)
          ss = ss - ss % 5 + 5
          var min = Math.floor(Math.min(...arr) / ss) * ss
          var obj = {
              min: min,
              max: ss * 7,
              ss: ss
          }
          // console.log(obj)
          return obj
      }
      // var targetCode = 'EX'
      this.option1 = {
        title: {
          // show: this.,
          text: '合同租金单价趋势图',
          textStyle: {
            fontSize: 13,
            color: '#2D80CC'
          }
        },
        grid: {
          left: '5',
          right: '5',
          bottom: -3,
          // top: '55',
          containLabel: true
        },
        legend: {
          textStyle: {
            fontSize: 10
          },
          itemWidth: 10,
          icon: 'circle',
          width: 200,
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
            min: numberm(data[0]).min,
            max: numberm(data[0]).max,
            interval: numberm(data[0]).ss,
            axisLabel: {
              formatter: '{value} ',
              textStyle: {
                fontSize: 10
              }
            },
            splitLine: {
            },
            axisTick: {
                show: false
            }
        },
        {
            type: 'value',
            min: 90.5,
            max: 94,
            interval: 0.5,
            axisLine: {
              show: false
            },
            axisLabel: {
              formatter: (params) => {
                // console.log(params)
                if (params % 1 !== 0) {
                  return params + '%'
                } else {
                  return params + '.0%'
                }
              },
              interval: 0,
              fontSize: 11
            },
            splitLine: {
            },
            axisTick: {
              show: false
            }
        }
      ],
      series: [
          {
            yAxisIndex: 0,
              name: '有效租金单价',
              type: 'bar',
              data: data[0],
              barWidth: '45%',
              itemStyle: {
                color: '#FED130'
              }
          },
          {
            smooth: true,
              symbol: 'circle',
              symbolSize: 4,
              name: '平均租金单价',
              nameTextStyle: {
                fontSize: 8
              },
              type: 'line',
              lineStyle: {
                color: '#F97678'
              },
              yAxisIndex: 1,
              data: data[1]
          }
        ]
      }
    },
    // // 租售比
    setChart2 () {
      var data = [
        [100, 200, 300, 500, 500, 400, 500, 400, 200, 300, 100, 400],
        [300, 300, 406, 530, 510, 520, 444, 400, 510, 400, 350, 300]
      ]
      this.option2 = {
        grid: {
          left: '5',
          right: '10',
          bottom: '-3',
          top: '60',
          containLabel: true
        },
        title: [
          {
          text: '收缴率',
          textStyle: {
            color: '#2D80CC',
            fontSize: 18
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
            name: '2020年',
            smooth: true,
            type: 'line',
            symbol: 'none',
            data: data[0],
            lineStyle: {
              normal: {
                width: 1,
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
            name: '2019年 ',
            smooth: true,
            type: 'line',
            symbol: 'none',
            data: data[1],
            lineStyle: {
                normal: {
                  width: 1,
                  color: '#F8952F',
                  opacity: 0.9
                }
            }
            }
          ]
        }
    },
    // 合同租金单价趋势图
    setChart3 () {
      var data = [
        [{
            value: 22.73,
            name: '年'
        }, {
            value: 34,
            name: '月'
        }, {
            value: 62.43,
            name: '日'
        }],
        [{
            value: 22.73,
            name: '年'
        }, {
            value: 34,
            name: '月'
        }, {
            value: 85.3,
            name: '日'
        }]
      ]
      // var chartName = ['2016', '2017', '2018']
      var labelName = ['预算情况', '实际情况']
      this.option3 = {
        grid: {
          x2: 20,
          left: '20',
          right: '30',
          bottom: '',
          top: '18%',
          containLabel: true
        },
        title: {
          text: '预算达成情况',
          textStyle: {
            fontSize: 18,
            color: '#2D80CC'
          }
      },
      legend: {
        show: true,
        itemHeight: 18,
        icon: 'circle',
        itemWidth: 10,
        data: labelName,
        right: '0'
      },
      yAxis: {
        data: ['累计收入', '平均出租率', '累计收缴率'],
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
          margin: 6,
          formatter: (value) => {
            var ss = '    '
            return '{value|' + value + '}' + '' + '{icon|' + ss + '}'
          },
          rich: {
                value: {
                    width: 0,
                    align: 'right',
                    padding: [0, 10, 0, 0],
                    fontSize: 12
                },
                icon: {
                    backgroundColor: {
                      image: require('../../assets/images/icon/2020-07-01_175658.png')
                    },
                    height: 22,
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
        max: 100,
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
        barWidth: '23%',
        label: {
          show: true,
          position: 'right',
          fontSize: 12,
          color: '#000',
          formatter: (params) => {
            return params.value + params.name
          }
        },
        barCategoryGap: '40%',
        barGap: '20%',
        data: data[0],
        itemStyle: {
          color: '#FED130'
        }
      }, {
        name: labelName[1],
        type: 'bar',
        barGap: '20%',
        label: {
          show: true,
          position: 'right',
          fontSize: 12,
          color: '#000',
          formatter: (params) => {
            // console.log(params)
            return params.value + params.name
          }
        },
        barWidth: '23%',
        data: data[1],
        itemStyle: {
          color: '#52BCF8'
        }
      }]
      }
    },
    // 预算完成率
    setChart4 () {
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
        dataArray.push({ id: 'sqjjhz', name: '社区居家照护', value: 1100, zs: 1578, colora: '#fff', colorb: '#fff', color: ['#fff', '#fff'] })
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
              var getRandomColor = () => {
                return '#' + Math.floor(Math.random() * 16777215).toString(16)
            }
          data.forEach((item, index) => {
          titleData.push({
            value: item.value,
            text: ' ',
            left: index % 2 === 0 ? 25 * 1 + '%' : 37 * 2 + '%',
            itemGap: 5,
            top: index < 2 ? 30 + '%' : 70 + '%',
            textAlign: 'center',
            textStyle: {
                fontSize: 19,
                color: '#000',
                fontWeight: '400'
            },
            subtext: '到期合同份数 : ' + item.number + item.type,
            subtextStyle: {
                // x:'80%',
                fontSize: 14
            }
          })
          seriesData.push({
            label: {
              show: false
            },
              startAngle: -180,
              type: 'pie',
              radius: ['35%', '48%'],
              center: [index % 2 === 0 ? 25 * 1 + '%' : 37 * 2 + '%', index < 2 ? 42 + '%' : 82 + '%'],
              data: data1,
            itemStyle: {
              color: (params) => {
                // console.log(params)
                if (params.name === '占') {
                  return getRandomColor()
                } else {
                  return '#DCDCDC'
                }
              }
            }
          })
        })
        titleData.push({
        text: '续租率（' + '99%' + '）',
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
    // 有效租金单价
    setChart5 () {
      var data = [
      {
          name: '装备制造',
          value: 80.5,
          size: 550
      }, {
          name: '现代材料',
          value: 43,
          size: 800
      }, {
          name: '新能源',
          value: 65,
          size: 1200
      }]
        var seriesData = []
        var titleData = []
        data.forEach((item, index) => {
          titleData.push({
            value: item.value,
            text: data[index].value + '%',
            left: index === 0 ? [17 * (index + 1)] + '%' : index === 1 ? [24.5 * (index + 1)] + '%' : [27 * (index + 1)] + '%',
            itemGap: 0,
            top: '42%',
            textAlign: 'center',
            textStyle: {
              fontSize: '16',
              color: '#000',
              fontWeight: '400'
            }
            // subtext: `{b_title|${item.name}}\n{b_unit|${item.size}}M`,
            // subtextStyle: {
            //     rich: {
            //       b_title: {
            //         fontSize: 18,
            //         padding: [0, 0, 0, 0],
            //         color: '#666666'
            //       },
            //       b_unit: {
            //         fontSize: 14,
            //         padding:  [30, 0, 0, 0]
            //         // color: '#fff'
            //       }
            //     }
            //     // alignTo: 'labelLine',
            //     // margin: '9%'
            // }
          }, {
            // value: item.value + '\n' + item.size,
            text: `{b_title|${item.name}}\n{b_unit|${item.size}M}`,
            left: index === 0 ? [17 * (index + 1)] + '%' : index === 1 ? [24.5 * (index + 1)] + '%' : [27 * (index + 1)] + '%',
            itemGap: 0,
            top: '75%',
            textAlign: 'center',
            textStyle: {
              rich: {
                  b_title: {
                    fontSize: 18,
                    padding: [5, 0, 0, 0],
                    color: '#666666'
                  },
                  b_unit: {
                    fontSize: 14,
                    padding: [10, 0, 0, 0]
                    // color: '#fff'
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
            radius: ['39%', '45%'],
            center: [index === 0 ? [18 * (index + 1)] + '%' : index === 1 ? [25 * (index + 1)] + '%' : [27.5 * (index + 1)] + '%', '48%'],
            data: [{
                    labelLine: {show: false},
                    value: item.value,
                    name: data.text,
                    itemStyle: {
                        normal: {
                             borderWidth: 9,
                            borderColor: getRandomColor()
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
        text: '九十天内到期合同面积及其占比',
        textStyle: {
          fontSize: 18,
          color: '#2D80CC'
        }
      })
      this.option5 = {
        title: titleData,
        series: seriesData
      }
    },
    // // 出租率
    setChart6 () {
      var targetCode = 'EA1'
      var index = this.forindex(targetCode)
      if (index == null) { return }
      if (this.echartsListEA[index].chartDetail.areaList.length === 0) { return }
      // var obj = "{\"chartTitle\":\"当前出租率\",\"targetName\":\"当前出租率\",\"targetValue\":\"0.46%\",\"centerTitle\":\"出租率及空置情况\",\"centerValue\":\"222939.1500㎡\",\"areaList\":[{\"name\":\"商铺:39.17%\",\"value\":\"87330.6000\"},{\"name\":\"广告位:2.09%\",\"value\":\"4651.0000\"},{\"name\":\"卡座:0.01%\",\"value\":\"12.0000\"},{\"name\":\"停车位:2.41%\",\"value\":\"5371.0000\"},{\"name\":\"写字楼:56.33%\",\"value\":\"125574.5500\"}]}"
      // obj = JSON.parse(obj).areaList
      // console.log(this.echartsListEA[index].chartDetail.areaList)
      // let dom = 'myChart'
      this.option6 = {
        title: [{
          text: this.numdraction(parseInt(this.echartsListEA[index].chartDetail.centerValue.split('㎡')[0])) + '㎡',
          textStyle: {
            fontSize: 14,
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
          y: '85%'
        }
        ],
        series: [
          {
            stillShowZeroSum: true,
            // hoverAnimation: false,
            avoidLabelOverlap: true,
            minShowLabelAngle: '1',
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
                  // length: 5
                  // length2: 5
                },
                label: {
                  alignTo: 'labelLine',
                  margin: '-10%',
                  // distanceToLabelLine: 10,
                  formatter: (params) => {
                    if (params.value.indexOf('.') !== -1) {
                      params.value = Math.floor(params.value * 100) / 100
                    }
                    return `${params.name}\n{hr|}\n{c|${params.value}㎡}`
                  },
                  rich: {
                    b: {
                      fontSize: 11,
                      align: 'left',
                      padding: [2, 0],
                      color: '#666666'
                    },
                    d: {
                      fontSize: 11,
                      align: 'center',
                      padding: [2, 0],
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
                      padding: [2, 0],
                      color: '#666666'
                    }
                  }
                }
              }
            },
            label: {
              normal: {
                show: true
                // formatter: function (params) {
                //   console.log(params)
                // }
              },
              emphasis: {
                // show: false
              }
            },
            data: this.echartsListEA[index].chartDetail.areaList
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
    setChart7 () {
      var targetCode = 'EC1'
      var index = this.forindex(targetCode)
      if (index == null) { return }
      if (this.echartsListEA[index].chartDetail.collectionList.length === 0) { return }
      // console.log(this.echartsListEA[index].chartDetail)
      this.echartsListEA[index].chartDetail.echartlist = [[], []]
      this.echartsListEA[index].chartDetail.collectionList.forEach(item => {
        this.echartsListEA[index].chartDetail.echartlist[0].push(item.name)
        let value = parseInt(item.value.split('%')[0])
        let obj = {
          value: value,
          description: item.description
        }
        this.echartsListEA[index].chartDetail.echartlist[1].push(obj)
      })
      // console.log(this.echartsListEA[index].chartDetail.echartlist)
      // console.log()
      this.option7 = {
        grid: {
          left: 10,
          right: 10,
          bottom: -3,
          top: '35',
          containLabel: true
        },
        title: [
        ],
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
            show: false,
            lineStyle: {
              color: 'rgba(221,155,131,0)'
            }
          }
        },
        // formatter: '欠款金额 ：123 <br/> 收缴率：{c0}‰<br/>',
        formatter: function (params) {
          // console.log(params[0].data.description)
          return params[0].axisValue + '月' + '<br/>' + '欠款金额：' + params[0].data.description + '<br/>' + '收缴率：' + params[0].value + '%'
        },
        // grid: {
        //   y: 45,
        //   x2: 20,
        //   left: '10',
        //   right: '10',
        //   bottom: '0',
        //   top: '25%',
        //   containLabel: true
        // },
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
            data: this.echartsListEA[index].chartDetail.echartlist[0]
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
            formatter: '{value}%',
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
          data: this.echartsListEA[index].chartDetail.echartlist[1],
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
    // 租售比
    setChart8 () {
      var targetCode = 'EJ1'
      let index = this.forindex(targetCode)
      if (index == null) { return }
      console.log(this.echartsListEA[index].chartDetail.rentalSaleList)
      if (this.echartsListEA[index].chartDetail.rentalSaleList.length === 0) { return }
      let arr = this.echartsListEA[index].chartDetail.rentalSaleList.filter((item, index) => {
        if (item.value.indexOf('万元') !== -1) {
          return true
        } else {
          return false
        }
      })
      arr.map(item => {
        if (item.value.indexOf('万元') !== -1) {
          item.value = parseInt(item.value.split('万元')[0])
        }
        return item
      })
      this.option8 = {
        title: [{
          text: this.echartsListEA[index].chartDetail.centerValue,
          textStyle: {
            fontSize: 14,
            color: 'black'
          },
          textAlign: 'center',
          x: '48%',
          y: '45%'
        }, {
          subtext: '上月租售比及销售额',
          subtextStyle: {
            fontSize: 14,
            color: '#333333'
          },
          textAlign: 'center',
          x: '49%',
          y: '86%'
        }
        ],
        grid: {
          right: '10',
          bottom: '0',
          top: '25%',
          containLabel: true
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            itemStyle: {
              normal: {
                // color: function (params) {
                //   if (params.name === '服装') {
                //     return '#339AF8'
                //   } else if (params.name === '餐饮') {
                //     return '#F8B551'
                //   } else {
                //     return '#D2D2D2'
                //   }
                // },
                label: {
                  formatter: '{b|{b}}{d|{d}%}\n{hr|}\n{c|{c}万元}',
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
                // show: false
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: arr
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
    setChart9 () {
      var targetCode = 'EB1'
      let index = this.forindex(targetCode)
      if (index == null) { return }
      if (this.echartsListEA[index].chartDetail.efficiencyList.length === 0) { return }
      let arr = [
        [], [], []
      ]
      this.echartsListEA[index].chartDetail.efficiencyList.forEach((item, index) => {
        arr[0].push(item.name)
        arr[1].push(item.value)
        arr[2].push(item.description)
      })
      this.option9 = {
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
          icon: 'roundRect',
          data: [{name: '坪效', icon: 'roundRect'}, {name: '销售额'}],
          textStyle: {
            color: '#666'
          }
        },
        xAxis: [{
          // nameGap: '-20',
          type: 'category',
          boundaryGap: true,
          axisLine: { // 坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#D2D2D2'
            }
          },
          axisLabel: { // 坐标轴刻度标签的相关设置
          // formatter: (params) => {
          //   console.log(params)
          // },
          label: {
            // normal: {
            // formatter: (params) => {
            //   console.log(params)
            // }
            // }
            },
            interval: 0,
            textStyle: {
              color: '#666666',
              margin: 15
            }
          },
          axisTick: {
            show: false
          },
          data: arr[0]
        }],
        // eslint-disable-next-line no-sparse-arrays
        yAxis: [{
          name: '元               ',
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
          name: '                   万元',
          type: 'value',
          // formatter: '{value} 万元',
          // splitNumber: 3,
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
          // max: Math.max(...arr[1]),
          min: Math.min(...arr[1]),
          boundaryGap: [0.9, 0.9]
        }],
        series: [{
          yAxisIndex: 1,
          name: '坪效',
          type: 'line',
          smooth: true, // 是否平滑曲线显示
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 5,
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
          data: arr[1]
        }, {
          yAxisIndex: 0,
          name: '销售额',
          type: 'bar',
          barGap: '80%',
          barCategoryGap: '50%',
          barWidth: '50%',
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
          data: arr[2]
        }]
      }
    },
    // 预算完成率
    setChart10 () {
      var data = [78, 60, 60]
      var titlename = ['本年完成', '本月完成', '上月完成']
      var valdata = [50, 130, 77]
      var myColor = ['#339AF8', '#26C6DA', '#F7B310']
      this.option10 = {
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
    setChart11 () {
      var targetCode = 'ED1'
      var index = this.forindex(targetCode)
      if (index === null) { return }
      if (this.echartsListEA[index].chartDetail.dayList.length === 0) { return }
      this.echartsListEA[index].chartDetail.DetailList = [
        [
          [], [], []
        ], [
          [], [], []
        ], [
          [], [], []
        ]
      ]
      this.echartsListEA[index].chartDetail.dayList.forEach(item => {
        this.echartsListEA[index].chartDetail.DetailList[0][0].push(item.name)
        this.echartsListEA[index].chartDetail.DetailList[0][1].push(this.judgeFormat(item.value))
        this.echartsListEA[index].chartDetail.DetailList[0][2].push(this.judgeFormat(item.description))
      })
      this.echartsListEA[index].chartDetail.monthList.forEach(item => {
        this.echartsListEA[index].chartDetail.DetailList[1][0].push(item.name)
        this.echartsListEA[index].chartDetail.DetailList[1][1].push(this.judgeFormat(item.value))
        this.echartsListEA[index].chartDetail.DetailList[1][2].push(this.judgeFormat(item.description))
      })
      // this.echartsListEA[index].chartDetail.target.forEach(item => {
      //   this.echartsListEA[index].chartDetail.DetailList[2][0].push(item.name)
      //   this.echartsListEA[index].chartDetail.DetailList[2][1].push(this.judgeFormat(item.value))
      //   this.echartsListEA[index].chartDetail.DetailList[2][2].push(this.judgeFormat(item.description))
      // })
      this.option11 = {
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
          // selectedMode: false, // 取消图例上的点击事件
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
            data: this.echartsListEA[index].chartDetail.DetailList[this.op11index % 2][0],
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#D2D2D2'
              }
            },
            axisLabel: {
              rotate: 40,
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
            data: this.echartsListEA[index].chartDetail.DetailList[this.op11index % 2][1],
            barWidth: 10
          },
          {
            name: '在租合同单价',
            type: 'bar',
            stack: '排名',
            data: this.echartsListEA[index].chartDetail.DetailList[this.op11index % 2][2],
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
            width: 65%;
            margin-left: 22px
        }
        .list_l_span2{
            width: 15%;
        }
        .list_l_span3{
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
    font-size: 15px;
    font-weight: 600
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
  .content_left_title2{
    position: absolute;
    font-size: 15px;
    font-weight: 600;
    color: #0F6DC7
  }
</style>
