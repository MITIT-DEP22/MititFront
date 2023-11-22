import axios from 'axios'
export const API_URL =  process.env.REACT_APP_HOST
export const IMAGES_PATH = API_URL + "/images/"
const $api = axios.create({
    baseURL: API_URL,
})
export default $api;

