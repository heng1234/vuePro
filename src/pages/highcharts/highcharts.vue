<template>
    <div>
        <div>
            <hlvy-title :text="'highcharts'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        </div>
        <div class="flt">
            <chart :defOptions="options" :styles="sty" ></chart>
        </div>
        <div  class="flt">
            <chart :defOptions="optionsn" :styles="sty" ></chart>
        </div>
        <div  class="flt">
            <chart :defOptions="optionsex" :styles="sty" ></chart>
        </div>
        <div  class="flt">
            <chart :defOptions="optionslogar" :styles="sty" ></chart>
        </div>
    </div>
</template>

<script>
    import chart from '@/components/chart.vue';
    export default {
        name: "highcharts",
        components:{
            chart
        },
        data(){
            return{
                optionslogar:{
                    title: {
                        text: '对数折线图'
                    },
                    xAxis: {
                        tickInterval: 1
                    },
                    yAxis: {
                        type: 'logarithmic',
                        minorTickInterval: 0.1
                    },
                    credits: {
                        enabled: false//去掉highcharts.com链接
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br />',
                        pointFormat: 'x = {point.x}, y = {point.y}'
                    },
                    exporting:{
                        enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
                    },
                    series: [{
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
                        pointStart: 1
                    }]
                },
                optionsex:{
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '柱状图'
                    },
                    subtitle: {
                        //	text: '数据来源: WorldClimate.com'
                    },
                    exporting:{
                        enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
                    },
                    credits: {
                        enabled: false//去掉highcharts.com链接
                    },
                    xAxis: {
                        categories: [
                            '0-18','19-28','29-38','39-48','49-58','59以上'
                        ],
                        crosshair: true
                    },
                    yAxis: {
                        title: {
                            text: ''
                        },
                        labels: {
                            //去掉左侧的显示
                            //	formatter: function(){
                            //	return "";
                            //	},
                            //step:2
                        }
                    },
                    tooltip: {
                        // head + 每个 point + footer 拼接成完整的 table
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:.1f} 人</b></td></tr>',
                        footerFormat: '</table>',
                    },
                    plotOptions: {
                        column: {
                            borderWidth: 0,
                            //在图形上面显示
                            dataLabels: {
                                enabled: true,
                                color:'black'
                            }
                        },

                        series : {
                            minPointLength :2,//防止值太小图形显示不出来
                            //	negativeColor:'#87CEFF',  设置负数条形的颜色
                            //color: '#F08080'//设置显示条颜色
                            colorByPoint:true//设置不同颜色
                        }
                    },
                    series: [{
                        name: '男',
                        data: [6, 1045, 73, 67, 57, 67]
                    }, {
                        name: '女',
                        data: [3, 23, 51, 48, 45, 42]
                    }]
                },
                exporting:{
                    enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
                },
                optionsn:{
                    chart: {
                        spacing : [40, 0 , 40, 0]
                    },
                    title: {
                        floating:true,
                        text: '饼图'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    credits: {
                        enabled: false//去掉highcharts.com链接
                    },
                    exporting:{
                        enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: 'black'
                                }
                            },
                            point: {
                                events: {
                                  /*  mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                                        // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                                        chart.setTitle({
                                            text: e.target.name+ '\t'+ e.target.y + ' %'
                                        });
                                    }*/
                                    //,
                                    // click: function(e) { // 同样的可以在点击事件里处理
                                    //     chart.setTitle({
                                    //         text: e.point.name+ '\t'+ e.point.y + ' %'
                                    //     });
                                    // }
                                }
                            },
                        }
                    },
                    series: [{
                        type: 'pie',
                        innerSize: '80%',
                        name: '市场份额',
                        data: [
                            {name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
                            ['IE',       26.8],
                            {
                                name: 'Chrome',
                                y: 12.8,
                                sliced: true,
                                selected: true,
                                url: 'http://www.hcharts.cn'
                            },
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            ['其他',   0.7]
                        ]
                    }]
                },

                sty: {
                    width: 600,
                    height: 300
                },
                options: {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: '热度'
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: ['vue', 'java', 'db'],
                        title: {
                            text: null
                        }
                    },
                    credits: {
                        enabled: false//去掉highcharts.com链接
                    },
                    yAxis: {
                        min: 0,//最小

                        title: {
                            text: '',
                            align: ''
                        },
                        labels: {
                            overflow: 'justify',

                        },
                        //allowDecimals: false,
                    },
                    tooltip: {
                        valueSuffix: '',//最后显示值
                        backgroundColor: '#4c4c4c',   // 背景颜色
                        borderColor: '#4c4c4c',         // 边框颜色
                        borderRadius: 3,             // 边框圆角
                        borderWidth: 10,               // 边框宽度
                        shadow: true,                 // 是否显示阴影
                        animation: true,              // 是否启用动画效果
                        useHTML: true,//html
                        //格式化悬浮显示框
                        pointFormat: '热度<b style="color:#0ac6f2;margin: 0 auto 0 10px">{point.y}</b><br/>',
                        style: {                      // 文字内容相关样式
                            color: "#ffffff",
                            fontSize: "12px",
                            fontWeight: "blod",
                            fontFamily: "Courir new",
                            top: '100px',
                            useHTML: true,//html
                        },
                        shape: 'callout'
                    },
                    exporting:{
                        enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: false,//是否显示
                                allowOverlap: true // 允许数据标签重叠
                            }
                        }
                    },
                    legend: {
                        enabled: false //不显示图列
                    },
                    series: [ {
                        name: '',
                        data: [1999.02,999.02,999.02],
                        color:"#0ac6f2",//设置条形图颜色
                    }, {
                        name: '',
                        data: [1999.02,999.02,999],
                        color:"#57c059",//设置条形图颜色
                    }]
                },
            }
        }
    }
</script>

<style scoped>
.flt{
    float: left;
    margin-left: 2%;
}
</style>