import axios from "axios";

const ApiConnect = axios.create({
    baseURL: 'http://127.0.0.1/api/',
    responseType: 'json',
    timeout: 7000,
});

ApiConnect.interceptors.request.use(async config => {
    config.headers['Accept-Control-Allow-Origin'] = '*'
    config.headers['Content-Type'] = 'multipart/form-data'
    
    // config.headers['Authorization'] = "Bearer ...."

    return config;
})  

export default ApiConnect;