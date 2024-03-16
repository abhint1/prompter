import React, { createContext, useState } from "react";

export const MyContext = createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState("initial value");

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
