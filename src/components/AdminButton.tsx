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
      className="border-transparent text-bg flex flex-row items-center justify-center bg-accentHighlight px-2 py-1 font-bold transition-colors focus:outline-none active:border-accentFocus active:outline-none"
      style={props.style}
    >
      {props.title && <p>{props.title}</p>}
      {props.icon}
    </button>
  );
}
