import axios from 'axios'
export const API_URL =  "http://46.219.127.6:8082/api/v1/"

const $api = axios.create({
    baseURL: API_URL,
})
export default $api;

