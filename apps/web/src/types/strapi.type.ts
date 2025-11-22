export type CollectionResponse<T> = {
	data: T[];
	meta: Meta;
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

export type Button = {
	label?: string;
	icon?: string;
	href?: string;
	variant: "solid" | "text" | "white";
};

export type Header = {
	button: Button;
	menu: Button[];
};

//--------------
export type HeaderResponse = CollectionResponse<Header>;
