<template>
    <el-carousel indicator-position="outside">
      <el-carousel-item > <img src="../image/2.png"></el-carousel-item>
      <el-carousel-item > <img src="../image/3.png"></el-carousel-item>
      <el-carousel-item > <img src="../image/4.png"></el-carousel-item>
      <el-carousel-item > <img src="../image/5.png"></el-carousel-item>
    </el-carousel>

    <el-link 
    href="http://xxjd.shnu.edu.cn/_upload/article/files/5d/bc/102f58bb4f2c8048782f0eddc1e4/1992104e-6f1c-4759-bba6-2cf9bfbe2982.pdf" 
    target="_blank">@公示名单<el-icon><StarFilled /></el-icon></el-link>
    
    
  </template>

<script>
export default{
  methods:{
   
  }
}

</script>
  
  <style>
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  </style>