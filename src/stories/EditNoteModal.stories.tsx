import {ComponentMeta} from "@storybook/react";
import EditNoteModal from "../components/Modal/EditNoteModal";
import Button from "../components/UI/Button";
import React, {useState} from "react";
import Modal from "../components/Modal/Modal";

export default {
	title: 'Components/EditModal',
	component: EditNoteModal,
	argTypes: {
		error: {
			control: {
				type: 'text'
			},
			defaultValue: '',
			description: 'Displaying validation errors'
		},
		showModal: {
			control: {
				type: 'boolean'
			},
			defaultValue: false,
			description: 'Modal window status',
		}
	}

} as ComponentMeta<typeof EditNoteModal>

export const EditModal = (args: {error: boolean, showModal: boolean}) => {
	const categories = [{ id: 1, name: 'Idea' }, {id: 2, name: 'Task'}]

	const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState({ value: 'name' })
	const [error, setError] = useState('')
	const [category, setCategory] = useState({ value: '2' })
	const [content, setContent] = useState({ value: 'content'})

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.value.trim().length) {
			setError('Please enter valid name!')
			return
		}

		handleClose();
	}

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Button onClick={() => {handleOpen()}}>Edit Note</Button>

			{(isOpen || args.showModal) &&
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
						{args.error && <p>{args.error}</p>}

                        <Button type="submit" className="w-full">
                            Edit
                        </Button>

                        <Button type="reset" className="w-full" onClick={() => {handleClose()}}>
                            Cancel
                        </Button>
                    </form>
                </Modal>
			}
		</>
	)
}