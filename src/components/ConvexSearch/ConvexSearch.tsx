import algoliasearch from "algoliasearch/lite";
import React, { useCallback, useEffect, useState } from "react";
import { InstantSearch } from "react-instantsearch-hooks-web";
import Dialog from "./Dialog";
import SearchButton from "./SearchButton";
import "./styles.css";

const searchClient = algoliasearch(
  "1KIE511890",
  "d5802c3142d1d81cebdac1ccbb02ea9f",
);

const ConvexSearch = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCloseDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  // Open the dialog when the user presses Cmd/Ctrl + K.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        setDialogOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <InstantSearch searchClient={searchClient} indexName="docs">
      <div className="cs-root cs-root--custom">
        <SearchButton onClick={() => setDialogOpen(true)} />
        <Dialog open={dialogOpen} onClose={handleCloseDialog} />
      </div>
    </InstantSearch>
  );
};

export default ConvexSearch;
