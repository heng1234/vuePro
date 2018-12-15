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
                                   v-model="sex"
                                   placeholder="性别"
                           @change="sexchhange">
                               <el-option
                                       v-for="item in sexs"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                               </el-option>
                           </el-select>

                       </div>
                   </el-col>
                   <el-col :span="8" :pull="0">
                       <el-input placeholder="姓名" v-model="name" class="el-input__inner_search ">

                           <el-button slot="append" @click="getData" icon="el-icon-search" class="search-el-button"   ></el-button>
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
                    ><!--@selection-change="handleSelectionChange"-->
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        label="id"
                        :show-overflow-tooltip='true'
                       >
                    <template slot-scope="scope">{{ scope.row.id }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="addr"
                        label="地址"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="sex"
                        label="性别"
                        show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.sex|sex }}</template>
                </el-table-column>
                <el-table-column
                        prop="age"
                        label="年龄"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="birth"
                        label="生日"
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
            <hlvy-page :pageSize="pageSize" :sumCount="sumCount" :currPage="currPage"   v-on:handleSizeChange="handleSizeChange"></hlvy-page>
        </p>

    </div>
</template>

<script>
    import HlvyTitle from "../components/hlvyTitle";
    const List = []
    export default {
        name: "test",
        components: {HlvyTitle},
        data(){
            return {
                currPage:1,//当前页码
                pageSize: 7,//每页显示
                sumCount:  0,//总数量
                tableData3:[],
                multipleSelection: [],
                name:'',
                sexs:[{
                    label:'男',
                    value:'1'
                },{
                    label:'女',
                    value:'2'
                }],
                sex:''
            }
        },
        created(){
            const count = 100
            this.sumCount=count;
            for (let i = 0; i < count; i++) {
                List.push(this.$mock.mock({
                    id: this.$mock.Random.guid(),
                    name: this.$mock.Random.cname(),
                    addr: this.$mock.mock('@county(true)'),
                    'age|18-60': 1,
                    birth: this.$mock.Random.date(),
                    sex: this.$mock.Random.integer(0, 1)
                }))
            }
        },
        mounted(){

            this.getData();
        },
        methods:{
            handleSizeChange(val) {
                this.currPage = val.currPage;
                this.pageSize = val.pageSize;
                 this.getData();
            },
            sexchhange(){

                this.getData();
            },
            /**
             * 查询功能
             */
            getData(){

                if(this.name != null && this.name.trim() !='' || this.sex){
                let [ name, page = this.currPage, limit = this.pageSize ] =[this.name,,];
                const mockList = List.filter(user => {
                    if (name && user.name.indexOf(name) === -1) return false
                    return true
                })
                    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
                    if (this.sex != '') {
                        const mockListsex = mockList.filter(user => {
                            if (this.sex.toString()  !== user.sex.toString()) return false
                            return true
                        })
                            const pageList = mockListsex.filter((item, index) => index < this.pageSize * this.currPage && index >= this.pageSize * (this.currPage - 1))

                            this.tableData3 = pageList;
                            return;
                    }



                    /*
                return {
                    code: 0,
                    data: {
                        total: mockList.length,
                        users: pageList
                    }
                }*/

               this.tableData3 = pageList;

                }else{
                    const pageList = List.filter((item, index) => index < this.pageSize * this.currPage && index >= this.pageSize * (this.currPage - 1))

                    this.tableData3 = pageList;
                }
            }
        }
    }
</script>

<style scoped>
    .tablep{
       text-align: center;
        margin-top: 30px;
    }
</style>