//定制请求的实例

//导入axios  npm install axios
import axios from 'axios';
import { ElMessage } from 'element-plus'
//定义一个变量,记录公共的前缀  ,  baseURL
const baseURL = '/api';
const instance = axios.create({baseURL})

//添加请求拦截器
import { userTokenStore } from '@/stores/token';
import router from '@/router';
instance.interceptors.request.use(
    (config)=>{
        const tokenStore=userTokenStore()
        if (tokenStore.token) {
            config.headers.Authorization=tokenStore.token
        }
        return config
    },
    (err)=>{
        Promise.reject(err)
    }
)

//添加响应拦截器
instance.interceptors.response.use(
    result=>{
        //判断业务操作码
        if (result.data.code===0) {
            return result.data;
        }
        // alert(result.data.message?result.data.message:"服务异常")
        ElMessage.error(result.data.message?result.data.message:"服务异常")
        return Promise.reject(result.data)
    },
    err=>{
        if (err.response.status===401) {
            ElMessage.error('用户未登录')
            router.push('/login')
        }else{
            ElMessage.error('服务异常')
            return Promise.reject(err);//异步的状态转化成失败的状态
        }
    }
)

export default instance;