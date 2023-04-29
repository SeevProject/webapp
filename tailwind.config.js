/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			// accent colours
			accentPrimary: "#1C7FFC",
			accentSecondary: "#FC991C",

			// light theme colours
			background: "#FAFAFA",
			box: "#EBEBEB",
			border: "#C3C3C3",
			textAlt: "#676767",
			text: "#232022",
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
