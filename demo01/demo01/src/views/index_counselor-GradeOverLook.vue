<template>
    <div>
        <h3>2021~2022年度综测成绩表</h3> 
        <div class="madeGrade" @click="getGrade" type="success" plain>
            <el-button>生成成绩</el-button> 
        </div>
        <!-- 卡片 -->
        <el-card >
            <el-form ref="getGradeListRef">
                <el-table :data="gradeList"  stripe border   >
                <el-table-column  label="#" type="index"></el-table-column>
                <el-table-column  label="班级" prop="st_class"></el-table-column>
                <el-table-column  label="学号" prop="st_id"></el-table-column>
                <el-table-column  label="姓名" prop="st_name"></el-table-column>
                <el-table-column  label="成绩" prop="cl1_grade"></el-table-column>
                <el-table-column  label="等第" prop="cl1_class"></el-table-column>
                <el-table-column  label="成绩明细" prop="">
                    <template v-slot="scope">
                    <el-button type="primary" round @click="StudentView(scope.row.st_id,scope.row.st_name)" >点击查看</el-button>
                    </template> 
                </el-table-column>

               <!--  <el-table-column  label="状态" prop="state"> 
                    <template v-slot="scope">
                    <el-tag  >{{ scope.row.state }}</el-tag> 
                    </template> 
                </el-table-column>
                <el-table-column  label="审核" prop="">
                    <template v-slot="scope">
                    <el-button type="primary" round @click="Review(scope.row.id,scope.row.name)" >点击审核</el-button>
                    </template> 
                </el-table-column>
                 -->
                </el-table>

            </el-form>
        </el-card>
   
    </div>
</template>


<script>
import axios from "axios"
export default {

  data () {
      return {
        //对话框的显示隐藏
        gradeList:[
/*           {
            class : '2',
            id : '200152038',
            name : 'wichai',
            score : '0',
            state : 'success',
            
            
          },
          {
            class : '2',
            id : '200152015',
            name : 'wichai',
            score : '0',
            state : '审核完成',
           
            
          },
          {
            class : '2',
            id : '200152034',
            name : 'wichai',
            score : '0',
            state : '未审核',
            
          }, */
        ],
        headers:{
                 Authorization: sessionStorage.token
                },//头部token   博客上面的不太确定
      }
    },
  created()
  {
    this.getGradeList()  //生命周期函数
  },
  methods:{
        getGradeList(){
        axios.get('http://127.0.0.1:8000/counselor/lookover/?op=1').then((res)=>{
            console.log("success", res.data.data)
            // console.log(res.data.msg)
            this.gradeList = res.data.data
            //  console.log(getGradeList)
            // this.$message.success('获取成绩成功')
        }).catch((error)=>{
              console.log("错 ")
              return this.$message.error(res.data.msg)
            });
        
      },
        getGrade(){
            axios.get('http://127.0.0.1:8000/grade/calculate/').then((res)=>{
                // this.$message.success('更新成功')
            }).catch((error)=>{
              console.log("错")
              return this.$message.error(res.data.msg)
            });    
         /*    let self = this;   // 当前this指向的是一个组件
            self.refreshBtn = true;
            setTimeout(function(){ self.refreshBtn = false;},200000) //   function 里面的this指向的是windows
 */
            this.getGradeList()
      },
        StudentView(id,name){
            this.$router.push(
                {
                    path:"/index_counselor_S",
                    query:{SNumber:id,Name:name}
                }
            )
            
        }
      

      
      
     
    
  }
}



</script>
<style scoped>
.madeGrade{
    margin-top: 10px;
    margin-bottom: 10px;
    
}


</style>