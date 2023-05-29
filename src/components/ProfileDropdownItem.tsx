export function ProfileDropdownItem(props: {
	handleClick: () => void;
	icon?: JSX.Element;
	text: string;
}) {
	return (
		<button
			onClick={props.handleClick}
			className="flex w-full flex-row rounded-md border border-transparent py-2 pl-[0.5rem] pr-4 text-sm hover:border-accentPrimary"
		>
			{props.icon && props.icon}

			<p>{props.text}</p>
		</button>
	);
}
