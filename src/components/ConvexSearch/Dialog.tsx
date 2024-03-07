import React, { useEffect, useState } from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";
import KeyboardLegend from "./KeyboardLegend";
import Results from "./Results";
import SearchBox from "./SearchBox";

type Props = {
  open: boolean;
  onClose: () => void;
};

const Dialog = ({ open, onClose }: Props) => {
  const { refine } = useSearchBox();
  const [query, setQuery] = useState("");

  // Prevent scrolling on the body when the dialog is open.
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    refine(value);
  };

  const handleClear = () => {
    setQuery("");
    refine("");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    open && (
      <div className="cs-dialog">
        <div
          className={`cs-dialog-content ${
            query === "" ? "cs-dialog-content--empty" : ""
          }`}
        >
          <div className="cs-dialog-header">
            <SearchBox
              className="cs-dialog-searchBox"
              value={query}
              onChange={handleChange}
              onClear={handleClear}
            />
            <button className="cs-dialog-closeButton" onClick={onClose}>
              Cancel
            </button>
          </div>
          {query !== "" && (
            <>
              <Results />
              <KeyboardLegend />
            </>
          )}
        </div>
        <button
          className="cs-dialog-backdrop"
          aria-label="Close search"
          onClick={onClose}
        />
      </div>
    )
  );
};

export default Dialog;
