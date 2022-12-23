<template>
    <h3> {{ this.$route.query.SNumber }} {{ this.$route.query.Name }} </h3>
    <div>
      
      <!-- <el-button @click="test">test</el-button> -->
      <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index_counselor-MaterialReview' }">审核材料</el-breadcrumb-item>
      <el-breadcrumb-item
        ><!-- <a href="/">promotion management</a> --> 详细信息</el-breadcrumb-item
          >
      </el-breadcrumb>



      <h1>论文发表以及科研项目</h1>
      <el-card>
      <el-table   border  :data="List1" >
          <el-table-column  label="分数" prop="a" ></el-table-column>
          <el-table-column  label="加分条件" prop="b"></el-table-column>
          <el-table-column  label="分数" prop="c"></el-table-column>
          <el-table-column  label="加分条件" prop="d"></el-table-column>
        </el-table>
      </el-card>
      <el-card>
        

        <div class="md">
        <!-- <img src="../files/img/20221221-174437.jpg"> -->
        <img :src="getImgUrl(list[2])"  class="imgM" ></div>
        <el-input v-model="grade.input2" placeholder="请输入分数" />
      </el-card>

      <h1>发明专利授权</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[3])"  class="imgM" ></div>
        <el-input v-model="grade.input3" placeholder="请输入分数" />
      </el-card>

      <h1>职业能力证书</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[4])"   class="imgM" ></div>
        <el-input v-model="grade.input4" placeholder="请输入分数" />
      </el-card>


      <h1>小众竞赛获奖</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[5])" class="imgM" ></div>
        <el-input v-model="grade.input5" placeholder="请输入分数" />
      </el-card>

      <h1>志愿服务与义工活动</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[0])" class="imgM" ></div>
        <el-input v-model="grade.input0" placeholder="请输入分数" />
      </el-card>

      <h1>德育材料附加项目</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[1])" class="imgM" ></div>
        <el-input v-model="grade.input1" placeholder="请输入分数" />
      </el-card>

      <h1>体育竞赛附加项目</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[6])" class="imgM" ></div>
        <el-input v-model="grade.input6" placeholder="请输入分数" />
      </el-card>

      <h1>校园文化活动</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[7])"  class="imgM" ></div>
        <el-input v-model="grade.input7" placeholder="请输入分数" />
      </el-card>

      <br>
      <el-button type="primary" @click="submit">提交成绩</el-button>
      <el-button type="info" @click="errorSub">取消操作</el-button>
      <p>注：再次进入需要重新填写成绩</p>
    </div>

</template>

<script>
import axios from "axios"

export default {
  data () {
      return {
        list:[],
        data: [],
        grade:{
          input1 : '0',
          input2 : '0',
          input3 : '0',
          input4 : '0',
          input5 : '0',
          input6 : '0',
          input7 : '0',
          input0 : '0',
        },
        List1:[
          {
            a:'8-10分',
            b:'SCI（需SCI收录证明）及EI期刊论文（需EI收录证明）。第一作者 10分、第二作者（导师第一作者学生第二作者）8分。',
            c:'2-6分',
            d:'国内中文核心期刊第一作者6分，EI会议论文（需EI收录证明）第一作者2分。',
          },
          {
            a:'2-3分',
            b:'功申请校级以上大学生创新创业训练计划项目。市级2 分，国家级 3 分。',
            c:'0.5-1分',
            d:'级大学生科研创新项目、校级导生科研立项等项目。结项0.5分、获奖 1分。',
          },
          {
            a:'0.5-1分',
            b:'市级寒暑期社会实践项目结项、获奖。结项0.5分，获奖1分。',
            c:'0.25-0.5分',
            d:'校级寒暑期社会实践项目结项、获奖。结项0.25分，获奖0.5分。',
          },
        ]
    }
    },
  created()
  {
    this.getStudentImage()
    // console.log(this.$route.query)
    
  },
  watch: {
    $route: {
        handler: function (val,oldVal) {
            console.log(val);
        },
        deep: true
    }
  },
  methods:{
    Review(){
        console.log(this.$route.query.SNumber)
        console.log(this.$route.query)
    },
    submit(){
      axios.get(this.build('http://127.0.0.1:8000/counselor/verify/',
          {
            op:'3',
            st_id:this.$route.query.SNumber,
            info_list:[
              this.grade.input0,
              this.grade.input1,
              this.grade.input2,
              this.grade.input3,
              this.grade.input4,
              this.grade.input5,
              this.grade.input6,
              this.grade.input7,
            ]
            
          }
        )).then((res)=>{
          if(res.data.code !== 200) 
          {
            this.$router.push("/index_counselor-MaterialReview"); 
           /*  this.grade.input0 = 0,
            this.grade.input1 = 0,
            this.grade.input2 = 0,
            this.grade.input3,
            this.grade.input4,
            this.grade.input5,
            this.grade.input6,
            this.grade.input7 */
            return this.$message.error(res.data.msg)
            
          }
          this.$message.success('提交成功，成绩已保存');
          this.$router.push("/index_counselor-MaterialReview");   
            }).catch((error)=>{
              // console.log("wobaocoel ")

            });
    },
    errorSub()
    {
      this.$message.success('取消成功，成绩将不会保存');
      this.$router.push("/index_counselor-MaterialReview"); 
    },

    //获取照片
    getStudentImage(){
        axios.get(this.build('http://127.0.0.1:8000/counselor/verify/',
          {
            op:'2',
            st_id:this.$route.query.SNumber
          }
        )).then((res)=>{
            // console.log("success", res.data)
            // console.log("success", res)
            console.log("data", res.data.data)
            this.list = res.data.data
            this.data = res.data.data
            console.log('data1:', this.data[0].index)
            console.log('inedx:',this.data)
            
            }).catch((error)=>{
              // console.log("wobaocoel ")
              // return this.$message.error(res.data.msg)
            });
    },
    //连接url
    build (path, query = {}) {
      let str = ''
      Object.keys(query).forEach(key => {
          str += `&${key}=${encodeURIComponent(query[key])}`
      })
      return `${path}?${str.slice(1)}`
    },
    /* test(){
      console.log(this.build('http://127.0.0.1:8000/counselor/verify/',
      {
        op:'2',
        st_id:this.$route.query.SNumber
      }
        ))
    } */ 
    //src
    getImgUrl(imgData){
      if(imgData && imgData.index){
        const imgName = imgData.index.split("../files/img/")[1]
        return require(`@/files/img/${imgName}`)
      }
      return ""
    }
  },
  
  

}
</script>


<style scoped>

.md{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.imgM{
        min-width: 80%;
        width:auto;
        height:auto;
        max-width:100%;
        max-height:100%;
        
}

</style>