import React, {useEffect, useState} from 'react';
import Modal from "./Modal";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {closeEditModal} from "../../store/reducers/ModalSlice";
import {editNote} from "../../store/reducers/NoteSlice";
import {EditNoteType} from "../../@type/NoteType";
import Button from "../UI/Button";

const EditNoteModal = () => {
	const categories = useAppSelector(state => state.categoryReducer.categories);
	const editingNote = useAppSelector(state =>
		state.noteReducer.notes.find(note =>
			note.id === state.noteReducer.editingNoteId
		)
	)

	const dispatch = useAppDispatch()

	//Form fields
	const [name, setName] = useState({ value: '' })
	const [error, setError] = useState('')
	const [category, setCategory] = useState({ value: '' })
	const [content, setContent] = useState({ value: '' })

	useEffect(() => {
		if (editingNote) {
			setName({ value: editingNote.name })
			setCategory({ value: editingNote.category.id })
			setContent({ value: editingNote.content })
		}
	}, [editingNote])

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.value.trim().length) {
			setError('Please enter valid name!')
			return
		}

		if (editingNote) {
			const note: EditNoteType = {
				id: editingNote.id,
				name: name.value,
				content: content.value,
				categoryId: category.value
			}

			dispatch(editNote(note))
		}

		dispatch(closeEditModal())
	}

	const cancelHandler = (e: React.FormEvent) => {
		dispatch(closeEditModal())
	}

	return (
		<Modal>
			<h3 className="text-3xl text-center pb-3 border-b-2 border-white">Edit note</h3>
			<form method="post" className="flex flex-col gap-3" onSubmit={submitHandler}>
				<label>
					Name:
					<input
						type="text"
						value={name.value}
						onChange={event => setName({ value: event.target.value })}
						className="input"
					/>
				</label>
				<label>
					Category:
					<select
						value={category.value}
						onChange={event => setCategory({ value: event.target.value })}
						className="input"
					>
						{categories.map(category =>
							<option value={category.id} key={category.id}>{category.name}</option>
						)}
					</select>
				</label>
				<label>
					Content:
					<textarea
						value={content.value}
						onChange={event => setContent({ value: event.target.value })}
						className="input"
					></textarea>
				</label>

				{error && <p>{error}</p>}

				<Button type="submit" className="w-full">
					Edit
				</Button>

				<Button type="reset" className="w-full" onClick={(event => cancelHandler(event))}>
					Cancel
				</Button>
			</form>
		</Modal>
	);
};

export default EditNoteModal;