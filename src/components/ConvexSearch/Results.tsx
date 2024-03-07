import React, { useState } from "react";
import { Index } from "react-instantsearch-hooks-web";
import HitList from "./HitList";

const indexes = [
  {
    name: "docs",
    title: "Docs",
    link: "https://docs.convex.dev",
  },
  {
    name: "stack",
    title: "Stack",
    link: "https://stack.convex.dev",
  },
  {
    name: "discord",
    title: "Discord",
    link: "https://discord.com/invite/nk6C2qTeCq",
  },
];

export default function Results() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="cs-results">
      <div className="cs-results-header">
        {indexes.map(({ name, title }, index) => (
          <button
            className={`cs-results-header-button ${
              index === selectedIndex
                ? "cs-results-header-button--selected"
                : ""
            }`}
            key={name}
            onClick={() => setSelectedIndex(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="cs-results-container">
        <Index indexName={indexes[selectedIndex].name}>
          <HitList />
        </Index>
      </div>
    </div>
  );
}
