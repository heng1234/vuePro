<template>
    <div class="acccls">
        <el-menu class="sidebar-el-menu " :default-active="onRoutes"  :collapse="collapse"
                 background-color="#2b3b4b"
                 text-color="rgb(255,255,255)"
                 style="width: 12.9%"
                 active-text-color="rgba(102,175,255)" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title" >
                            <i :class="item.icon"></i>&nbsp;<span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" :class="{tophome:item.title === '系统首页'}">
                        <i :class="item.icon"></i>&nbsp;<span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '@/components/bus.js';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'iconfont hlvy-icon-shouye',
                        index: 'homePage',
                        title: '系统首页'
                    },
                    {
                        icon: 'iconfont hlvy-icon-xueyuanguanliicon-',
                        index: 'table',
                        title: 'table'
                    },
                    {
                        icon: 'iconfont hlvy-icon-paikeguanliicon-',
                        index: 'datepaick',
                        title: '日历本'
                    },
                    {
                        icon: 'iconfont hlvy-icon-jiaowu',
                        index: 'element-ui',
                        title: 'element-ui',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                index: 'btn',
                                title: 'button'
                            },
                           /* {
                                index: 'VeeValidate',
                                title: 'VeeValidate校验'
                            },*/
                            {
                                index: '3-2',
                                title: '三级菜单',
                                subs: [
                                    {
                                        index: 'vueEdito',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        index: 'markdown',
                                        title: 'markdown编辑器'
                                    },
                                ]
                            },
                            {
                                index: 'elupload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'iconfont hlvy-icon-jiaoyan',
                        index: 'testkey',
                        title: '键盘'
                    },
                    {
                        icon: 'iconfont hlvy-icon-chuqinpingjiaicon-',
                        index: 'highcharts',
                        title: 'highcharts'
                    },
                    {
                        icon: 'iconfont hlvy-icon-wenzhangguanliicon-',
                        index: 'echarts',
                        title: 'echarts'
                    },
                    {
                        icon: 'iconfont hlvy-icon-fangjiashenqingicon-',
                        index: '6',
                        title: '错误处理',
                        subs: [
                            {
                                index: '500',
                                title: '500'
                            },
                            {
                                index: '404',
                                title: '404'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .acccls{
        height: 100%;
    }
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 0px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
       width: 100%;
        height: 100%;
    }
    .sidebar > ul {
        height:100%;
    }
    .tophome{margin-top: 70px}
  /*  .tophome:after{
        margin-left: 6%;
        content: "(" attr(href) ")";
    }*/
</style>
