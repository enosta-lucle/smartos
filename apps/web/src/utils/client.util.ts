import { getSecret } from "astro:env/server";

type APIOptions = {
	method: "GET" | "POST" | "PUT" | "DELETE";
	populate?: string | "all";
};

export async function api(
	endpoint: `/${string}`,
	options: APIOptions = { populate: "all", method: "GET" },
) {
	const { populate = "all", method } = options;

	console.log("trungluc", getSecret("BASE_URL"));
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
