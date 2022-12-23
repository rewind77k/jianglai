<template>
    <div>
        <p>志愿服务与义工活动</p>
        
        <!-- action="https://jsonplaceholder.typicode.com/posts/" -->
        <el-upload
        accept=".jpg"
        action="http://127.0.0.1:8000/student/upload/?co_st_id=101"

        v-loading="loading"
        :headers="headers"
        drag
        
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-success="successFn"
        :on-error="errorFn"
        :on-progress="progressFn" 
        
        :limit="1"
        :on-exceed="handleExceed"
        :file-list="fileList"
        >
        <el-icon class="el-icon--upload"><upload-filled />
        </el-icon>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件,且不超过500kb</div>
        </el-upload>
        <el-card>
            <div class="md">
                <img :src="getImgUrl(list[0])" class="imgM" >
            </div>
        </el-card>
        <el-button type="primary" @click="jump">查看所有已提交图片</el-button>

    </div>
</template>


<script>

import axios from "axios"
export default{
    data(){
        return{
            list:[],
            loading:false,
            headers:{
                 Authorization: sessionStorage.token
                },//头部token   博客上面的不太确定
            }
        },
        created()
    {
        this.getSelfImage()
    },
    methods: {
        jump(){
            this.$router.push("/index_student-check");
        },

        //图片
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

        /*上传过程中执行的函数*/
        progressFn(event, file, fileList){
            console.log(event, file, fileList)
            /*打开loading */
            /* this.loading = true;  */
        },
        errorFn(err, file, fileList){
            console.log(err, file, fileList)
            /*关闭loading */
            this.loading = false;
        },
        successFn(response, file, fileList){
            /* response是后台返回的结果*/
            /* file是当个文件对象*/
            /*
            filelist是上传多个文件的数组集合*/
            console. log(response, file, fileList)
            let {data} = response ;
            /*状态为200给个成功提示*/
            if(data. status==200){
                this . $message. success (data. msg);
            }else{
                this . $message . error(data .msg);
            }
            /*关闭loading */
            setTimeout(()=>{
                this.loading = false;
            }, 500)
        },




        handleRemove(file, fileList) {
            console.log(file, fileList);
            
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
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