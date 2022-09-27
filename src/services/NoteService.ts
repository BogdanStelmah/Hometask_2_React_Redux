import $api from "../http/indes";
import {CreateNoteType, EditNoteType} from "../@type/NoteType";
import {AxiosResponse} from "axios";

export default class NoteService {
	static async fetchNotes(): Promise<AxiosResponse> {
		return await $api({
			method: 'get',
			url: 'notes'
		})
	}

	static async getNote(id: string): Promise<AxiosResponse> {
		return await $api({
			method: 'get',
			url: `notes/${id}`
		})
	}

	static async getStat(): Promise<AxiosResponse> {
		return  await $api({
			method: 'get',
			url: `notes/stats`
		})
	}

	static async createNote(data: CreateNoteType): Promise<AxiosResponse> {
		return  await $api({
			method: 'post',
			url: `notes`,
			data: data
		});
	}

	static async deleteNote(id: string): Promise<AxiosResponse> {
		return await $api({
			method: 'delete',
			url: `notes/${id}`,
		});
	}

	static async editNote(data: EditNoteType): Promise<AxiosResponse> {
		return  await $api({
			method: 'patch',
			url: `notes/${data.id}`,
			data: data
		});
	}
}