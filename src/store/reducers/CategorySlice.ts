import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CategoryStatType, CategoryType, StatType} from "../../@type/Category";
import NoteService from "../../services/NoteService";
import CategoryService from "../../services/CategoryService";

export const getStat = createAsyncThunk<StatType>(
	'category/stat',
	async (data,thunkAPI) => {
		try {
			const response = await NoteService.getStat();
			return response.data
		} catch (error: any) {
			thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const getCategories = createAsyncThunk<CategoryType[]>(
	'category/getAll',
	async (data, thunkAPI) => {
		try {
			const response = await CategoryService.fetchCategories();
			return response.data
		} catch (error: any) {
			thunkAPI.rejectWithValue(error.message)
		}
	}
)

interface CategoryState {
	categories: CategoryStatType[];
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	error: string;
}

const initialState: CategoryState = {
	categories: [],
	loading: 'idle',
	error: ''
}

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(getStat.fulfilled, (state, action) => {
			const statistics = action.payload

			for (let i = 0; i < state.categories.length; i++){
				state.categories[i].active = statistics[state.categories[i].name]?.active || 0
				state.categories[i].archived = statistics[state.categories[i].name]?.archive || 0
			}

			state.loading = 'succeeded'
		})

		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.categories = action.payload
		})
	}
})

export default categorySlice.reducer;