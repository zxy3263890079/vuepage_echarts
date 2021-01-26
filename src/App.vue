<template>
  <div id="app">
    <div class="app_Mask" @click="show_Mask" v-if="showMask"></div>
    <keep-alive>
      <router-view :isshowMask = 'isshowMask' :arrsize = 'arrsize' />
    </keep-alive>
<!--    <div class="fullpage-container">-->
<!--      <div class="fullpage-wp" v-fullpage="opts">-->
<!--        <div class="page-1 page">-->
<!--          <p class="part-1" v-animate="{value: 'bounceInLeft'}">vue-fullpage</p>-->
<!--        </div>-->
<!--        <div class="page-2 page">-->
<!--          <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage</p>-->
<!--        </div>-->
<!--        <div class="page-3 page">-->
<!--          <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>-->
<!--          <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">vue-fullpage</p>-->
<!--          <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">vue-fullpage</p>-->
<!--        </div>-->
<!--      </div>-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--    <div class="w">-->
<!--      <div class="box">-->
<!--        <router-view />-->
<!--      </div>-->
<!--&lt;!&ndash;      <foot />&ndash;&gt;-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      arrlength: null,
      showMask: false,
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      }
    }
  },
  methods: {
    show_Mask () {
      this.showMask = !this.showMask
    },
    isshowMask () {
      this.showMask = !this.showMask
    },
    arrsize (size) {
      this.arrlength = size
      console.log(size)
    }
  },
  watch: {
    arrlength () {
      let pwindow = window.parent
      var ScreenWidth = 1600
      let iframeheight = null
      if (screen.width > ScreenWidth || this.arrlength === 4) {
        iframeheight = '935px'
      } else if (this.arrlength > 4) {
        iframeheight = '1201px'
      } else if (this.arrlength === 3) {
        iframeheight = '951px'
      }
      if(pwindow.document.getElementsByClassName('container')[0]&&pwindow.document.getElementsByClassName('zxct_bs_iframe')[0]){
      console.log(pwindow.document.getElementsByClassName('container')[0],'1111')
      console.log(pwindow.document.getElementsByClassName('zxct_bs_iframe')[0])
      pwindow.document.getElementsByClassName('container')[0].style.paddingLeft = '0px'
      pwindow.document.getElementsByClassName('container')[0].style.paddingRight = '0px'
      pwindow.document.getElementsByClassName('zxct_bs_iframe')[0].style.height = iframeheight
      pwindow.document.getElementsByClassName('zxct_bs_iframe')[0].style.marginBottom = '-5px'
      pwindow.document.getElementById('content').style.marginTop = '0px'
      }
    }
  },
  mounted () {
  },
  created () {
  },
  Updated () {
  }
}
</script>

<style>
  .app_Mask{
    width: 100%;
    height: 850px;
    margin-top: -25px;
    z-index: 9;
    position: absolute;
    background-color: rgba(0, 0 ,0 , 0.5);
  }
  html, body {
    min-width: 900px;
    width: 100%;
    /* min-height: 100%; */
    background-color: #F4F6FA;
    min-height: 828px;
  }
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    background-color: #F4F6FA;
  }
	.home-root{
    min-width: 1395px;
		overflow-x: hidden !important;
	}
</style>
