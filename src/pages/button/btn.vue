<template>
    <div>
        <div>
            <hlvy-title :text="'button'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        </div>
        <br/>
        <button class="blue-button ">blue</button>
        <button class="blue-border-button ">blue边框</button>
        <button class="blue-middle-button ">blue中等按钮</button>
        <button class="middle-radius-button ">边框圆角</button>
        <button class="small-radius-button ">small</button>
        <button class="blue-bgw-button ">midBtn</button>
        <button class="simple-button">朴素按钮</button>
    </div>
</template>

<script>
    export default {
        name: "btn"
    }
</script>

<style scoped>
button{
    margin-left: 30px;
}
</style>