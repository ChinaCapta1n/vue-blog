import axios from 'axios';

const SERVER_BASE_URL = "http://localhost:5173/mock";

axios.defaults.baseURL = SERVER_BASE_URL;
axios.defaults.timeout = 10000;
axios.defaults.headers = {
    'Content-Type':'application/json;charset=UTF-8'
}

axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
})

export function get (url, params={}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(error => {
            reject(error);
        })
    })
}

export function post (url, data={}, config={}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, config)
        .then(response => {
            resolve(response.data)
        })
        .catch(error => {
            reject(error);
        })
    })
}