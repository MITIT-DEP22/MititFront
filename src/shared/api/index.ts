import axios from 'axios'

export const API_URL = "https://651c1bed194f77f2a5af6768.mockapi.io/api/v1/"

// export const FTP_URL = "https://10.5.113.113:3005/ftp"

// export const FTP_URL_DOWNLOAD = FTP_URL + "/download/"
// export const FTP_URL_UPLOAD = FTP_URL + "/upload/"


const $api = axios.create({
    baseURL: API_URL,
})

export default $api;

