<template>
      <!--第一个图表-->
      <div class="col-xs-4 col-sm-4 content-1" >
        <div>
          <div class="title">
            <slot name="title"></slot>
          </div>
          <slot></slot>
          <!--          <div class="encharts" :id=item.id :style="{width: '100%', height: '200px'}"></div>-->
        </div>
      <!--第二个图表-->
<!--      <div class="col-xs-4 col-sm-4 content-1" >-->
<!--        <div>-->
<!--          <div class="title">-->
<!--            <b>收缴率</b>-->
<!--            <h4>89.50% <span>上月收缴率</span></h4>-->
<!--          </div>-->
<!--          <slot></slot>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash;第三个图表&ndash;&gt;-->
<!--      <div class="col-xs-4 col-sm-4 content-1" >-->
<!--        <div>-->
<!--          <div class="title">-->
<!--            <b>租售比</b>-->
<!--            <h4>89.50% <span>上月租售比</span></h4>-->
<!--          </div>-->
<!--          <slot></slot>-->
<!--        </div>-->
<!--      </div>-->
    </div>
</template>

<script>
// import {EleResize} from '../../assets/js/commen'
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  mounted () {
  },
  created () {
    // console.log($)
  },
  methods: {
  }
}
</script>

<style scoped>
  .main{
    margin: 25px;
  }
  .mid-box{
    margin-top: 25px;
  }
  .content-1>div{
    background: beige;
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
  /*.content-1>div .title b{*/
  /*  color: #000;*/
  /*  font-size: 20px;*/
  /*}*/
  /*.content-1>div .title h4{*/
  /*  color: #2D80CC;*/
  /*  margin-top: 20px;*/
  /*  padding-bottom: 30px;*/
  /*  border-bottom: 1px solid #ddd;*/
  /*}*/
  /*.content-1>div .title span{*/
  /*  color: #333333;*/
  /*  font-size: 16px;*/
  /*}*/
</style>
