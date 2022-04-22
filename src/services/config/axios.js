import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'http://54.86.153.173:8080/',
});

export default clientAxios;