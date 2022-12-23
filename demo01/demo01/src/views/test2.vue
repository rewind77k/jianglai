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
        <!-- <el-aside width="200px"> -->
        <!-- 菜单 -->
        <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Files /></el-icon>
            <span>材料提交</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><Calendar /></el-icon>
            <span>活动中心</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><DocumentChecked /></el-icon>
            <span>材料审核</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><HomeFilled /></el-icon>
            <span>个人中心</span>
          </el-menu-item>
        </el-menu>
         <!--  Aside -->
          <!-- <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
          </el-container> //后续实现菜单 头像分离-->
        <!-- </el-aside> -->
        <el-container>
          <el-main>
           <!--  Main -->
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="3"
              :on-exceed="handleExceed"
            >
              <el-button type="primary">点击上传</el-button>
              <template #tip>
                <div class="el-upload__tip">
                  jpg/png 文件大小不超过 500KB.
                </div>
              </template>
            </el-upload>
            
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
    
  </template>


<script>

  export default {
    data () {
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
  background-color: #49a794;
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
