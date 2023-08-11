import React from 'react'

export function Iput(props: {
	placeholder?: string;
	type?: string;
	name?: string;
	value?: string;
	handleClick: any;
	style?: React.CSSProperties; // you can add css styles with this props
	className?: string; // you can add styles to button with tailwind
}) {
	return (
		<input
			onChange={props.handleClick}
			style={props.style}
			className={`border-black flex flex-row items-center justify-center gap-2 rounded-md border
			border-border px-2 py-1 text-text transition-colors hover:border-text
			  focus:outline-none ${props.className}`}
			placeholder={props.placeholder}
			type={props.type}
			name={props.name}
			value={props.value}

		/>
	);
}