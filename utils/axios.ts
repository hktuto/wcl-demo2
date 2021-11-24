import axios from 'axios';

export const api = axios.create({
    baseURL:"http://localhost:3000/api"
})

api.interceptors.request.use((config) => {
    return config;
}, function(error){
    console.log(error);
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('error');
})