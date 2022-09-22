import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NoteType} from "../../@type/NoteType";

interface NoteState {
	notes: NoteType[];
	isLoading: boolean;
	error: string;
}

const initialState: NoteState = {
	notes: [
		{
			key: '1',
			image: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
			name: 'New Feature',
			created: 'May 05, 2021',
			category: 'Idea',
			content: 'Feature 3/5/2021',
			dates: '3/5/2021'
		},
		{
			key: '2',
			image: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			name: 'Books',
			created: 'May 15, 2021',
			category: 'Task',
			content: 'The Lean Startup',
			dates: ''
		},
		{
			key: '3',
			image: 'https://cdn-icons-png.flaticon.com/512/775/775558.png',
			name: 'The theory of everything',
			created: 'April 27, 2021',
			category: 'Random Thought',
			content: 'The theory of everything',
			dates: ''
		},
		{
			key: '4',
			image: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
			name: 'New Feature',
			created: 'May 05, 2021',
			category: 'Idea',
			content: 'New 3/5/2021',
			dates: '3/5/2021'
		},
		{
			key: '5',
			image: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			name: 'Fruits',
			created: 'May 20, 2021',
			category: 'Task',
			content: '',
			dates: ''
		}
	],
	isLoading: false,
	error: ''
}

export const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		addNote(state, action: PayloadAction<NoteType>) {
			state.notes.push(action.payload);
		},
		deleteNote(state, action: PayloadAction<NoteType>) {
			state.notes = state.notes.filter(note => note.key !== action.payload.key);
		},
		editNote(state, action: PayloadAction<NoteType>) {
			const editElementIndex = state.notes.findIndex(note => note.key === action.payload.key);
			state.notes[editElementIndex] = {...state.notes[editElementIndex], ...action.payload};
		}
	}
})

export const { addNote, deleteNote, editNote } = noteSlice.actions
export default noteSlice.reducer;