import { ArrowRightIcon } from "@radix-ui/react-icons";
import Sparkle from "./sparkle.svg";
import React from "react";

interface AskAIProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function AskAI(props: AskAIProps) {
  return (
    <div className="p-1 rounded-[0.575rem] relative overflow-hidden group shrink-0">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-plum-p4 to-yellow-y3 animate-pulse group-hover:animate-none" />
      <button
        className="js-launch-kapa-ai bg-neutral-white border-none rounded-md w-full flex items-center gap-4 text-left p-4 font-sans cursor-pointer transition-colors z-10 relative"
        {...props}
      >
        <Sparkle />
        <div className="flex flex-col grow">
          <strong className="text-lg font-medium leading-snug text-neutral-n12">
            Ask AI
          </strong>
          <span className="text-sm text-neutral-n8 leading-none">
            Get an instant AI answer
          </span>
        </div>
        <ArrowRightIcon className="w-5 h-5 relative -translate-x-1 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
