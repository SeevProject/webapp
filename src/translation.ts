import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	ku: {
		translation: {
			Companies: "کۆمپانیاکان",
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "ku",
	interpolation: {
		escapeValue: false, // react already safes from xss
	},
});

export default i18n;
