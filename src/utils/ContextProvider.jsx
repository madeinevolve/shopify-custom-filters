import React, { createContext, useEffect, useState } from "react";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [filters, setFilters] = useState();

  //let [searchParams, setSearchParams] = useSearchParams();

  function checkParams() {
    //let user = searchParams.get("user");
    return setFilters('Paperino');
  }

  useEffect(() => {
    checkParams();
    console.log(filters)
  }, []);

  return (
    <Context.Provider value={[filters, setFilters]}>
      {children}
    </Context.Provider>
  );
};
