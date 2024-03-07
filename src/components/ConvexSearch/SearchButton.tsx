import React from "react";
import SearchIcon from "./SearchIcon";

type Props = {
  onClick: () => void;
};

function SearchButton({ onClick }: Props) {
  const isMac = /Mac|iPhone|iPad/.test(window.navigator.userAgent);

  return (
    <button className="cs-searchButton" onClick={onClick} aria-label="Search">
      <SearchIcon className="cs-searchButton-icon" />
      <span className="cs-searchButton-label">Search docs and more...</span>
      <span className="cs-searchButton-shortcut">{isMac ? "⌘" : "^"} K</span>
    </button>
  );
}

export default SearchButton;
