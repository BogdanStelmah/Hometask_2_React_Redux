import React from 'react';
import classes from "../Table.module.css";
import {NoteType} from "../../../@type/NoteType";

interface TableArchivedNotesProps {
	archivedNotes: NoteType[]
}

const TableArchivedNotes = ({ archivedNotes }: TableArchivedNotesProps) => {
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
								 className={[classes.image__category, classes.button].join(' ')} alt=''/>
						</td>
					</tr>
				})}
			</tbody>
		</table>
	);
};

export default TableArchivedNotes;