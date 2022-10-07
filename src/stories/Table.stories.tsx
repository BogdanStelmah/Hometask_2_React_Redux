import {Table} from "../components/Table";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {TypeTable} from "../@type/enum";
import {setupStore} from "../store/store";
import {Provider} from "react-redux";

const store = setupStore();

const dataSourceNote = [
	{ id: '1', name: 'Shopping list', created: 'May 08, 2021', category: { name: 'Task', imageSrc: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png', }, content: 'Tomatoes, bread', dates: [], state: 'Active' },
	{ id: '2', name: 'New Feature', created: new Date('May 05, 2021').toISOString(), category: { name: 'Idea', imageSrc: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png' }, content: 'Feature 3/5/2021', dates: ['3/5/2021'], state: 'Active' },
]

const dataSourceStatistics = [
	{ id: '1', name: 'Task', imageSrc: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png', active: 0, archived: 1 },
	{ id: '2', name: 'Random Thought', imageSrc: 'https://cdn-icons-png.flaticon.com/512/775/775558.png', active: 2, archived: 1  },
	{ id: '3', name: 'Idea', imageSrc: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png', active: 0, archived: 0  }
]

export default {
	title: 'Table',
	component: Table,
	decorators: [(story) => <Provider store={store}>{story()}</Provider>],
	argTypes: {
		typeTable: {
			defaultValue: TypeTable.Notes,
		}
	}
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = ( { dataSource, typeTable } ) => (
	<Table
		typeTable={typeTable}
		dataSource = {typeTable === TypeTable.Notes || typeTable === TypeTable.ArchivedNotes
			   ? dataSourceNote
			   : dataSourceStatistics
	}
	/>
)

export const TableNotes = Template.bind({})
TableNotes.args = {
	typeTable: TypeTable.Notes,
	dataSource: dataSourceNote
}

export const TableStatistics = Template.bind({})
TableStatistics.args = {
	typeTable: TypeTable.StatisticsByCategory,
	dataSource: dataSourceStatistics
}