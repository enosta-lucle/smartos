export type CollectionResponse<T> = {
	data: T[];
	meta: Meta;
};

export type Media = {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string;
	provider: string;
	provider_metadata: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
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

export type SectionHero = {
	__component: string;
	id: number;
	highlight: string;
	title: string;
	description?: string;
	buttons: Button[];
	visual: Media;
};

export type Section = SectionHero;
export type SEO = any;

export type Page = {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	slug: string;
	seo: SEO;
	sections: Section[];
};

//--------------
export type HeaderResponse = CollectionResponse<Header>;
export type PageResponse = CollectionResponse<Page>;
