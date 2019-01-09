<template>
  <div class="highcharts-container" ></div>
</template>
<script>
  import Highcharts from 'highcharts/highstock'
  import HighchartsMore from 'highcharts/highcharts-more'
  import HighchartsDrilldown from 'highcharts/modules/drilldown'
  import Highcharts3D from 'highcharts/highcharts-3d'
  // 树状图中的点（矩形）的颜色是由和它同级的数据点的值来计算的。
  // 如果需要 colorAxis 功能则需额外的引入http://cdn.hcharts.cn/highcharts/modules/heatmap.js 。
  import HeatMap from 'highcharts/modules/heatmap'
  import Exporting from 'highcharts/modules/exporting'
  import TreeMap from 'highcharts/modules/treemap'
  HighchartsMore(Highcharts)
  HighchartsDrilldown(Highcharts)
  Highcharts3D(Highcharts)
  HeatMap(Highcharts)
  Exporting(Highcharts)
  TreeMap(Highcharts)
  export default {
    props: ['defOptions', 'styles'],
    name: 'highcharts',
    data () {
      return {
        chart: null
      }
    },
    mounted () {
      this.initChart()
    },
    watch: {
      // 当外面传进来的defOptions有变化时重新渲染视图
      defOptions: function (val, oldVal) {
        this.initChart()
      }
    },
    methods: {
      initChart () {
        // 根据传进来的style设置宽高
        this.$el.style.width = (this.styles.width || 800) + 'px'
        this.$el.style.height = (this.styles.height || 400) + 'px'
        this.chart = new Highcharts.Chart(this.$el, this.defOptions)
      }
    }
  }
</script>
<style scoped="scoped">
  .highcharts-container {
    width: 800px;
    height: 400px;
  }
</style>
