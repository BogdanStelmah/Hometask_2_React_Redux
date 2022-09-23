import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NoteState, NoteType} from "../../@type/NoteType";

type InitialStateType = {
	editingNoteId?: string | null
	notes: NoteType[];
	isLoading: boolean;
	error: string;
}

const initialState: InitialStateType = {
	editingNoteId: null,
	notes: [
		{
			id: '432',
			image: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			name: 'Shopping list',
			created: 'May 08, 2021',
			category: {
				id: '3',
				name: 'Idea',
				imageSrc: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
			},
			content: 'Tomatoes, bread',
			dates: [],
			state: NoteState.archive
		},
		{
			id: '1',
			image: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
			name: 'New Feature',
			created: 'May 05, 2021',
			category: {
				id: '3',
				name: 'Idea',
				imageSrc: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
			},
			content: 'Feature 3/5/2021',
			dates: ['3/5/2021'],
			state: NoteState.active
		},
		{
			id: '2',
			image: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			name: 'Books',
			created: 'May 15, 2021',
			category: {
				id: '1',
				name: 'Task',
				imageSrc: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			},
			content: 'The Lean Startup',
			dates: [],
			state: NoteState.active
		},
		{
			id: '3',
			image: 'https://cdn-icons-png.flaticon.com/512/775/775558.png',
			name: 'The theory of everything',
			created: 'April 27, 2021',
			category: {
				id: '1',
				name: 'Task',
				imageSrc: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			},
			content: 'The theory of everything',
			dates: [],
			state: NoteState.active
		},
		{
			id: '4',
			image: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
			name: 'New Feature',
			created: 'May 05, 2021',
			category: {
				id: '3',
				name: 'Idea',
				imageSrc: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
			},
			content: 'New 3/5/2021',
			dates: ['3/5/2021'],
			state: NoteState.active
		},
		{
			id: '5',
			image: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			name: 'Fruits',
			created: 'May 20, 2021',
			category: {
				id: '1',
				name: 'Task',
				imageSrc: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			},
			content: '',
			dates: [],
			state: NoteState.active
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
			state.notes = state.notes.filter(note => note.id !== action.payload.id);
		},
		editNote(state, action: PayloadAction<NoteType>) {
			const editElementIndex = state.notes.findIndex(note => note.id === action.payload.id);
			state.notes[editElementIndex] = {...state.notes[editElementIndex], ...action.payload};
		},

		setEditingNoteId(state, action: PayloadAction<string>) {
			state.editingNoteId = action.payload;
		},
	}
})

export const { deleteNote, editNote, setEditingNoteId, addNote } = noteSlice.actions
export default noteSlice.reducer;