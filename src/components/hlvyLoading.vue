<template>
    <div
          :style="{zIndex:zindex,backgroundColor:bgkcolor,Width:wdPx,Height:htpx}"
          class="divloding"
          v-if="fullscreenLoading"
         >
        <p class="iconcls "></p>
        <p class="pcls center">&emsp;{{text}}</p>


    </div>
</template>

<script>
    export default {
      name: "loading",
      props:{
        //提示内容
        text:{
          type:String,
          default:'加载中...'
        },
        //显示与隐藏
        fullscreenLoading:{
          type:Boolean,
          default:false
        },
        //z-index
        zindex:{
          type:Number,
          default:9999999999
        },
        //背景颜色
        bgkcolor:{
          type:String,
          default:'rgba(0, 0, 0, 0.8)'
        },
        //宽度
        wdPx:{
          type:String,
          default:'100%'
        },
        //高度
        htpx:{
          type:String,
          default:'100%'
        },

      },
    }
</script>

<style scoped>
.divloding{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transition: opacity .3s;
   transition: opacity .3s;
  z-index: 999999;
  color: #409EFF;
  font-size: 14px;
}
.iconcls{
  position: absolute;
  top:46%;
  left: 50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
  }
.iconcls:before {
  content: "\E61E";
}

.pcls i {
  color: #409EFF;
}

.iconcls {
  -webkit-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
[class*=" iconcls"], [class^=iconcls] {
  font-family: element-icons!important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
