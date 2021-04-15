import axios from 'axios';

const baseURL = 'http://localhost:8090/api';

const axiosInstance = axios.create({ baseURL: baseURL });

export default axiosInstance;
