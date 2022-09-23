import React, {useEffect, useState} from 'react';
import Modal from "./Modal";
import classes from './Modal.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {closeEditModal} from "../../store/reducers/ModalSlice";
import {dateSearch} from "../../utils/utils";
import {editNote} from "../../store/reducers/NoteSlice";

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

		const indexCategory = categories.findIndex(item => item.id === category.value)
		if (editingNote) {
			const copyNote = {...editingNote}

			copyNote.name = name.value
			copyNote.category = {...copyNote.category, ...categories[indexCategory]}
			copyNote.content = content.value
			copyNote.dates = dateSearch(content.value)

			dispatch(editNote(copyNote))
		}

		dispatch(closeEditModal())
	}

	const cancelHandler = (e: React.FormEvent) => {
		dispatch(closeEditModal())
	}

	return (
		<Modal>
			<h3 className={classes.modal__title}>Edit note</h3>
			<form method="post" className={classes.modal__form} onSubmit={submitHandler}>
				<label>
					Name:
					<input type="text"
						value={name.value}
						onChange={event => setName({ value: event.target.value })}
					/>
				</label>
				<label>
					Category:
					<select value={category.value} onChange={event => setCategory({ value: event.target.value })}>
						{categories.map(category =>
							<option value={category.id} key={category.id}>{category.name}</option>
						)}
					</select>
				</label>
				<label>
					Content:
					<textarea
						value={content.value}
						onChange={event => setContent({ value: event.target.value })
					}></textarea>
				</label>

				{error && <p>{error}</p>}

				<button type="submit">Edit</button>
				<button type="reset" onClick={(event => cancelHandler(event))}>Cancel</button>
			</form>
		</Modal>
	);
};

export default EditNoteModal;