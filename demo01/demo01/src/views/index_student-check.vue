<template>
    <div>
        
        <h1>论文发表以及科研项目</h1>
      <el-card>
        <div class="md">
       <img :src="getImgUrl(list[2])"  class="imgM" ></div>
      </el-card>

      <h1>发明专利授权</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[3])"  class="imgM" ></div>
      </el-card>

      <h1>职业能力证书</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[4])"   class="imgM" ></div>
      </el-card>


      <h1>小众竞赛获奖</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[5])" class="imgM" ></div>
      </el-card>

      <h1>志愿服务与义工活动</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[0])" class="imgM" ></div>
      </el-card>

      <h1>德育材料附加项目</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[1])" class="imgM" ></div>
      </el-card>

      <h1>体育竞赛附加项目</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[6])" class="imgM" ></div>
      </el-card>

      <h1>校园文化活动</h1>
      <el-card>
        <div class="md">
        <img :src="getImgUrl(list[7])"  class="imgM" ></div>
      </el-card>
    </div>

</template>
<script>
import axios from "axios"
export default{
    data(){
        return{
            list:[]
        }

    },
    created(){
        this.getSelfImage();
    },
    methods:{
        getImgUrl(imgData){
            if(imgData && imgData.index){
                const imgName = imgData.index.split("../files/img/")[1]
                return require(`@/files/img/${imgName}`)
            }
            return ""
        },
        getSelfImage(){
        axios.get(this.build('http://127.0.0.1:8000/counselor/verify/',
          {
            op:'2',
            st_id:sessionStorage.token
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
    }
    

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