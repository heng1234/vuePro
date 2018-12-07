<template>
  <div class="home">
      <el-container>

          <el-aside >
              <div class="acccls">
                <!--  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                      <el-radio-button :label="false">展开</el-radio-button>
                      <el-radio-button :label="true">收起</el-radio-button>
                  </el-radio-group>-->
                  <el-menu default-active="1-4-1" style="height: 100%" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                      <el-submenu index="1">
                          <template slot="title">
                              <i class="el-icon-location"></i>
                              <span slot="title">导航一</span>
                          </template>
                          <el-menu-item-group>
                              <span slot="title">分组一</span>
                              <el-menu-item index="1-1">选项1</el-menu-item>
                              <el-menu-item index="1-2">选项2</el-menu-item>
                          </el-menu-item-group>
                          <el-menu-item-group title="分组2">
                              <el-menu-item index="1-3">选项3</el-menu-item>
                          </el-menu-item-group>
                          <el-submenu index="1-4">
                              <span slot="title">选项4</span>
                              <el-menu-item index="1-4-1">选项1</el-menu-item>
                          </el-submenu>
                      </el-submenu>
                      <el-menu-item index="2">
                          <i class="el-icon-menu"></i>
                          <span slot="title">导航二</span>
                      </el-menu-item>
                      <el-menu-item index="3" disabled>
                          <i class="el-icon-document"></i>
                          <span slot="title">导航三</span>
                      </el-menu-item>
                      <el-menu-item index="4">
                          <i class="el-icon-setting"></i>
                          <span slot="title">导航四</span>
                      </el-menu-item>
                  </el-menu>


              </div>
          </el-aside>
          <el-container>
              <!--header-->
              <el-header>
                  <div class="headercls">


                      <div class="header-user-con">
                          <!-- 全屏显示 -->
                          <div class="btn-fullscreen" @click="handleFullScreen">
                              <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                                  <i class="el-icon-rank"></i>
                              </el-tooltip>
                          </div>

                          <!-- 用户头像 -->
                          <div class="user-avator"><img src="../assets/images/login/loginmsg.jpg"></div>
                          <!-- 用户名下拉菜单 -->
                          <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                         {{sessionData.loginName}} <i class="el-icon-caret-bottom"></i>
                    </span>
                              <el-dropdown-menu slot="dropdown">
                                  <a href="https://blog.csdn.net/qq_39313596" target="_blank">
                                      <el-dropdown-item>博客地址</el-dropdown-item>
                                  </a>
                                  <a href="https://github.com/heng1234/vuePro" target="_blank">
                                      <el-dropdown-item>项目仓库</el-dropdown-item>
                                  </a>
                                  <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                              </el-dropdown-menu>
                          </el-dropdown>
                      </div>

              </div>
              </el-header>
              <el-main>

                  <router-view></router-view>

              </el-main>
          </el-container>
      </el-container>


  </div>
</template>

<script>

export default {
  name: 'home',
    data(){
      return{
          sessionData:[],
          fullscreen: false,
          isCollapse: false
      }
    },
    methods:{
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if(command == 'loginout'){
                sessionStorage.removeItem('loginMsg')
                this.$router.push('/login');
            }
        },
        // 侧边栏折叠
        collapseChage(){
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen(){
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    created(){
      this.sessionData =  JSON.parse(sessionStorage.getItem("loginMsg"));
    },
  components: {
  }
}
</script>
<style scoped>
    .home{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .headercls{
        position: absolute;
        left: 0%;
        width: 100%;
        height: 70px;
        background-color: rgba(64,158,255,0.8);
    }
    .acccls{
        position: absolute;
        top: 10%;
        height: 90%;
        width: 200px;
    }


    .user-name{
        position: absolute;
       top:30px;
        left: 90%;
    }
    .user-avator{
        display: inline-block;
        margin-left: 87%;
        margin-top: -15px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
</style>
