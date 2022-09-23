import {NoteType} from "../@type/NoteType";


export const numberNotesByCategories = (notes: NoteType[]) => {

}

//Regular expression for finding dates
export const dateSearch = (content: string): string[] => {
	const dateReg = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g;
	const dates = content.match(dateReg);
	if (Array.isArray(dates)) {
		return dates
	}

	return []
}

//Generates a unique id for the note
export const generateKey = (): string => {
	return Math.random().toString().split('.')[1].substring(0, 12);
}

export const getLocateDateUSFormat = (): string => {
	return new Date().toLocaleString('en-US', {month: "short", day: "numeric", year: "numeric"})
}