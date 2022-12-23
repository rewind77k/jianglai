<template>
    <!-- <h3>查看 {{ this.$route.query.SNumber }} {{ this.$route.query.Name }} 成绩</h3> -->
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/index_counselor-GradeOverLook' }">查看成绩</el-breadcrumb-item>
    <el-breadcrumb-item
      ><!-- <a href="/">promotion management</a> --> 详细信息</el-breadcrumb-item
        >
    </el-breadcrumb>


    <el-descriptions title="" :column="4" border>
        <el-descriptions-item
            label="姓名"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
        > {{ this.$route.query.Name }}</el-descriptions-item
        >

        <el-descriptions-item label="学号" label-align="center" align="center" >{{ this.$route.query.SNumber }}</el-descriptions-item>
        <el-descriptions-item label="综测成绩" label-align="center" align="center">{{ cl2_grade1 }}</el-descriptions-item>
        <el-descriptions-item label="等第" label-align="center" align="center">{{ cl2_grade2 }}</el-descriptions-item>   
        <el-descriptions-item label="德育" label-align="center" align="center">{{ cl2_grade3 }}</el-descriptions-item>
        <el-descriptions-item label="智育" label-align="center" align="center">{{ cl2_grade4 }}</el-descriptions-item>
        <el-descriptions-item label="体育" label-align="center" align="center">{{ cl2_grade5 }}</el-descriptions-item>
        <el-descriptions-item label="能力" label-align="center" align="center">{{ cl2_grade6 }}</el-descriptions-item>
        <el-descriptions-item label="志愿活动" label-align="center" align="center">{{ cl2_grade7 }}</el-descriptions-item>
        <el-descriptions-item label="德育附加项目" label-align="center" align="center">{{ cl2_grade8 }}</el-descriptions-item>
        <el-descriptions-item label="论文科研" label-align="center" align="center">{{ cl2_grade9 }}</el-descriptions-item>
        <el-descriptions-item label="发明专利" label-align="center" align="center">{{ cl2_grade10 }}</el-descriptions-item>
        <el-descriptions-item label="能力证书" label-align="center" align="center">{{ cl2_grade11 }}</el-descriptions-item>
        <el-descriptions-item label="小众竞赛" label-align="center" align="center">{{ cl2_grade12 }}</el-descriptions-item>
        <el-descriptions-item label="体育竞赛" label-align="center" align="center">{{ cl2_grade13 }}</el-descriptions-item>
        <el-descriptions-item label="校园文化活动" label-align="center" align="center">{{ cl2_grade14 }}</el-descriptions-item>
        

       
        
    </el-descriptions>
    


</template>
<script>
import axios from "axios"

export default {
    data(){
        return{
            cl2_grade1:'',
            cl2_grade2:'',
            cl2_grade3:'',
            cl2_grade4:'',
            cl2_grade5:'',
            cl2_grade6:'',
            cl2_grade7:'',
            cl2_grade8:'',
            cl2_grade9:'',
            cl2_grade10:'',
            cl2_grade11:'',
            cl2_grade12:'',
            cl2_grade13:'',
            cl2_grade14:'',

        }

    },
    created(){
        this.getStudentGrade()
    },
    methods:{
        getStudentGrade(){
            axios.get(this.build('http://127.0.0.1:8000/counselor/lookover/',
            {
                op:'2',
                st_id:this.$route.query.SNumber,
            }
            )).then((res)=>{
                console.log('res.data.data',res.data.data)
                console.log('res.data.data0',res.data.data[1].cl1_class)
                this.cl2_grade1 = res.data.data[1].cl1_grade
                this.cl2_grade2 = res.data.data[1].cl1_class
                this.cl2_grade3 = res.data.data[2].cl2_list[1]
                this.cl2_grade4 = res.data.data[2].cl2_list[2]
                this.cl2_grade5 = res.data.data[2].cl2_list[3]
                this.cl2_grade6 = res.data.data[2].cl2_list[4]
                this.cl2_grade7 = res.data.data[3].cl3_dic['101']
                this.cl2_grade8 = res.data.data[3].cl3_dic['102']
                this.cl2_grade9 = res.data.data[3].cl3_dic['201']
                this.cl2_grade10 = res.data.data[3].cl3_dic['202']
                this.cl2_grade11 = res.data.data[3].cl3_dic['203']
                this.cl2_grade12 = res.data.data[3].cl3_dic['204']
                this.cl2_grade13 = res.data.data[3].cl3_dic['301']
                this.cl2_grade14 = res.data.data[3].cl3_dic['401']



                
                // this.allGradeList = res.data.data
                // console.log(allGradeList)
                // this.$message.success('获取成绩成功')
            }).catch((error)=>{
                console.log("错 ")
                // return this.$message.error(res.data.msg)
                });

        },
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
.my-label {
  background: var(--el-color-success-light-9);
}
.my-content {
  background: var(--el-color-danger-light-9);
}
</style>

