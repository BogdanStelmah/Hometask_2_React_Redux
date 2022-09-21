export type NoteType = {
	key: string;
	image: string;
	name: string;
	created: string;
	category: 'Task' | 'Random Thought' | 'Idea',
	content: string,
	dates: string;
}