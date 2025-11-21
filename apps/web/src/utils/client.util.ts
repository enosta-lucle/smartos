import { getSecret } from "astro:env/server";
import { optimize } from "svgo";

type APIOptions = {
	method: "GET" | "POST" | "PUT" | "DELETE";
	populate?: string | "all";
};

export async function api(
	endpoint: `/${string}`,
	options: APIOptions = { populate: "all", method: "GET" },
) {
	const { populate = "all", method } = options;

	const query = new URLSearchParams({ populate });
	const url = `${getSecret("BASE_URL")}${endpoint}?${query}`;

	try {
		const response = await fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getSecret("API_TOKEN")}`,
			},
		});

		const data = await response.json();

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
