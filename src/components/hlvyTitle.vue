<template>
    <div class="hlvytitle">
        <li :class="icon">{{text}}</li>
        <div class="title_div"></div>
    </div>
</template>

<script>
    export default {
        name: "hlvyTitle",
        props: {
            text: {  //显示文字
                type: String,
                default: ''
            },
            icon: {  //图标clss
                type: String,
                default: ''
            }

        },
    }
</script>

<style scoped>
    .hlvytitle{
        font-size: 14px;
        color: #409EFF;
        text-align: left;

    }
    .title_div{
        background-color: #dbe2ed;
        height: 1px;
        margin-top: 2px;
    }
</style>