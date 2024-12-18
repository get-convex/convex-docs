import React, { useEffect, useRef, useState } from "react";
import Hit from "./Hit";
import { SearchHit } from "./types";
import { cn } from "@site/src/lib/cn";

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
    <ul
      className="flex flex-col list-none p-0 gap-2 m-0"
      role="list"
      ref={listRef}
    >
      {hits.map((hit, index) => (
        <li
          key={hit.objectID}
          ref={(element) => {
            if (index === selectedHit) {
              selectedHitRef.current = element;
            }
          }}
          role="listitem"
          // This is referenced by SearchBox.
          aria-selected={index === selectedHit}
          data-hit-index={index}
          className={cn(
            "js-hitList-item border-2 border-solid border-neutral-n3 p-3 bg-neutral-white rounded-md overflow-hidden transition-all",
            {
              "border-plum-p4 shadow-sm": index === selectedHit,
            },
          )}
          onMouseEnter={() => {
            setUsingKeyboard(false);
            setSelectedHit(index);
          }}
        >
          <Hit hit={hit} />
        </li>
      ))}
      {hits.length === 0 && (
        <li className="text-neutral-n9">No results found.</li>
      )}
    </ul>
  );
});

export default HitList;
