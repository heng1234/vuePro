<template>
    <div class="edit_container">
        <div>
            <hlvy-title :text="'富文本编辑器'" :icon="'iconfont hlvy-icon-xueyuanguanliicon-'"></hlvy-title>
        </div>
        <quill-editor
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                @change="onEditorChange($event)">
        </quill-editor>
    </div>
</template>
<script>
    import { quillEditor } from "vue-quill-editor"; //调用编辑器
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    export default {
        components: {
            quillEditor
        },
        data() {
            return {
                content: `<div><h1>hlvy<br/><a href="https://blog.csdn.net/qq_39313596">博客地址</a>:https://blog.csdn.net/qq_39313596<br/><a href="https://blog.csdn.net/qq_39313596">项目地址</a>:https://github.com/heng1234/vuePro</h1>`,
                editorOption: {}
            }
        },
        methods: {
            onEditorReady(editor) { // 准备编辑器

            },
            onEditorBlur(){}, // 失去焦点事件
            onEditorFocus(){}, // 获得焦点事件
            onEditorChange(){}, // 内容改变事件
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            },
        }
    }
</script>
<style >
    .edit_container .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 700px;
        outline: none;
        overflow-y: auto;
        padding: 0.16rem 0.2rem;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
</style>