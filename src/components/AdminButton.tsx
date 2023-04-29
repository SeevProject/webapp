import React from "react";

export function AdminButton(props: {
	title?: string;
	icon?: React.ReactNode;
	style?: React.CSSProperties;
	handleClick: () => void;
}) {
	return (
		<button
			onClick={props.handleClick}
			className="flex flex-row items-center justify-center gap-2 rounded-md bg-accentPrimary px-2 py-1 font-bold transition-colors hover:bg-accentPrimary/70 focus:outline-none"
			style={props.style}
		>
			{props.title && <p>{props.title}</p>}
			{props.icon}
		</button>
	);
}
