/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			// accent colours
			accentHighlight: "#E1B462",
			accentFocus: "#1C7FFC",

			// dark theme colours
			bg: "#232022",
			bgAlt: "#302B2E",
			border: "#4a4a4a",
			fgAlt: "#A0A0A0",
			fg: "#FFFFFF",

			// light theme colours
			lightBg: "#FFFFFF",
			lightBgAlt: "#EBEBEB",
			lightBorder: "#C3C3C3",
			lightFgAlt: "#676767",
			lightFg: "#232022",
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
