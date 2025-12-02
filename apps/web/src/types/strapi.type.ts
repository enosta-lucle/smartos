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

export type SectionSolutions = {
	__component: string;
	id: number;
	solutions: Array<{
		id: number;
		title: string;
		description: string;
		image: Media;
		button: Button;
	}>;
};

export type Section = SectionHero;

export type Page = {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	slug: string;
	seo: SEO;
	sections: Section[];

	footer?: Footer;
};

export type SEO = {
	id: number;
	metaTitle: string;
	metaDescription: string;
	keywords: string;
	metaRobots: string;
	metaViewport: string;
	canonicalURL: string;
	structuredData: any;
	metaImage: {
		id: number;
		documentId: string;
		name: string;
		alternativeText: any;
		caption: any;
		width: number;
		height: number;
		formats: {
			thumbnail: {
				ext: string;
				url: string;
				hash: string;
				mime: string;
				name: string;
				path: any;
				size: number;
				width: number;
				height: number;
				sizeInBytes: number;
			};
		};
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url: string;
		previewUrl: any;
		provider: string;
		provider_metadata: any;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	};
	openGraph: {
		id: number;
		ogTitle: string;
		ogDescription: string;
		ogUrl: string;
		ogType: string;
		ogImage: {
			id: number;
			documentId: string;
			name: string;
			alternativeText: any;
			caption: any;
			width: number;
			height: number;
			formats: {
				thumbnail: {
					ext: string;
					url: string;
					hash: string;
					mime: string;
					name: string;
					path: any;
					size: number;
					width: number;
					height: number;
					sizeInBytes: number;
				};
			};
			hash: string;
			ext: string;
			mime: string;
			size: number;
			url: string;
			previewUrl: any;
			provider: string;
			provider_metadata: any;
			createdAt: string;
			updatedAt: string;
			publishedAt: string;
		};
	};
};

export type Footer = {
	id: number;
	documentId: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	name: string;
	socials: Array<{
		id: number;
		logo: string;
		href: string;
	}>;
	contact: {
		id: number;
		phone: string;
		email: string;
		addresses: Array<{
			id: number;
			city: string;
			detail: string;
		}>;
	};
	columns: Array<{
		id: number;
		title: string;
		links: Array<{
			id: number;
			label: string;
			href: string;
			disabled: boolean;
		}>;
	}>;
};

//--------------
export type HeaderResponse = CollectionResponse<Header>;
export type PageResponse = CollectionResponse<Page>;
