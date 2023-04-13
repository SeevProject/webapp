/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				cvaccent: {
					a: "#E1B462",
					b: "#1C7FFC",
				},
				cvdark: {
					1: "#232022",
					2: "#302B2E",
				},
				cvlight: {
					1: "#FFFFFF",
					2: "#A0A0A0",
				},
			},
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
