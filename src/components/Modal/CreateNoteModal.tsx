import React, {useState} from 'react';
import Modal from "./Modal";
import classes from './Modal.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {closeCreateModal} from "../../store/reducers/ModalSlice";
import {CreateNoteType} from "../../@type/NoteType";
import {createNote} from "../../store/reducers/NoteSlice";
import {getStat} from "../../store/reducers/CategorySlice";

const CreateNoteModal = () => {
	const dispatch = useAppDispatch()

	const categories = useAppSelector(state => state.categoryReducer.categories);

	//Form fields
	const [name, setName] = useState({ value: '' })
	const [error, setError] = useState('')
	const [category, setCategory] = useState({ value: categories[0]?.id })
	const [content, setContent] = useState({ value: '' })

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.value.trim().length) {
			setError('Please enter valid name!')
			return
		}

		const newNote: CreateNoteType = {
			name: name.value,
			categoryId: category.value,
			content: content.value,
		}

		dispatch(createNote(newNote))

		dispatch(closeCreateModal())
	}

	const cancelHandler = (e: React.FormEvent) => {
		dispatch(closeCreateModal())
	}

	return (
		<Modal>
			<h3 className={classes.modal__title}>Create note</h3>
			<form method="post" className={classes.modal__form} onSubmit={submitHandler}>
				<label>
					Name:
					<input type="text"
						   placeholder='Name...'
						   value={name.value}
						   onChange={event => setName({ value: event.target.value })}
					/>
				</label>
				<label>
					Category:
					<select
						value={category.value}
						onChange={event => setCategory({ value: event.target.value })}
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
						placeholder='Content...'
						onChange={event => setContent({ value: event.target.value })
						}></textarea>
				</label>

				{error && <p>{error}</p>}

				<button type="submit">Create</button>
				<button type="reset" onClick={(event => cancelHandler(event))}>Cancel</button>
			</form>
		</Modal>
	);
};

export default CreateNoteModal;