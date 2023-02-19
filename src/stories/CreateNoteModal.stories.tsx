import React, {useState} from "react";
import {ComponentMeta} from "@storybook/react";
import CreateNoteModal from "../components/Modal/CreateNoteModal";
import Button from "../components/UI/Button";
import Modal from "../components/Modal/Modal";

export default {
	title: 'Components/CreateModal',
	component: CreateNoteModal,
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

} as ComponentMeta<typeof CreateNoteModal>

export const CreateModal = (args: {error: boolean, showModal: boolean}) => {
	const categories = [{ id: 1, name: 'Idea' }, {id: 2, name: 'Task'}]

	const [name, setName] = useState({ value: '' })
	const [error, setError] = useState('')

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.value.trim().length) {
			setError('Please enter valid name!')
			return
		}

		handleClose();
	}

	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setName({ value: '' })
		setError('')
		setIsOpen(false);
	};

	return (
		<>
			<Button onClick={() => {handleOpen()}}>Create Note</Button>

			{(isOpen || args.showModal) &&
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
                            <select className="input">
								{categories.map(category =>
									<option value={category.id} key={category.id}>{category.name}</option>
								)}
                            </select>
                        </label>
                        <label>
                            Content:
                            <textarea placeholder='Content...' className="input"></textarea>
                        </label>

						{error && <p>{error}</p>}
						{args.error && <p>{args.error}</p>}

                        <Button type="submit" className="w-full">Create</Button>
                        <Button type="reset" onClick={() => {handleClose()}} className="w-full">Cancel</Button>
                    </form>
                </Modal>
			}
		</>
	)
}




