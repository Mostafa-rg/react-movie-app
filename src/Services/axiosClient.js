import axios from "axios";
import queryString from "query-string"


import apiConfig from "./apiConfig";
import queryString from 'query-string'

const axiosClient = axios.create({
    BASE_URL: apiConfig.BASE_URL,
    headers:{
        'Content-Type': 'application.json'
    },

    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
});

axiosClient.interceptors.use(async config => config)

axiosClient.interceptors.response.use(response => {
    if(response && response.data) {
        return response.data
    }

    return response
}, error => {
    throw error
})

export default axiosClient;