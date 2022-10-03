import axios from "axios";

export const API_URL = 'https://hometask-3-nodejs.herokuapp.com'

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL + '/api'
})

export default $api