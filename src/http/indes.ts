import axios from "axios";

export const API_URL = process.env.PORT || 'http://localhost:3000'

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL + '/api'
})

export default $api