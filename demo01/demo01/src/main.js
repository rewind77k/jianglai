import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import elementIcon from "./plugins/icons"
import ElementUI from 'element-plus'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'
import { ID_INJECTION_KEY } from 'element-plus'
/* import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer' */

import { ElMessage } from 'element-plus' //?
import { VueCookies } from 'vue-cookies'
// 导入全局样式表   body html占满
import '@/assets/css/global.css'
// import './utils/http'
//需要后续移动到api文件  集中管理，暂不处理 
// axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
// const service = axios.create({
//     baseURL: 'http://localhost:8000',//8080/api
//     timeout: 15000
// })
// Vue.prototype.axios = axios
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-fromurlencodeed';
// axios.defaults.withCredentials = false;

//axios请求拦截器
// axios.interceptors.request.use(config=>{
    // console.log(config)
//     config.headers['X-Requested-With'] = 'XMLHttpRequest';
    // config.headers.Authorization = window.sessionStorage.getItem('token')
    // return config
// })

/* Vue.use(Viewer) */
const app = createApp(App)

app.use(router)
// app.use(VueCookies)
app.use(ElementPlus)
app.use(ElementUI)
app.use(elementIcon)

app.mount('#app')


// createApp(App).use(router).use(elementIcon).mount('#app')
// app.prototype.$axios = axios
// app.config.globalProperties.$http = axios
// Vue.use(axios)
// app.prototype.$message = ElMessage