export function Button(props: {
	title?: string;
	icon?: React.ReactNode;
	handleClick: () => void;
}) {
	return (
		<button
			onClick={props.handleClick}
			className="flex flex-row items-center justify-center gap-2 rounded-md bg-accentHighlight px-2 py-1 font-bold text-bg transition-colors hover:bg-accentHighlight/90"
		>
			{props.title && <p>{props.title}</p>}
			{props.icon}
		</button>
	);
}
