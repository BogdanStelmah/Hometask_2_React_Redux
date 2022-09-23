import {CategoryType} from "./Category";

export type NoteType = {
	id: string
	image: string
	name: string
	created: string
	category: CategoryType
	content: string
	dates: string[]
	state: NoteState
}

export enum NoteState {
	active,
	archive
}