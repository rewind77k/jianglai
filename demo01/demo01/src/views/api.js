import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:8000/";

// export const loginForm=data=>{
//     return axios.post("api/login",data).then(res=>res.data)
// }
export function login(param){
    return axios({
        url: '/login/',
        method: 'post',
        params: param
    })
}
export function op(param){
    return axios({
        url: '/counselor/verify/?op=1',
        method: 'GET',
        params: param
    })
}