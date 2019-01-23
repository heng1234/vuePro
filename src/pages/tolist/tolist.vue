<template>
    <div style="position: relative;">
        <div>
            <hlvy-title :text="'tolist'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        </div>
         <div class="leftCenter">
             <el-input v-model="msg" style="width: 300px;margin-top: 70px" placeholder="请输入内容"></el-input><button class="btn blue-button" style="padding-bottom: 6px" @click="savetolist">确定</button>
         </div>
        <div class="leftCenter" style="top: 127px;line-height: 42px;font-size: 22px;color: #2b3b4b">
            <p v-for="data in toListData">
                {{data}}
            </p>
        </div>

    </div>
</template>

<script>
    import storage from '@/storage/storage.js';
    export default {
        name: "tolist",
        data(){
            return{
                msg:'',
                toListData:[]
            }
        },
        components:{
            storage
        },
        mounted(){
            if (storage.get("toListData") != null){
                this.toListData = storage.get("toListData")
            }

        },
        methods:{
            savetolist(){
                let datas = ['',null,undefined];
                if(datas.includes(this.msg)){
                    this.$alert('不能输入空值!', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {}
                    });

                    return;
                }else if(this.msg.trim().length>0){
                    this.toListData.push(this.msg)
                    storage.set("toListData",this.toListData);
                }

            }
        }
    }
</script>

<style scoped>

</style>