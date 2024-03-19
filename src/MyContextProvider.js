import React, { createContext, useState } from "react";

// Create a new context
export const MyContext = createContext();

// Create the context provider component
const MyContextProvider = ({ children }) => {
  // Define your context state and functions here
  const [exampleState, setExampleState] = useState(null);

  return (
    // Provide the context value to the children components
    <MyContext.Provider value={{ exampleState, setExampleState }}>
      {" "}
      {children}{" "}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
