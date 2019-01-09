<template>
    <div style="position: relative">
            <hlvy-title :text="'404'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        <img style="width: 100%;height: 100%;" src="../../assets/images/error/500.png">
        <button class="btn" @click="toHome">返回首页</button>

    </div>
</template>

<script>
    export default {
        methods:{
            toHome(){
                this.$router.push(
                    {
                        path:'homePage'
                    }
                )
            }
        }
    }
</script>

<style scoped>
.btn{
    position: fixed;
    top: 90%;
    left: 52%;
    width: 200px;
    border-radius: 20px;
    font-family: 微软雅黑;
    font-size: 22px!important;
    border: 1px solid rgb(173,193,207);
    background-color: rgba(246,248,250,0.4);
    color: rgb(60,146,237);
    height: 67px;
    text-align: center;
}
    .btn:hover{
        cursor: pointer;
    }
</style>