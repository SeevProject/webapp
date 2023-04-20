export function Button(props: { title: string; handleClick: () => void }) {
	return (
		<button
			onClick={props.handleClick}
			className="rounded-md bg-accentHighlight px-2 py-1 font-bold text-bg transition-colors hover:bg-accentHighlight/90"
		>
			{props.title}
		</button>
	);
}
