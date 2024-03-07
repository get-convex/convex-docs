import React, { useEffect, useRef } from "react";
import SearchIcon from "./SearchIcon";
import CloseIcon from "./CloseIcon";

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
          '.cs-hitList-item[aria-selected="true"] a',
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
    <div className={`cs-search ${className}`}>
      <SearchIcon className="cs-search-icon" />
      <input
        className="cs-search-input"
        type="text"
        placeholder="Search across Docs, Stack, and Discord..."
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      {value !== "" && (
        <button
          className="cs-search-clearButton"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <CloseIcon className="cs-search-clearIcon" />
        </button>
      )}
    </div>
  );
}
