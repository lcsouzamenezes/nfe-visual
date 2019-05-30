import axios from 'axios';

// axios.interceptors.request.use((config) => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     const conf = config;

//     if (user) {
//         conf.headers.Authorization = `Bearer ${user.token}`;
//     }

//     return conf;
// }, err => Promise.reject(err));

let instance = {};
if (process.env.NODE_ENV !== 'production') {

    instance = axios.create({
        baseURL: process.env.VUE_APP_API,
    });
} else {
    instance = axios.create({
        baseURL: process.env.VUE_APP_API,
    });
}

export const getRequest = function(path) {
    return instance.get(`${path}`);
}

export const postRequest = (path, data) => instance.post(path, data);

export const putRequest = (path, bodyFormData, id) => instance.post(`${path}/${id}`, bodyFormData);

export const deleteRequest = (path, id) => instance.delete(`${path}/${id}`);

export const HTTP = config => axios.create(config);
