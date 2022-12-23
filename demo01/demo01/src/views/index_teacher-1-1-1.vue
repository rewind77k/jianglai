<template>
    <h3>竞赛老师提交excel</h3>
    <!-- action="http://127.0.0.1:8000/upload_excel/   counselor/upload/" -->
    <!-- multiple -->
    <div>
        <el-upload
        v-loading="loading"
        accept=".xlsx"
        
        :headers="headers"
        drag
        action="http://127.0.0.1:8000/teacher/upload/"
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
            <div class="el-upload__tip" slot="tip">只能上传Excel(.xlsx)文件,且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>


export default{
    data(){
        return{
            loading:false,
            headers:{
                 Authorization: sessionStorage.token
                },//头部token   博客上面的不太确定
            }
        },
    methods: {
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