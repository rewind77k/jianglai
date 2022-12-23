<template>
  <div class="background" >
      <div class="login-box">
          <h3 class="h3">奖学金评定系统</h3>
          <el-form :model="loginForm" :rules="LoginFormRules" ref="loginFormRef" label-width="0px">
              <el-form-item prop="username">
                  <el-input prefix-icon="User" placeholder="请输入账号" v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input prefix-icon="Lock" placeholder="请输入密码" v-model="loginForm.password" type="password" show-password></el-input>
              </el-form-item>
              
              <el-form-item class="btnLo" >
                  <el-button type="success" round @click="login">登录</el-button>
              </el-form-item>
          </el-form>
      </div>
  </div>
  
</template>



<script>
// import Axios from "axios";
import { login } from "./api";
export default {
  data () {
    
    return {
      // identity:'student',
      //登录表单绑定的用户&密码
      loginForm:{
          username: '',
          password: '123456'
      },
      //表单验证规则对象，预检验
      LoginFormRules:{
          username:[
              { required: true, message: '请输入学号/工号', trigger: 'blur' },
              { min: 3, max: 9, message: '如2001***** 9位数字!', trigger: 'blur' },
          ],
          password:[
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 3, max: 15, message: '密码长度错误', trigger: 'blur' },            
          ]
      }
    }
  },
  methods:{
      login(){
        //  console.log(this.loginForm);
          this.$refs.loginFormRef.validate(async (valid) =>{
            if(valid){
              login({
                username: this.loginForm.username,
                password: this.loginForm.password
              }).then((res)=>{
               /*  console.log(res);
                 console.log(res.data);
                console.log(res.data.code); */
                if(res.data.code !== 200) 
                  {
                    this.loginForm.username = ""
                    this.loginForm.password = ""
                    return this.$message.error(res.data.msg)
                  }
                this.$message.success('登录成功');
                console.log(res);
                window.sessionStorage.setItem("token",res.data.token)
                window.sessionStorage.setItem("name",res.data.name)
                window.sessionStorage.setItem("type",res.data.type)
                /* const tokenStr = window.sessionStorage.getItem(token)
                console.log(tokenStr); */
                // console.log(res.data.type);
                if(res.data.type === 1)
                {
                  this.$router.push("/index_student"); 
                }
                else if(res.data.type === 21 )
                {
                  this.$router.push("/index_teacher");
                }
                else if(res.data.type === 22 )
                {
                  this.$router.push("/index_auditor");
                }else if(res.data.type === 3)
                {
                  this.$router.push("/index_counselor");
                }
              }).catch((error)=>{});
            }
              
          })
      }
    
  }

}
</script>

<style scoped>
.background{
background: url("../image/01.jpg");
width:100%;
height:100%;  /**宽高100%是为了图片铺满屏幕 */
position: fixed;
background-size: 100% 100%;
}
.h3{
  color: rgb(243, 0, 0);
}
.login-box{
  border:1px solid #dccfcf;
  width: 350px;
  height: 200px;
  margin:180px auto;
  padding: 20px 50px 20px 50px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
  background-color:rgba(255,255,255,0.7)
}
.btnLo{
  float: right;
  
}



</style>
