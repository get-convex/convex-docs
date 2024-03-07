import { logEvent } from "convex-analytics";
import React, { useEffect, useState, createContext, useContext } from "react";

function Root({ children }) {
  useEffect(() => {
    logEvent("view doc load", { path: location.pathname });
  }, []);

  const [lang, setLang] = useState("TS");

  return (
    <DialectContext.Provider value={{ lang, setLang }}>
      {children}
    </DialectContext.Provider>
  );
}

const DialectContext = createContext();

export function useSelectedDialect() {
  return useContext(DialectContext).lang;
}

export function useSetDialect() {
  return useContext(DialectContext).setLang;
}

export default Root;
