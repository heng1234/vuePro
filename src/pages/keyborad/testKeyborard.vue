<style lang="scss" scoped>
    .zywjp{

        position: absolute;
        top: 36px;
        right: 47%;
        font-family: Verdana, Sans-Serif;

        h1 {
            color: rgb(90,179,255);
            margin-left: 60px;
            font-weight: bold;

        }

        textarea {
            display: block;
            width: 100%;
            min-height: 100px;
            padding: 0;
            margin: 20px 0;
            font-size: 16px;
        }
    }
    #testKeyborderd {
        width: 680px;
        margin: 0;
        font-family: Verdana, Sans-Serif;

        h1 {
            color: rgb(90,179,255);
            font-weight: bold;

        }

        textarea {
            display: block;
            width: 100%;
            min-height: 100px;
            padding: 0;
            margin: 20px 0;
            font-size: 16px;
        }
    }
</style>
<template>
    <div style="position: relative">
        <div>
            <hlvy-title :text="'键盘'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        </div>
    <div id="testKeyborderd">
        <h1>数字英文键盘:</h1>
        <textarea type="text" v-focus v-model="keyboardText"></textarea>
           <keyboard :keyboard-text.sync="keyboardText" @key="key"></keyboard>
    </div>
        <div style="float: right" class="zywjp">
            <h1>中英文键盘:</h1>
            <keyipt :placeholder="value" :textValue="value" style="color: rgb(135, 135, 135);"  :topPx="'12px'" :leftPx="'42.2%'" @getSearchValue="getKeyValue"></keyipt>
        </div>
    </div>
</template>

<script>
    import Keyboard from './Keyboard'
    import Keyipt from "../datadk/vitualKeyboard/keyipt";

    export default {
        data() {
            return {
                keyboardText: "",
                value:'按shift切换中英文'
            }
        },
 methods:{
     key(val){
         this.keyboardText = val;
     },
     getKeyValue(keyVal){
         this.value = keyVal;
     },
 },
        components: {
            Keyipt,
            Keyboard
        }
    }
</script>