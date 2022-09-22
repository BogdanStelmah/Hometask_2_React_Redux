import React from 'react';
import classes from "../Table.module.css";
import {NoteType} from "../../../@type/NoteType";
import {useAppDispatch} from "../../../hooks/redux";
import {addNote} from "../../../store/reducers/NoteSlice";
import {deleteArchivedNote} from "../../../store/reducers/ArchivedNoteSlice";

interface TableArchivedNotesProps {
	archivedNotes: NoteType[]
}

const TableArchivedNotes = ({ archivedNotes }: TableArchivedNotesProps) => {
	const dispatch = useAppDispatch();

	const unarchivedNoteHandler = (item: NoteType, e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		dispatch(addNote(item))
		dispatch(deleteArchivedNote(item))
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
					return <tr key={item.key}>
						<td>
							<div className={classes.notes__image}>
								<img
									src={item.image}
									className={classes.image__category}
									alt={item.name}
								/>
							</div>
						</td>
						<td>{item.name}</td>
						<td>{item.category}</td>
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