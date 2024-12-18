import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useCallback, useEffect, useState } from "react";
import Dialog from "./Dialog";
import SearchButton from "./SearchButton";

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
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    // Render this only on the client, as it uses `document` and `window`.
    // TODO: Remove `cs-` class names once CSS variables are no longer in use.
    <BrowserOnly>
      {() => (
        <div className="cs-root cs-root--custom order-2 lg:order-1">
          <SearchButton onClick={() => setDialogOpen(true)} />
          <Dialog open={dialogOpen} onClose={handleCloseDialog} />
        </div>
      )}
    </BrowserOnly>
  );
};

export default ConvexSearch;
