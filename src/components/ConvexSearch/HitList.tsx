import React, { useEffect, useRef, useState } from "react";
import Hit from "./Hit";
import { SearchHit } from "./types";

interface HitListProps {
  hits: SearchHit[];
}

const HitList = React.memo(({ hits }: HitListProps) => {
  const [selectedHit, setSelectedHit] = useState(0);
  const [usingKeyboard, setUsingKeyboard] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const selectedHitRef = useRef<HTMLLIElement>(null);

  // Use the up and down arrow keys to navigate the results.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        if (selectedHit > 0) {
          setSelectedHit(selectedHit - 1);
        }
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (selectedHit !== null && selectedHit < hits.length - 1) {
          setSelectedHit(selectedHit + 1);
        }
      }
      setUsingKeyboard(true);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedHit, hits]);

  // Scroll to the selected hit using the ref when it changes
  useEffect(() => {
    if (usingKeyboard && selectedHitRef.current) {
      selectedHitRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedHit, usingKeyboard]);

  // Whenever the hits change, select the first one.
  useEffect(() => {
    setSelectedHit(0);
  }, [hits]);

  return (
    <ul className="cs-hitList" role="list" ref={listRef}>
      {hits.map((hit, index) => (
        <li
          key={hit.objectID}
          ref={(element) => {
            if (index === selectedHit) {
              selectedHitRef.current = element;
            }
          }}
          role="listitem"
          aria-selected={index === selectedHit}
          data-hit-index={index}
          className={`cs-hitList-item ${
            index === selectedHit ? "cs-hitList-item--selected" : ""
          }`}
          onMouseEnter={() => {
            setUsingKeyboard(false);
            setSelectedHit(index);
          }}
        >
          <Hit hit={hit} />
        </li>
      ))}
      {hits.length === 0 && <li>No results found.</li>}
    </ul>
  );
});

export default HitList;
