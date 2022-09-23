import React, {useEffect} from 'react';
import classes from './Home.module.css';
import {Table} from "../../components/Table";
import {TypeTable} from "../../@type/enum";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {NoteState} from "../../@type/NoteType";
import EditNoteModal from "../../components/Modal/EditNoteModal";
import {openCreateModal} from "../../store/reducers/ModalSlice";
import CreateNoteModal from "../../components/Modal/CreateNoteModal";
import {updateCategoryInfo} from "../../store/reducers/CategorySlice";

const Home = () => {
	const dispatch = useAppDispatch()

	const isEditNoteModalVisible = useAppSelector(state => state.modalReducer.isEditNoteModalVisible)
	const isCreateNoteModalVisible = useAppSelector(state => state.modalReducer.isCreateNoteModalVisible)

	const allNotes = useAppSelector(state => state.noteReducer.notes)

	const dataNotes = allNotes.filter(note => note.state === NoteState.active);
	const dataArchivedNotes = allNotes.filter(note => note.state === NoteState.archive);

	useEffect(() => {
		dispatch(updateCategoryInfo(allNotes))
	}, [ allNotes ])

	const clickCreateNoteHandler = () => {
		dispatch(openCreateModal())
	}

	const dataCategories = useAppSelector(state => state.categoryReducer.categories);

	return (
		<main>
			<div className={classes.__container}>
				<Table typeTable={TypeTable.Notes} dataSource={dataNotes}/>

				<button className={classes.button__create__note} onClick={clickCreateNoteHandler}>
					Create Note
				</button>

				<Table typeTable={TypeTable.StatisticsByCategory} dataSource={dataCategories}/>
				<Table typeTable={TypeTable.ArchivedNotes} dataSource={dataArchivedNotes}/>
			</div>

			{isEditNoteModalVisible &&
                <EditNoteModal/>
			}

			{isCreateNoteModalVisible &&
				<CreateNoteModal/>
			}
		</main>
	);
};

export default Home;