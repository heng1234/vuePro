<template>
    <div class="">
        <el-row>
            <el-col :span="8">
       <el-input v-validate="'required|email'" placeholder="请输入邮箱" style="width: 100%" name="email" type="text"></el-input>
        <span class="vercolor">&emsp;{{ errors.first('email') }}</span>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <input type="text" name="field" v-validate="'falsy'">
        <span class="vercolor">&emsp;{{ errors.collect('field') }}</span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "VeeValidate"
    }
</script>

<style scoped>

</style>