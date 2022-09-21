import React from 'react';
import classes from "../Table.module.css";
import {NoteType} from "../../../@type/NoteType";

interface TableNotesProps {
	notes: NoteType[];
}

const TableNotes = ({ notes }: TableNotesProps) => {
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
						<td>{item.created}</td>
						<td>{item.category}</td>
						<td>{item.content}</td>
						<td>{item.dates}</td>
						<td className={classes.align__right}>
							<img src=" https://cdn-icons-png.flaticon.com/512/650/650194.png"
								 className={[classes.image__category, classes.button].join(' ')} alt=''/>
							<img src=" https://cdn-icons-png.flaticon.com/512/565/565491.png"
								 className={[classes.image__category, classes.button].join(' ')} alt=''/>
							<img src="https://cdn-icons-png.flaticon.com/512/61/61016.png"
								 className={[classes.image__category, classes.button].join(' ')} alt=''/>
						</td>
					</tr>
				})}
			</tbody>
		</table>
	);
};

export default TableNotes;