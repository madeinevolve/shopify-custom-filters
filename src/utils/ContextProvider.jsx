import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [filters, setFilters] = useState();

  let [searchParams, setSearchParams] = useSearchParams();

  function checkParams() {
    let user = searchParams.get("user");

    return user;
  }

  useEffect(() => {
    checkParams();
    console.log(checkParams());
  }, []);

  return (
    <Context.Provider value={[session, setSession]}>
      {children}
    </Context.Provider>
  );
};
