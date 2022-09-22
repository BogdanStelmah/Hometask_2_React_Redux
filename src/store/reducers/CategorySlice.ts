import {createSlice} from "@reduxjs/toolkit";
import {CategoryType} from "../../@type/Category";

interface CategoryState {
	categories: CategoryType[];
	isLoading: boolean;
	error: string;
}

const initialState: CategoryState = {
	categories: [
		{
			name: 'Task',
			imageSrc: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
			active: 0,
			archived: 0
		},
		{
			name: 'Random Thought',
			imageSrc: 'https://cdn-icons-png.flaticon.com/512/775/775558.png',
			active: 0,
			archived: 0
		},
		{
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

	}
})

export default categorySlice.reducer;