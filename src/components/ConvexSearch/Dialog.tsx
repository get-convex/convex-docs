import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
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
  const [container] = useState(() => document.createElement("div"));

  // Append the container to the body, outside of the current component tree.
  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  // Toggle scrolling on the body to avoid scrolling away from the dialog.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

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

  const dialogContent = open && (
    <div className="cs-root cs-dialog">
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
  );

  return ReactDOM.createPortal(dialogContent, container);
};

export default Dialog;
