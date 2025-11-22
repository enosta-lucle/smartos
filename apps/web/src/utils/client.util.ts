import { getSecret } from "astro:env/server";
import { optimize } from "svgo";

type APIOptions = {
	method?: "GET" | "POST" | "PUT" | "DELETE";
	populate?: string | "all";
	pagination?: {
		page: number;
		size?: number;
	};
	filters?: Record<string, string>;
};

export async function api<T>(
	endpoint: `/${string}`,
	options: APIOptions = {
		populate: "all",
		method: "GET",
		pagination: { page: 1, size: 50 },
	},
) {
	const { populate = "all", method, pagination, filters = {} } = options;

	const query = new URLSearchParams({
		populate,
		"pagination[page]": pagination?.page.toString() || "1",
		"pagination[pageSize]": pagination?.size?.toString() || "50",
		...Object.entries(filters).reduce<Record<string, string>>(
			(acc, [key, value]) => {
				acc[`filters[${key}][$eq]`] = value;

				return acc;
			},
			{},
		),
	});
	const url = `${getSecret("BASE_URL")}${endpoint}?${query}`;

	console.log({ url });

	try {
		const response = await fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getSecret("API_TOKEN")}`,
			},
		});

		const data: T = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

type FetchSVGOptions = {
	optimized?: boolean;
};

export async function fetchSVG(
	url: string,
	options: FetchSVGOptions = { optimized: true },
) {
	const { optimized = true } = options;

	try {
		const response = await fetch(url);
		const svg = await response.text();

		if (optimized) {
			return optimize(svg).data;
		}

		return svg;
	} catch (error) {
		console.error(error);
	}
}
