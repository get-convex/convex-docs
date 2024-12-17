import algoliasearch from "algoliasearch/lite";
import React, { useEffect, useState } from "react";
import { SearchHit } from "./types";
import HitList from "./HitList";

type SearchResults = {
  hits: SearchHit[];
}[];

const searchClient = algoliasearch(
  "1KIE511890",
  "d5802c3142d1d81cebdac1ccbb02ea9f",
);

const indexes = ["docs", "stack", "discord"];

interface ResultsProps {
  query: string;
}

export default function Results({ query }: ResultsProps) {
  const [searchResults, setSearchResults] = useState<SearchHit[]>([]);

  useEffect(() => {
    if (query) {
      searchClient
        .search<SearchHit>(
          indexes.map((indexName) => ({
            indexName,
            query,
            params: {
              hitsPerPage: 10,
            },
          })),
        )
        .then((response) => {
          const [docsResults, stackResults, discordResults] =
            response.results as SearchResults;
          setSearchResults([
            ...docsResults.hits,
            ...stackResults.hits,
            ...discordResults.hits,
          ]);
        });
    } else {
      setSearchResults([]); // Clear results if query is empty.
    }
  }, [query]);

  return (
    <div className="cs-results">
      <div className="cs-results-container">
        <HitList hits={searchResults} />
      </div>
    </div>
  );
}
