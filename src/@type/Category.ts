export type CategoryType = {
	id: string
	name: string;
	imageSrc: string;
}

export type CategoryStatType  = {
	active: number,
	archived: number,
} & CategoryType