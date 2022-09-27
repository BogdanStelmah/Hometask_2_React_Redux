import React from 'react';
import classes from "../Table.module.css";
import {EditNoteType, NoteState, NoteType} from "../../../@type/NoteType";
import {useAppDispatch} from "../../../hooks/redux";
import {editNote} from "../../../store/reducers/NoteSlice";

interface TableArchivedNotesProps {
	archivedNotes: NoteType[]
}

const TableArchivedNotes = ({ archivedNotes }: TableArchivedNotesProps) => {
	const dispatch = useAppDispatch();

	const unarchivedNoteHandler = (item: NoteType, e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		const element: EditNoteType = {
			id: item.id,
			state: NoteState.active
		}

		dispatch(editNote(element))
	}

	return (
		<table className={classes.table__notes} id="table__archived__notes">
			<tbody>
				<tr>
					<th></th>
					<th>Name</th>
					<th>Category</th>
					<th>Content</th>
					<th className={classes.align__right}>
						<img src="https://cdn-icons-png.flaticon.com/512/1388/1388796.png" className={classes.image__category} alt=''/>
					</th>
				</tr>

				{archivedNotes.map(item => {
					return <tr key={item.id}>
						<td>
							<div className={classes.notes__image}>
								<img
									src={item.category.imageSrc}
									className={classes.image__category}
									alt={item.name}
								/>
							</div>
						</td>
						<td>{item.name}</td>
						<td>{item.category.name}</td>
						<td>{item.content}</td>
						<td className={classes.align__right}>
							<img src="https://cdn-icons-png.flaticon.com/512/1388/1388796.png"
								 className={[classes.image__category, classes.button].join(' ')} alt=''
								onClick={(e) => {unarchivedNoteHandler(item, e)}}
							/>
						</td>
					</tr>
				})}
			</tbody>
		</table>
	);
};

export default TableArchivedNotes;