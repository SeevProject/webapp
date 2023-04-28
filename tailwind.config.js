/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			// accent colours
			accentHighlight: "#FC991C",
			accentFocus: "#1C7FFC",

			// light theme colours
			background: "#FFFFFF",
			box: "#EBEBEB",
			border: "#C3C3C3",
			textAlt: "#676767",
			text: "#232022",
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
