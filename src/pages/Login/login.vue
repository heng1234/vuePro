<template>
    <div class="login" :style="{height:loginHeight,width:loginWidth}">
      <div class="logdiv center">
          <hlvy-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic form">
              <hlvy-form-item
                      prop="loginName"
                      label="用户名: "
                      :rules="[
      { required: true, message: '用户名不能为空', trigger: 'blur' }
    ]"
              >
                  <hlvy-input style="width: 70%" v-model="dynamicValidateForm.loginName"></hlvy-input>
              </hlvy-form-item><br/>
              <hlvy-form-item
                      :label="'密码: '"
                      prop="loginPwd"
                      :rules="{
      required: true, message: '密码不能为空', trigger: 'blur'
    }"
              >
                  <hlvy-input style="width: 70%" v-model="dynamicValidateForm.loginPwd"></hlvy-input>
              </hlvy-form-item>
              <hlvy-form-item>
                  <p  class="loginp">  <hlvy-checkbox @change="check" v-model="dynamicValidateForm.checked" class="loginckd">记住密码</hlvy-checkbox></p>
                  <hlvy-button  class="loginbtn btnLogin" @click="submitForm('dynamicValidateForm')">登录</hlvy-button>
              </hlvy-form-item>
          </hlvy-form>
      </div>
    </div>
</template>

<script>
    import storage from '@/storage/storage.js';
    export default {
        name: "login",
        data(){
            return{
                loginHeight:'100%',
                loginWidth:'100%',
                dynamicValidateForm: {
                    loginName: '',
                    loginPwd:'',
                    checked:true
                },

            }
        },
        components:{
            storage
        },
        created(){
            this.wdht();


        },
        mounted(){
            let _this = this;
            let ches = storage.get("dynamicValidateForm");
                if(ches!=null && ches.checked){
                    _this.dynamicValidateForm.loginName = ches.loginName
                    _this.dynamicValidateForm.loginPwd = ches.loginPwd
                    _this.dynamicValidateForm.checked = ches.checked;
                }else{
                    _this.dynamicValidateForm.loginName = '';
                    _this.dynamicValidateForm.loginPwd = '';
                    _this.dynamicValidateForm.checked = false;
                }
        },
        methods:{
            wdht(){
                /**
                 * 拿到浏览器的高宽
                 * @type {string}
                 */
                this.loginHeight = window.innerHeight+"px"
                this.loginWidth = window.innerWidth+"px"
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        sessionStorage.setItem("loginMsg",JSON.stringify(this.dynamicValidateForm))
                      if(this.dynamicValidateForm.checked){
                          storage.set("dynamicValidateForm",this.dynamicValidateForm);
                      }else{
                          storage.remove("dynamicValidateForm",{});

                      }
                        this.$router.push({path: "/home"});
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            /**
             * checkbox
             */
            check(){


            }
        }
    }
</script>

<style scoped>
.login{
    position: relative;
    background: url('../../assets/images/login/login.png') no-repeat;
    background-size: cover;
}

.logdiv{
    width: 40%;
    height: 49%;
    filter:alpha(opacity=70); /*支持 IE 浏览器*/
    -moz-opacity:0.7; /*支持 FireFox 浏览器*/
    opacity:0.7; /*支持 Chrome, Opera, Safari 等浏览器*/
    border-radius: 10px;
    box-shadow:0 0 1px #5e91ff inset;
    background-color: white;
}
    .form{
      margin-top: 17%;
        margin-left: 10%;
    }
    .loginbtn{
        width: 60%;
        margin-left: 4%;
        margin-top: 1%;
    }
.loginckd{
    width: 60%;
    margin-left: 46%;
}
</style>

/**
* 修改登录按钮样式
*/

<style>

    .logdiv .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #409EFF;
    border: 1px solid #409EFF;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    }

    .loginp .el-checkbox__inner {
        display: inline-block;
        position: relative;
        border: 1px solid #409EFF;
        border-radius: 2px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;

        z-index: 1;
        -webkit-transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
    }
</style>