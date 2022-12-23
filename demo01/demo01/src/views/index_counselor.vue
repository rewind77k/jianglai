<template>
    <el-container class="my-container">
         <el-header >
           <div>
             <!-- <span>奖来</span> -->
             <img src="../image/shnu2.png" >
             
           </div>
           <el-button type="info" @click="logout" >退出</el-button>
         </el-header>
         <el-container>
           <el-aside width="200px">
           <!-- 菜单 -->
           <el-menu
             border-right: none
             active-text-color="#ffd04b"
             background-color="#545c64"    
             class="el-menu-vertical-demo"
             default-active="2"
             text-color="#fff"
             @open="handleOpen"
             @close="handleClose"
             router
           >  <!-- active-text-color="#ffd04b"点击颜色  -->
            <el-menu-item >
              
              <el-icon><Promotion /></el-icon>
              <span >{{labelT}}</span>
              
            </el-menu-item>
             <el-menu-item index="/index_counselor-1-1-1">
              <el-icon><Files /></el-icon>
               <span>提交材料</span>
             </el-menu-item>

             <el-menu-item  index="/index_counselor-MaterialReview">
               <el-icon><DocumentChecked /></el-icon>
               <span>审核材料</span>
             </el-menu-item>

             <el-menu-item  index="/index_counselor-GradeOverLook">
              <el-icon><List /></el-icon>
               <span>查看成绩</span>
             </el-menu-item>

             <!--活动中心  -->
             <el-menu-item index="/index_counselor_g">
               <el-icon><Calendar /></el-icon>
               <span>活动中心</span>
             </el-menu-item>
   
             
   
           </el-menu>
          
   
           </el-aside>
           <el-container>
             <el-main>
               <!-- 路由占位符 没有不显示的-->
               <router-view></router-view>
              <!--  Main -->
   

   
             </el-main>
   
             <el-footer>
               <p>奉贤校区:上海市奉贤区海思路100号 电话:021-64322000</p>
       
             </el-footer>
   
           </el-container>
         </el-container>
       </el-container> 
   </template>
   
   <script>
   
     export default {
    
       data () {
           return {
             checked: false,
             labelT: '你好! '+sessionStorage.name+'辅导员'
           };
         },
       methods:{
           logout(){
               window.sessionStorage.clear()
               this.$router.push("/");   // "/Login"  路由还是有点问题的
           }
       }
     
     }
     </script>
   
   <style scoped>
   .el-header
   {
     background-color: #3da19f;
     height: 85px;
     padding-left: 0%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     color: #fff;
     font-size: 20px;
   
   }
   .el-aside
   {
     background-color: #545c64;
     
   }
   .el-main
   {
     background-color: bisque;
   }
   .el-footer{
     background-color: #fac000;
   }
   
   .my-container
   {
     height: 100%;
   
   }
   
   
   
   </style>
   
   