import axios from 'axios'

export const db = axios.create({
    baseURL:"https://example.com"
})