import {NoteType} from "../@type/NoteType";

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

export const getLocateDateUSFormat = (date: string): string => {
	return new Date(date).toLocaleString('en-US', {month: "short", day: "numeric", year: "numeric"})
}