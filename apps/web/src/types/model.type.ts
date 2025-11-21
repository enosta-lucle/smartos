export type DumpResponse = {
	data: Dump[];
	meta: Meta;
};

export type Dump = {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	icon?: string;
	buttons: Button[];
};

export type Button = {
	id: number;
	label: string;
	icon: string;
	href: string;
	variant: string;
};

export type Meta = {
	pagination: Pagination;
};

export type Pagination = {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
};
