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
                  <hlvy-button  class="loginbtn btnLogin" @click="submitForm('dynamicValidateForm')">登录</hlvy-button>
              </hlvy-form-item>
          </hlvy-form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                loginHeight:'100%',
                loginWidth:'100%',
                dynamicValidateForm: {
                    loginName: '',
                    loginPwd:''
                }
            }
        },
        created(){
        },
        methods:{
            wdht(){
                this.loginHeight = window.innerHeight+"px"
                this.loginWidth = window.innerWidth+"px"
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        sessionStorage.setItem("loginMsg",JSON.stringify(this.dynamicValidateForm))
                        this.$router.push({path: "/home"});
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
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
        margin-left: 22%;
        margin-top: 6%;
    }
</style>