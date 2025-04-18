import axios from "axios";
import Swal from "sweetalert2";


const axiosInstance = axios.create({
    baseURL : 'http://localhost:3000',
    timeout : 100000,
    headers : {
        "Content-Type" : 'application/json'
    }
})
axiosInstance.interceptors.request.use(
    (req)=>{
        if(localStorage.getItem('token2')){
            req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        }
        return req;
    }
)
axiosInstance.interceptors.response.use(
    (response)=>response.data,
    (error)=>{
        console.log(error)
        let interceptorError = {}
         if(error.status == 404){
                        Swal.fire({
                            title : 'Server Error',
                            icon : 'error',
                            toast : true,
                            timer : 3000,
                            showConfirmButton : false,
                            position : 'bottom-end'
                        })
                        
        }else{
            interceptorError = {message : error.response.data.message}
        }
        return Promise.reject(interceptorError)}
)

export default axiosInstance