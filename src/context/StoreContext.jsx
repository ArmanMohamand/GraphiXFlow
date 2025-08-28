import { createContext, useEffect, useState } from "react";
import { graphics } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  
  const contextValue = {
    graphics
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
