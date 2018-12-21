<template>
  <div id="app">
  <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App',
    /**
     * 监听浏览器刷新
     */
    beforeCreate(){
   /*   this.$router.push({
      })*/
   /*window.location = "https://heng1234.github.io/vuePro/hlvy/"*/
    }
  }
</script>
<style lang="scss">
  /*引入无须编译的css文件*/
  @import './assets/css/oscss.css';
  @import "./assets/css/varuables.scss";
  @import "./assets/css/ovflow.css";
/*#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  }*/

  *{margin: 0;padding: 0;}
  html,body{width: 100%;height: 100%;min-width: 1024px}
  #app{height: 100%;position: relative}
  body { background:#fff; color:#555; font-size:14px; font-family:Microsoft YaHei;user-select: none}
  td,th,caption { font-size:12px; }
  h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
  address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
  a { color:#555; text-decoration:none; }
  /*a:hover { text-decoration:underline; }*/
  img { border:none; }
  ol,ul,li { list-style:none; }
  input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; -webkit-user-select: none;}
  table { border-collapse:collapse; }
  /*清除浮动*/
  .clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
  .clearfix{_height:1%;}
  /*上下居中*/
  .topCenter{
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
  }
  /*左右居中*/
  .leftCenter{
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    -webkit-transform: translate(-50%,0);
    -moz-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    -o-transform: translate(-50%,0);
  }
  /*上下左右居中*/
  .center{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
  }

  .btnLogin{
    color: #fff;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: $btnLogin;
    border: 1px solid #dcdfe6;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }



  .content-box {
    position: absolute;
    left: 13%;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: rgba(252,252,255,1);
  }

  .content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
  }

  .content-collapse {
    left: 65px;
  }

  .container {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .el-button--primary {
    color: #fff;
    background-color: rgba(64,158,255,0.8) !important;
    border-color: rgba(64,158,255,0.8) !important;
  }


  /*红色* 必填项*/
  b.require{
    color: #FF0000;
  }
  #app .input-error:after{
    content:"*请输入有效合法的内容！";
    color: #FF0000;
  }
  .el-date-editor.el-input,.el-date-editor.el-input__inner{
    width: 60% !important;
  }


/*  .el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover  {
    outline: 0;
    background-color: #ecf5ff!important;
  }*/

</style>
