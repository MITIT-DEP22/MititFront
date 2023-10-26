import axios from 'axios'
export const API_URL =  process.env.REACT_APP_HOST

const $api = axios.create({
    baseURL: API_URL,
})
export default $api;

