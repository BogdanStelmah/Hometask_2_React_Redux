import React from 'react';
import classes from './Home.module.css';
import {Table} from "../../components/Table";
import {TypeTable} from "../../@type/enum";
import {useAppSelector} from "../../hooks/redux";

const Home = () => {
	const dataNotes = useAppSelector(state => state.noteReducer.notes);
	const dataCategories = useAppSelector(state => state.categoryReducer.categories);
	const dataArchivedNotes = useAppSelector(state => state.archivedNoteReducer.archivedNotes);

	return (
		<main>
			<div className={classes.__container}>
				<Table typeTable={TypeTable.Notes} dataSource={dataNotes}/>

				<button className={classes.button__create__note} id="button_create_note">
					Create Note
				</button>

				<Table typeTable={TypeTable.StatisticsByCategory} dataSource={dataCategories}/>
				<Table typeTable={TypeTable.ArchivedNotes} dataSource={dataArchivedNotes}/>
			</div>
		</main>
	);
};

export default Home;