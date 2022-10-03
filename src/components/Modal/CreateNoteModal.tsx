import React, {useState} from 'react';
import Modal from "./Modal";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {closeCreateModal} from "../../store/reducers/ModalSlice";
import {CreateNoteType} from "../../@type/NoteType";
import {createNote} from "../../store/reducers/NoteSlice";
import Button from "../UI/Button";

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
			<h3 className="text-3xl text-center pb-3 border-b-2 border-white">Create note</h3>
			<form method="post" className="flex flex-col gap-3" onSubmit={submitHandler}>
				<label>
					Name:
					<input type="text"
						   placeholder='Name...'
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
						placeholder='Content...'
						onChange={event => setContent({ value: event.target.value })}
						className="input"
					></textarea>
				</label>

				{error && <p>{error}</p>}

				<Button type="submit" className="w-full">
					Create
				</Button>

				<Button type="reset" onClick={(event => cancelHandler(event))} className="w-full">
					Cancel
				</Button>
			</form>
		</Modal>
	);
};

export default CreateNoteModal;