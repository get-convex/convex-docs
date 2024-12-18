import React from "react";

interface AskAIProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function AskAI(props: AskAIProps) {
  return (
    <button
      className="js-launch-kapa-ai bg-neutral-white rounded-md flex items-center gap-4 text-left p-4 font-sans border-2 border-transparent hover:cursor-pointer hover:border-plum-p4 transition-colors"
      {...props}
    >
      <svg
        className="text-plum-p4"
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"></path>
      </svg>
      <div className="flex flex-col">
        <strong className="text-lg font-medium leading-snug text-neutral-n12">
          Ask AI
        </strong>
        <span className="text-sm text-neutral-n8 leading-none">
          Get an instant AI answer
        </span>
      </div>
    </button>
  );
}
