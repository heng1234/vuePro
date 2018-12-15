<template>
    <div style="text-align: center">
        <div>
            <hlvy-title :text="'element-ui表格'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        </div>
        <template >

           <div style="text-align: left;margin-top: 20px">
               <el-row>
                   <el-col :span="6" :push="1">
                       <div >

                           <el-select
                                   placeholder="请选择文章标签">
                               <el-option
                                       v-for="item in options5"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                               </el-option>
                           </el-select>

                       </div>
                   </el-col>
                   <el-col :span="8" :pull="0">
                       <el-input placeholder="请输入内容" class="el-input__inner_search ">

                           <el-button slot="append" icon="el-icon-search" class="search-el-button"   ></el-button>
                       </el-input>
                   </el-col>
               </el-row>

           </div>
            <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    border
                    tooltip-effect="dark"
                    style="width: 100%;text-align: center;margin-top: 10px"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        label="日期"
                        width="120">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="140">
                    <template slot-scope="scope">
                        <button class="small-radius-button ">编辑</button>&nbsp;
                        <button class="small-radius-button ">删除</button>
                    </template>
                </el-table-column>
            </el-table>

        </template>
        <p class="tablep">
            <hlvy-page :pageSize="pageSize" :sumCount="sumCount" :currPage="currPage" ></hlvy-page>
        </p>

    </div>
</template>

<script>
    import HlvyTitle from "../components/hlvyTitle";
    export default {
        name: "test",
        components: {HlvyTitle},
        data(){
            return {
                currPage:1,//当前页码
                pageSize: 7,//每页显示
                sumCount:  1000,//总数量
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
       /*     let List = []
            const count = 60

            for (let i = 0; i < count; i++) {
        List.push(Mock.mock({
            id: Mock.Random.guid(),
            name: Mock.Random.cname(),
            addr: Mock.mock('@county(true)'),
            'age|18-60': 1,
            birth: Mock.Random.date(),
            sex: Mock.Random.integer(0, 1)
        }))
    }*/
      /*      getData(){
                this.$post("http://table.cn")
                    .then((response) => {
                        alert(JSON.stringify(response))
                    })
                    .catch(res => {
                        console.log(res);
                    });
            }*/
        }
    }
</script>

<style scoped>
    .tablep{
       text-align: center;
        margin-top: 30px;
    }
</style>