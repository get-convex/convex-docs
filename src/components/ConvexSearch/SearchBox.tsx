import React, { useEffect, useRef } from "react";
import SearchIcon from "./SearchIcon";
import CloseIcon from "./CloseIcon";
import { cn } from "@site/src/lib/cn";

interface SearchBoxProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  className?: string;
}

export default function SearchBox({
  value,
  onChange,
  onClear,
  className,
}: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClear = () => {
    onClear();
    focusInput();
  };

  // Focus the search input when the component mounts.
  useEffect(() => {
    focusInput();
  }, []);

  // Navigate to the selected hit when pressing enter.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const linkElement = document.querySelector(
          '.js-hitList-item[aria-selected="true"] a',
        );
        if (linkElement) {
          const url = linkElement.getAttribute("href");
          const target = linkElement.getAttribute("target") || "_self";
          window.open(url, target);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={cn(
        "border-2 border-solid border-neutral-n11 rounded-md flex p-2 justify-center gap-1 bg-neutral-white",
        className,
      )}
    >
      <SearchIcon className="h-7 w-7 text-plum-p4" />
      <input
        className="bg-transparent border-none flex-grow text-lg font-sans text-neutral-n11 focus:outline-none"
        type="text"
        placeholder="Search across Docs, Stack, and Discord..."
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      {value !== "" && (
        <button
          className="border-none bg-transparent py-0 px-1 flex items-center cursor-pointer"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <CloseIcon className="" />
        </button>
      )}
    </div>
  );
}
