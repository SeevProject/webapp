import React from "react";

export function Button(props: {
	title?: string;
	icon?: React.ReactNode;
	handleClick: () => void;
	style?: React.CSSProperties; // you can add css styles with this props
	className?: string; // you can add styles to button with tailwind
}) {
	return (
		<button
			onClick={props.handleClick}
			style={props.style}
			className={`flex flex-row items-center justify-center gap-2 rounded-md bg-accentPrimary px-2 py-1 text-background transition-colors hover:bg-accentPrimary/70 focus:outline-none ${props.className}`}
		>
			{props.title && <span>{props.title}</span>}
			{props.icon}
		</button>
	);
}
