export function Button(props: {
	title?: string;
	icon?: React.ReactNode;
	handleClick: () => void;
}) {
	return (
		<button
			onClick={props.handleClick}
			className="flex flex-row items-center justify-center gap-2 rounded-md bg-accentPrimary px-2 py-1 font-bold transition-colors hover:bg-accentPrimary/70 focus:outline-none"
		>
			{props.title && <p>{props.title}</p>}
			{props.icon}
		</button>
	);
}
