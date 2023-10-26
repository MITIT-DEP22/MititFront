import axios from 'axios'
export const API_URL =  process.env.REACT_APP_HOST
console.log(API_URL)

const $api = axios.create({
    baseURL: API_URL,
})
export default $api;

