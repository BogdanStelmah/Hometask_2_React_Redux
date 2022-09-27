import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CreateNoteType, EditNoteType, NoteType} from "../../@type/NoteType";
import NoteService from "../../services/NoteService";

export const fetchNotes = createAsyncThunk<NoteType[]>(
	'note/fetchNotes',
	async (data,thunkAPI) => {
		try {
			const response = await NoteService.fetchNotes();
			return response.data
		} catch (error: any) {
			thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const createNote = createAsyncThunk<NoteType, CreateNoteType>(
	'note/createNote',
	async (data: CreateNoteType, thunkAPI) => {
		try {
			const response = await NoteService.createNote(data);
			return response.data
		} catch (error: any) {
			thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const deleteNote = createAsyncThunk(
	'note/deleteNote',
	async (id: string, thunkAPI) => {
		try {
			await NoteService.deleteNote(id);
			return id;
		} catch (error: any) {
			thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const editNote = createAsyncThunk<NoteType, EditNoteType>(
	'note/editNote',
	async (data, thunkAPI) => {
		try {
			const response = await NoteService.editNote(data);
			return response.data;
		} catch (error: any) {
			thunkAPI.rejectWithValue(error.message)
		}
	}
)

type InitialStateType = {
	editingNoteId?: string | null
	notes: NoteType[];
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	error: [];
}

const initialState: InitialStateType = {
	editingNoteId: null,
	notes: [],
	loading: "idle",
	error: [],
}

export const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		setEditingNoteId(state, action: PayloadAction<string>) {
			state.editingNoteId = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchNotes.fulfilled, (state, action) => {
			state.notes = action.payload
		})

		builder.addCase(createNote.fulfilled, (state, action) => {
			state.notes.push(action.payload)
		})

		builder.addCase(deleteNote.fulfilled, (state, action) => {
			state.notes = state.notes.filter(note => note.id !== action.payload);
		})

		builder.addCase(editNote.fulfilled, (state, action) => {
			const editElementIndex = state.notes.findIndex(note => note.id === action.payload.id);
			state.notes[editElementIndex] = {...state.notes[editElementIndex], ...action.payload};
		})
	}
})

export const { setEditingNoteId } = noteSlice.actions
export default noteSlice.reducer;