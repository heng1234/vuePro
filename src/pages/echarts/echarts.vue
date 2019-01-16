<template>
    <div>
        <div>
            <hlvy-title :text="'echarts'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        </div>
        <div id="myChart" class="lft clearfix" :style="{width: '600px', height: '300px'}"></div>
        <div id="myMap"  class="lft clearfix" ref="myMap" style="width: 600px; height: 300px;"></div>
        <div id="mybt"  class="lft clearfix" ref="mybt" style="width: 600px; height: 300px;"></div>
        <div id="mybts"  class="lft clearfix" ref="mybts" style="width: 600px; height: 300px;"></div>
    </div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');  // 引入柱状图组件
    require('echarts/lib/chart/pie');  // 引入饼状图组件
    require('echarts/map/js/china.js');  // 引入中国地图组件
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    require('echarts/theme/macarons');//引入主题
    require('echarts/theme/shine');//引入主题
import option from './js/map-option'
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                chart: null,


            }
        },
        created(){

        },
        mounted(){
        this.creatE();
        this.drawChinaMap();
        this.creatbt();
        this.creatbts();

    },
       updated() {
            if (!this.chart) {
                this.initChart()
            }
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            this.chart.dispose()
            this.chart = null
        },
        computed: {
        },
    methods: {
        drawChinaMap() {
             this.chart = this.$echarts.init(document.getElementById('myMap'),'macarons');
            this.chart .setOption(option);
        },
        creatE(){

            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '服装销量' ,
                    textStyle:{
                    align: 'center',
                        color:'rgb(0,137,205)',
                    },
                    left:'center'},
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        },
        creatbt(){

            let myChart = this.$echarts.init(document.getElementById('mybt'))
            // 绘制图表
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '16',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            }

        );
        },
        creatbts(){

            let myChart = this.$echarts.init(document.getElementById('mybts'))
            // 绘制图表
            myChart.setOption(
                {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '30%'],

                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直达', selected:true},
                                {value:679, name:'营销广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        },
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['40%', '55%'],
                            label: {
                                normal: {
                                    formatter: ' {b|{b}：}{c}  {per|{d}%}  ',/*{a|{a}}{abg|}{hr|}*/
                                    backgroundColor: '#fff',
                                    borderColor: '#409EFF',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    // shadowBlur:3,
                                    // shadowOffsetX: 2,
                                    // shadowOffsetY: 2,
                                    // shadowColor: '#999',
                                    // padding: [0, 7],
                                    rich: {
                                        a: {
                                            color: '#999',
                                            lineHeight: 22,
                                            align: 'center'
                                        },
                                        // abg: {
                                        //     backgroundColor: '#333',
                                        //     width: '100%',
                                        //     align: 'right',
                                        //     height: 22,
                                        //     borderRadius: [4, 4, 0, 0]
                                        // },
                                        hr: {
                                            borderColor: '#aaa',
                                            width: '100%',
                                            borderWidth: 0.5,
                                            height: 0
                                        },
                                        b: {
                                            fontSize: 16,
                                            lineHeight: 33
                                        },
                                        per: {
                                            color: '#eee',
                                            backgroundColor: '#334455',
                                            padding: [2, 4],
                                            borderRadius: 2
                                        }
                                    }
                                }
                            },
                            data:[
                                {value:335, name:'直达'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1048, name:'百度'},
                                {value:251, name:'谷歌'},
                                {value:147, name:'必应'},
                                {value:102, name:'其他'}
                            ]
                        }
                    ]
                }

        );
        },

    }

    }
</script>

<style scoped>
.lft{
    float: left;}
</style>