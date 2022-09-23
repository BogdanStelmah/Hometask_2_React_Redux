import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CategoryStatType} from "../../@type/Category";
import {NoteState, NoteType} from "../../@type/NoteType";

interface CategoryState {
	categories: CategoryStatType[];
	isLoading: boolean;
	error: string;
}

const initialState: CategoryState = {
	categories: [
		{
			id: '1',
			name: 'Task',
			imageSrc: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			active: 0,
			archived: 0
		},
		{
			id: '2',
			name: 'Random Thought',
			imageSrc: 'https://cdn-icons-png.flaticon.com/512/775/775558.png',
			active: 0,
			archived: 0
		},
		{
			id: '3',
			name: 'Idea',
			imageSrc: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
			active: 0,
			archived: 0
		}
	],
	isLoading: false,
	error: ''
}

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		updateCategoryInfo(state, action: PayloadAction<NoteType[]>) {
			const notes = action.payload;

			for (let i = 0; i < state.categories.length; i++) {
				state.categories[i].active = notes.filter(note =>
					note.state === NoteState.active && note.category.name === state.categories[i].name
				).length

				state.categories[i].archived = notes.filter(note =>
					note.state === NoteState.archive && note.category.name === state.categories[i].name
				).length
			}
		}
	}
})

export const { updateCategoryInfo } = categorySlice.actions
export default categorySlice.reducer;