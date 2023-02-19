import React, {useEffect} from 'react';
import {Table} from "../../components/Table";
import {TypeTable} from "../../@type/enum";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {NoteState} from "../../@type/NoteType";
import EditNoteModal from "../../components/Modal/EditNoteModal";
import {openCreateModal} from "../../store/reducers/ModalSlice";
import CreateNoteModal from "../../components/Modal/CreateNoteModal";
import {fetchNotes} from "../../store/reducers/NoteSlice";
import {getCategories, getStat} from "../../store/reducers/CategorySlice";
import Button from "../../components/UI/Button";

const Home = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getCategories())
		dispatch(fetchNotes())
	}, [dispatch])

	const isEditNoteModalVisible = useAppSelector(state => state.modalReducer.isEditNoteModalVisible)
	const isCreateNoteModalVisible = useAppSelector(state => state.modalReducer.isCreateNoteModalVisible)

	const allNotes = useAppSelector(state => state.noteReducer.notes)

	const dataNotes = allNotes.filter(note => note.state === NoteState.active);
	const dataArchivedNotes = allNotes.filter(note => note.state === NoteState.archive);

	useEffect(() => {
		dispatch(getStat())
	}, [allNotes])

	const clickCreateNoteHandler = () => {
		dispatch(openCreateModal())
	}

	const dataCategories = useAppSelector(state => state.categoryReducer.categories);

	return (
		<main className="bg-white mx-2 h">
			<div className="max-w-5xl mx-auto">
				<Table typeTable={TypeTable.Notes} dataSource={dataNotes}/>

				<div className="flex justify-end">
					<Button onClick={clickCreateNoteHandler}>
						Create Note
					</Button>
				</div>

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