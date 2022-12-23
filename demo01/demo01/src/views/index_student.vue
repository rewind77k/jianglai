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
          <el-sub-menu  index="1">
            
            <template #title>
              <el-icon><Files /></el-icon>
              <span>提交材料</span>
            </template>

            <el-menu-item-group title="智育材料">
              <el-menu-item index="/index_student-1-1-1">论文发表以及科研项目</el-menu-item>
              <el-menu-item index="/index_student-1-1-2">发明专利授权</el-menu-item>
              <el-menu-item index="/index_student-1-1-3">职业能力证书</el-menu-item>
              <el-menu-item index="/index_student-1-1-4">小众竞赛获奖</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="德育材料">
              <el-menu-item index="/index_student-1-2-1">志愿服务与义工活动</el-menu-item>
              <el-menu-item index="/index_student-1-2-2">附加项目</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="体育材料">
              <el-menu-item index="/index_student-1-3-1">体育竞赛附加项目</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="能力材料">
              <el-menu-item index="/index_student-1-4-1">校园文化活动</el-menu-item>
            </el-menu-item-group>

           
          </el-sub-menu>
          <!--活动中心  -->
          <el-menu-item index="/index_student-2">
            <el-icon><Calendar /></el-icon>
            <span>活动中心</span>
          </el-menu-item>

         <!--  <el-menu-item index="3" disabled>
            <el-icon><DocumentChecked /></el-icon>
            <span>材料审核</span>
          </el-menu-item> -->

         <!--  <el-menu-item index="/index_student-PersonalCentre">
            <el-icon><HomeFilled /></el-icon>
            <span>个人中心</span>
          </el-menu-item> -->

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
          /* checked: false, */
          labelT: '你好! '+sessionStorage.name+'同学'
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

