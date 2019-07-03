import React, { useContext } from "react";
import AppContext from "../Contexts/AppContext";
// add a toggleTheme
export const withToggleTheme = WrappedConponent => ({ ...props }) => {
  const { setTheme } = useContext(AppContext);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };
  return <WrappedConponent {...props} handleClick={toggleTheme} />;
};
