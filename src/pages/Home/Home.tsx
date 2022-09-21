import React from 'react';
import classes from './Home.module.css';
import {Table} from "../../components/Table";
import {TypeTable} from "../../@type/enum";

const Home = () => {
	return (
		<main>
			<div className={classes.__container}>
				<Table typeTable={TypeTable.Notes} dataSource={[]}/>

				<button className={classes.button__create__note} id="button_create_note">
					Create Note
				</button>

				<Table typeTable={TypeTable.StatisticsByCategory} dataSource={[]}/>
				<Table typeTable={TypeTable.ArchivedNotes} dataSource={[]}/>
			</div>
		</main>
	);
};

export default Home;