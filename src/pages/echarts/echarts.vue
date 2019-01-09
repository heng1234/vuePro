<template>
    <div>
        <div>
            <hlvy-title :text="'echarts'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        </div>
        <div id="myChart" class="lft clearfix" :style="{width: '600px', height: '300px'}"></div>
        <div id="myMap"  class="lft clearfix" ref="myMap" style="width: 600px; height: 300px;"></div>
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

    }

    }
</script>

<style scoped>
.lft{
    float: left;}
</style>