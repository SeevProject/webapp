export function Button(props: {
	title?: string;
	icon?: React.ReactNode;
	handleClick: () => void;
}) {
	return (
		<button
			onClick={props.handleClick}
			className="border-transparent flex flex-row items-center justify-center gap-2 rounded-md border-2 bg-accentHighlight px-2 py-1 font-bold text-bg transition-colors focus:outline-none active:border-accentFocus active:outline-none"
		>
			{props.title && <p>{props.title}</p>}
			{props.icon}
		</button>
	);
}
