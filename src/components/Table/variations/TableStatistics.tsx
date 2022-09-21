import React from 'react';
import classes from "../Table.module.css";
import {CategoryType} from "../../../@type/Category";

interface TableStatisticsProps {
	categories: CategoryType[]
}

const TableStatistics = ({ categories }: TableStatisticsProps) => {
	return (
		<table className={classes.table__notes} id="table__category">
			<tbody>
				<tr>
					<th></th>
					<th>Note Category</th>
					<th>Active</th>
					<th>Archived</th>
				</tr>

				{categories.map(item => {
					return <tr key={item.name}>
						<td>
							<div className={classes.notes__image}>
								<img
									src={item.imageSrc}
									className={classes.image__category}
									alt={item.name}
								/>
							</div>
						</td>
						<td>{item.name}</td>
						<td>{item.active}</td>
						<td>{item.archived}</td>
					</tr>
				})}
			</tbody>
		</table>
	);
};

export default TableStatistics;