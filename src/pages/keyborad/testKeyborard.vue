<style lang="scss" scoped>
    .zywjp{
        float: left!important;
        margin: -17.4% 0 0 8.2%;
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
    <div>
    <div id="testKeyborderd">
        <h1>数字英文键盘:</h1>
        <textarea type="text" v-focus v-model="keyboardText"></textarea>
           <keyboard :keyboard-text.sync="keyboardText" @key="key"></keyboard>
    </div>
        <div style="float: right" class="zywjp">
            <h1>中英文键盘:</h1>
            <keyipt :placeholder="value" :textValue="value" style="color: rgb(135, 135, 135);"  :topPx="'61px'" :leftPx="'42.2%'" @getSearchValue="getKeyValue"></keyipt>
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
                value:''
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