<template>
    <div>
        <h3>请审核员进行材料审核</h3>
        <!-- 卡片 --> 
        <el-card >
        <el-form ref="getUserListRef">
        <el-table :data="studentList"  stripe border   >
          <el-table-column  label="#" type="index"></el-table-column>
          <el-table-column  label="班级" prop="class"></el-table-column>
          <el-table-column  label="学号" prop="id"></el-table-column>
          <el-table-column  label="姓名" prop="name"></el-table-column>
          <el-table-column  label="状态" prop="state"> 
            <template v-slot="scope">
              <el-tag   :type="scope.row.state === '未审核' ? 'warning' : 'primary '"  
              disable-transitions>{{ scope.row.state }}</el-tag> <!-- 作用域插槽  ?? -->
            </template> 
          </el-table-column>

          <el-table-column  label="审核" >
            <template v-slot="scope">
              <el-button type="primary" round  @click="Review(scope.row.id,scope.row.name)" >点击审核</el-button>
            </template> 
          </el-table-column>


        </el-table>
        <!-- <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-sizes="[1,2,10, 20, 50, 100,200]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
 -->
        
      </el-form>
      
       <!--  <el-tag :type = state v-if="state== 'success'" text="" ></el-tag> -->
       <!-- 分页 -->
      
      
      </el-card>
      
      <!-- <el-button @click="test">test</el-button> -->
    
        
        
    </div>
</template>

<script >

import { op } from "./api";
import axios from "axios"
export default {

  data () {
      return {
        //对话框的显示隐藏
 
        studentList:[
          /* {
            class : '2',
            Sno : '200152038',
            name : 'wichai',
            score : '0',
            state : 'success',
            
            
          },
          {
            class : '2',
            Sno : '200152015',
            name : 'wichai',
            score : '0',
            state : '审核完成',
           
            
          },
          {
            class : '2',
            Sno : '200152034',
            name : 'wichai',
            score : '0',
            state : '未审核',
            
          }, */
        ],
        headers:{
                 Authorization: sessionStorage.token
                },//头部token   博客上面的不太确定
            
        queryInfo:{
            // query:'',
            //当前页面
            pagenum: 1,
            //页数
            pagesize: 10
        }
      }
    },
  created()
  {
    this.getUserList()  //生命周期函数
  },
  methods:{
      test(){
        // console.log('1')
        this.getUserList()   
      },
      getUserList(){       
        axios.get('http://127.0.0.1:8000/counselor/verify/?op=1').then((res)=>{
            console.log("success", res.data)
            this.studentList = res.data.data
        }).catch((error)=>{
              console.log("wobaocoel ")
              return this.$message.error(res.data.msg)
            });
        
      },
      //分页   pagesize 改变
      handleSizeChange(newSize){
        console.log(newSize)
        this.queryInfo.pagesize = newSize
        // this.getUserList()
      },
      //页码改变
      handleCurrentChange(newPage){
        console.log(newPage)     
        this.queryInfo.pagesize = newPage
        // this.getUserList()
      },
      Review(id,name){
        this.$router.push(
          {
            path:"/index_auditor_R",
            query:{SNumber:id,Name:name} 
          })
      },
    
      
     
    
  }

}
</script>