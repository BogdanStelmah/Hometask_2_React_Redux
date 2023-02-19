import React from 'react';
import {EditNoteType, NoteState, NoteType} from "../../../@type/NoteType";
import {useAppDispatch} from "../../../hooks/redux";
import {deleteNote, editNote, setEditingNoteId} from "../../../store/reducers/NoteSlice";
import {openEditModal} from "../../../store/reducers/ModalSlice";
import {getLocateDateUSFormat} from "../../../utils/utils";

interface TableNotesProps {
	notes: NoteType[];
}

const TableNotes = ({ notes }: TableNotesProps) => {
	const dispatch = useAppDispatch();

	const editNoteHandler = (item: NoteType, e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		dispatch(setEditingNoteId(item.id));
		dispatch(openEditModal());
	}

	const deleteNoteHandler = (item: NoteType, e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		dispatch(deleteNote(item.id))
	}

	const archivedNoteHandler = (item: NoteType, e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		const element: EditNoteType = {
			id: item.id,
			state: NoteState.archive
		}

		dispatch(editNote(element))
	}

	return (
		<div className="pt-4">
			<table className="w-full border-separate border-spacing-y-3 text-left table-fixed" id="table__notes">
				<tbody>
				<tr className="bg-zinc-400 text-gray-50">
					<th className="rounded-bl-md rounded-tl-md w-16"></th>
					<th>Name</th>
					<th>Created</th>
					<th>Category</th>
					<th>Content</th>
					<th className="w-20">Dates</th>
					<th className="rounded-br-md rounded-tr-md w-24">
						<div className="flex justify-end m-2">
							<img src="https://cdn-icons-png.flaticon.com/512/650/650194.png"
								 className="w-5 h-5 ml-1" alt=''
							/>
							<img src="https://cdn-icons-png.flaticon.com/512/565/565491.png"
								 className="w-5 h-5 ml-1" alt=''
							/>
						</div>
					</th>
				</tr>

				{notes.map(item => {
					return <tr key={item.id} className="bg-zinc-200">
						<td className="rounded-bl-md rounded-tl-md">
							<div className="bg-zinc-500 w-10 h-10 rounded-full flex justify-center items-center m-2">
								<img
									src={item.category.imageSrc}
									className="w-6"
									alt={item.name}
								/>
							</div>
						</td>

						<td className="truncate ... pr-2">{item.name}</td>
						<td>{getLocateDateUSFormat(item.created)}</td>
						<td>{item.category.name}</td>
						<td className="truncate ... pr-2">{item.content}</td>
						<td>{item.dates.join(', ')}</td>

						<td className="rounded-br-md rounded-tr-md">
							<div className="flex justify-end m-2">
								<img src=" https://cdn-icons-png.flaticon.com/512/650/650194.png"
									 className="w-5 h-5 ml-1 cursor-pointer hover:opacity-50" alt=''
									 onClick={(e) => editNoteHandler(item, e)}
								/>
								<img src=" https://cdn-icons-png.flaticon.com/512/565/565491.png"
									 className="w-5 h-5 ml-1 cursor-pointer hover:opacity-50" alt=''
									 onClick={(e) => deleteNoteHandler(item, e)}
								/>
								<img src="https://cdn-icons-png.flaticon.com/512/61/61016.png"
									 className="w-5 h-5 ml-1 cursor-pointer hover:opacity-50" alt=''
									 onClick={(e) => archivedNoteHandler(item, e)}
								/>
							</div>
						</td>
					</tr>
				})}
				</tbody>
			</table>
		</div>
	);
};

export default TableNotes;