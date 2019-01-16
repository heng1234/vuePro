 <template>
    <div style="height: 100%;width: 100%;">
        <div>
            <hlvy-title :text="'系统首页'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        </div>

        <div  style="height: 97%;width: 100%;background-color: rgba(238,245,253,0.9);">
            <div class="homediv">
                <span class="spanmoney"><span>总销售额:</span><p>&yen;5201314</p></span>
                <div class="hnextdiv">
                    hlvy
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "homePage",
        data(){
            return{
            }
        }
    }
</script>

<style scoped>
.homediv{
    float: left;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    width: 460px;
    height: 200px;
    box-shadow:2px 2px 2px #aaaaaa;
    margin: 40px auto auto 40px;
}
.spanmoney>span{
    display: inline-block;
    color: rgb(194,196,199);
    font-size: 22px;
    margin: 7px auto auto 10px;
}
.spanmoney>p{
font-size: 32px;
text-indent: 12px;
}
.hnextdiv{
    text-indent: 12px;
    margin-top: 10px;
}
</style>