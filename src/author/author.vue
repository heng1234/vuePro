<template>
    <div>
        <div>
            <hlvy-title :text="'作者信息'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        </div>
        <div class="divp">
            <h1>hlvy</h1><br>
            <p>
        博客地址:<a href="https://blog.csdn.net/qq_39313596">https://blog.csdn.net/qq_39313596</a>
        </p><br>
        <p>
        项目地址:<a href="https://github.com/heng1234/vuePro">https://github.com/heng1234/vuePro</a>
        </p><br>
        <p>
        交流群:553997290
        </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "author"
    }
</script>

<style scoped>
    .divp{
        text-align: center;
        font-size: 22px;
        font-weight: bold;
    }
    a{
        color: #3a8ee6;

    }
h1{
    font-family: 华文楷体;
    font-size: 72px;
    font-weight: bold;
}
</style>