import React, {ReactNode} from 'react';
import classes from "./Table.module.css"
import TableNotes from "./variations/TableNotes";
import {TypeTable} from "../../@type/enum";
import TableArchivedNotes from "./variations/TableArchivedNotes";
import TableStatistics from "./variations/TableStatistics";

interface TableProps {
	dataSource: any[];
	typeTable: TypeTable
}

const Table = (props: TableProps) => {

	const renderTable = (type: TypeTable): ReactNode => {
		switch (type) {
			case TypeTable.Notes:
				return <TableNotes notes={props.dataSource}/>
			case TypeTable.ArchivedNotes:
				return <TableArchivedNotes archivedNotes={props.dataSource}/>
			case TypeTable.StatisticsByCategory:
				return <TableStatistics categories={props.dataSource}/>
		}
	}

	return (
		<div className={classes.block__for__table}>
			{renderTable(props.typeTable)}
		</div>
	);
};

export default Table;