import React, { createContext, useEffect, useState } from "react";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [filters, setFilters] = useState();

console.log('paperino')
  return (
    <Context.Provider value={[filters, setFilters]}>
      {children}
    </Context.Provider>
  );
};
