export default [
	"strapi::logger",
	"strapi::errors",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					"connect-src": ["'self'", "https:"],
					"img-src": [
						"'self'",
						"data:",
						"blob:",
						"smartos-landing-page.s3.ap-southeast-1.amazonaws.com",
					],
					"media-src": [
						"'self'",
						"data:",
						"blob:",
						"dl.airtable.com",
						"smartos-landing-page.s3.ap-southeast-1.amazonaws.com",
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
