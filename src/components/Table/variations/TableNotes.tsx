import React from 'react';
import classes from "../Table.module.css";
import {NoteState, NoteType} from "../../../@type/NoteType";
import {useAppDispatch} from "../../../hooks/redux";
import {deleteNote, editNote, setEditingNoteId} from "../../../store/reducers/NoteSlice";
import {openEditModal} from "../../../store/reducers/ModalSlice";

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
		dispatch(deleteNote(item));
	}

	const archivedNoteHandler = (item: NoteType, e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		const element = {...item}
		element.state = NoteState.archive

		dispatch(editNote(element))
	}

	return (
		<table className={classes.table__notes} id="table__notes">
			<tbody>
				<tr>
					<th></th>
					<th>Name</th>
					<th>Created</th>
					<th>Category</th>
					<th>Content</th>
					<th>Dates</th>
					<th className={classes.align__right}>
						<img src="https://cdn-icons-png.flaticon.com/512/650/650194.png"
							 className={classes.image__category} alt=''
						/>
						<img src="https://cdn-icons-png.flaticon.com/512/565/565491.png"
							 className={classes.image__category} alt=''
						/>
					</th>
				</tr>

				{notes.map(item => {
					return <tr key={item.id}>
						<td>
							<div className={classes.notes__image}>
								<img
									src={item.image}
									className={classes.image__category}
									alt={item.name}
								/>
							</div>
						</td>
						<td>{item.name.length > 20 ? item.name.substring(0, 20) + '...' : item.name}</td>
						<td>{item.created}</td>
						<td>{item.category.name}</td>
						<td>{item.content.length > 20 ? item.content.substring(0, 20) + '...' : item.content}</td>
						<td>{item.dates.join(', ')}</td>
						<td className={classes.align__right}>
							<img src=" https://cdn-icons-png.flaticon.com/512/650/650194.png"
								 className={[classes.image__category, classes.button].join(' ')} alt=''
								 onClick={(e) => editNoteHandler(item, e)}
							/>
							<img src=" https://cdn-icons-png.flaticon.com/512/565/565491.png"
								 className={[classes.image__category, classes.button].join(' ')} alt=''
								onClick={(e) => deleteNoteHandler(item, e)}
							/>
							<img src="https://cdn-icons-png.flaticon.com/512/61/61016.png"
								 className={[classes.image__category, classes.button].join(' ')} alt=''
								onClick={(e) => archivedNoteHandler(item, e)}
							/>
						</td>
					</tr>
				})}
			</tbody>
		</table>
	);
};

export default TableNotes;