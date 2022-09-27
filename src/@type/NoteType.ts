import {CategoryType} from "./Category";

export type CreateNoteType = {
	name: string
	categoryId: string
	content: string
}

export type EditNoteType = {
	id: string
	name?: string
	categoryId?: string
	content?: string
	state?: NoteState
}

export type NoteType = {
	id: string
	name: string
	created: string
	category: CategoryType
	content: string
	dates: string[]
	state: NoteState
}

export enum NoteState {
	active = "Active",
	archive = "Archive"
}