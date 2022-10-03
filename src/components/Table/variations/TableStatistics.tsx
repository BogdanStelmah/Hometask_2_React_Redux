import React from 'react';
import {CategoryStatType} from "../../../@type/Category";

interface TableStatisticsProps {
	categories: CategoryStatType[]
}

const TableStatistics = ({ categories }: TableStatisticsProps) => {
	return (
		<div className="pt-4">
			<table className="w-full border-separate border-spacing-y-3 text-left table-fixed" id="table__category">
				<tbody>
				<tr className="bg-zinc-400 text-gray-50">
					<th className="rounded-bl-md rounded-tl-md w-20 h-10"></th>
					<th>Note Category</th>
					<th>Active</th>
					<th className="rounded-br-md rounded-tr-md">Archived</th>
				</tr>

				{categories.map(item => {
					return <tr key={item.name} className="bg-zinc-200">
						<td className="rounded-bl-md rounded-tl-md">
							<div className="bg-zinc-500 w-10 h-10 rounded-full flex justify-center items-center m-2">
								<img
									src={item.imageSrc}
									className="w-6"
									alt={item.name}
								/>
							</div>
						</td>
						<td>{item.name}</td>
						<td>{item.active}</td>
						<td className="rounded-br-md rounded-tr-md">{item.archived}</td>
					</tr>
				})}
				</tbody>
			</table>
		</div>
	);
};

export default TableStatistics;