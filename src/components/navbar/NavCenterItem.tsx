import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function NavCenterItem(props: { title: string; navigateTo: string }) {
	const location = useLocation();
	const { t } = useTranslation();

	return (
		<Link to={props.navigateTo}>
			<button
				className={`rounded-[10rem] px-4 py-1.5 ${
					location.pathname.includes(props.navigateTo)
						? "bg-accentPrimary text-background"
						: "bg-box text-text"
				}`} // If the template button is active, add specific styles; otherwise, add different styles
			>
				{t(props.title)}
			</button>
		</Link>
	);
}
