import {createSlice} from "@reduxjs/toolkit";

interface ModalState {
	isEditNoteModalVisible: boolean;
	isCreateNoteModalVisible: boolean;
}

const initialState: ModalState = {
	isEditNoteModalVisible: false,
	isCreateNoteModalVisible: false
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openEditModal(state) {
			state.isEditNoteModalVisible = true;
		},
		closeEditModal(state) {
			state.isEditNoteModalVisible = false;
		},

		openCreateModal(state) {
			state.isCreateNoteModalVisible = true;
		},
		closeCreateModal(state) {
			state.isCreateNoteModalVisible = false;
		}
	}
})

export const { openEditModal, openCreateModal, closeEditModal, closeCreateModal } = modalSlice.actions
export default modalSlice.reducer;