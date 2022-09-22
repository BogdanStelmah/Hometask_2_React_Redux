import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NoteType} from "../../@type/NoteType";

interface ArchivedNoteState {
	archivedNotes: NoteType[];
	isLoading: boolean;
	error: string;
}

const initialState: ArchivedNoteState = {
	archivedNotes: [
		{
			key: '432',
			image: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			name: 'Shopping list',
			created: 'May 08, 2021',
			category: 'Task',
			content: 'Tomatoes, bread',
			dates: ''
		}
	],
	isLoading: false,
	error: ''
}

export const archivedNoteSlice = createSlice({
	name: 'archivedNote',
	initialState,
	reducers: {
		addArchivedNote(state, action: PayloadAction<NoteType>) {
			state.archivedNotes.push(action.payload);
		},
		deleteArchivedNote(state, action: PayloadAction<NoteType>) {
			state.archivedNotes = state.archivedNotes.filter(note => note.key !== action.payload.key);
		},
	}
})

export const { addArchivedNote, deleteArchivedNote } = archivedNoteSlice.actions
export default archivedNoteSlice.reducer;