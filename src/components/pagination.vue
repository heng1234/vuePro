<template>
  <div class="page">

    <!--分页控件-->
    <el-pagination
      background
      layout="prev, pager, next,slot"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currPage"
      :total="sumCount">
      <span class="el-pagination__jump fontTwelve">
        跳转到第&nbsp;<div class="el-input el-pagination__editor is-in-pagination">
        <input type="number" autocomplete="off" min="1" v-model="currPage"  class="el-input__inner pageInput">
      </div>&nbsp;页
      </span>
    </el-pagination>
  </div>

</template>

<script>
export default {
    data(){
        return{
        }
    },
  /*props: ['pageSize','sumCount','currPage'],*/
  props: {
    pageSize: {  //每页显示
      type: Number,
      default: 7
    },
    sumCount: {  //总数量
      type: Number,
      default: 0
    },
    currPage: {  //当前页码
      type: Number,
      default: 1
    },
  },
  methods: {
      //pageSize 改变时会触发
    /*  handleSizeChange () {
    //  this.$emit('handleSizeChange', {pageSize:this.pageSize,sumCount:this.sumCount,pageNo:this.pageNo})
    },*/
    //currentPage 改变时会触发
      handleCurrentChange (val) {
        this.currPage = val;
          this.$emit('handleSizeChange', {pageSize:this.pageSize,sumCount:this.sumCount,currPage:this.currPage})
    },

  },

}
</script>

<style>
  .page .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    margin: 0 5px;
    background-color: white!important;
    color: #2b3b4b!important;
    min-width: 30px;
    border-radius: 2px;
  }
  .page .el-pagination.is-background .el-pager li:hover,
  .page .el-pagination.is-background .el-pager li.active {
    background-color: #409EFF!important;
    color: #fff!important;
  }
</style>