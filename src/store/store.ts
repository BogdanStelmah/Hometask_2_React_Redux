import {combineReducers, configureStore} from "@reduxjs/toolkit";
import noteReducer from "./reducers/NoteSlice";
import categoryReducer from "./reducers/CategorySlice";
import archivedNoteReducer from "./reducers/ArchivedNoteSlice";

const rootReducer = combineReducers({
	noteReducer,
	categoryReducer,
	archivedNoteReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']