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
	menu: HeaderMenuItemLevel1[];
};

export type HeaderMenuItemLevel1 = {
	id: number;
	title: string;
	hasChild: boolean;
	href?: string;
	children?: HeaderMenuItemLevel2[];
};

export type HeaderMenuItemLevel2 = {
	id: number;
	title: string;
	icon?: string;
	description?: string;
	badge?: string;
	hasChild: boolean;
	href?: string;
	children?: HeaderMenuItemLevel3[];
};

export type HeaderMenuItemLevel3 = {
	id: number;
	title: string;
	href?: string;
	icon?: string;
	description?: string;
	badge?: string;
};

//--------------
export type HeaderResponse = CollectionResponse<Header>;
