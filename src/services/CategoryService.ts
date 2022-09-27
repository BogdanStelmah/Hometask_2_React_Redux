import {AxiosResponse} from "axios";
import $api from "../http/indes";

export default class CategoryService {
	static async fetchCategories(): Promise<AxiosResponse> {
		return await $api({
			method: 'get',
			url: 'category'
		})
	}
}