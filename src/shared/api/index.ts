import axios from 'axios'
export const API_URL =  process.env.REACT_APP_HOST || "http://46.219.127.6:3300/api/v1/"

const $api = axios.create({
    baseURL: API_URL,
})
export default $api;

