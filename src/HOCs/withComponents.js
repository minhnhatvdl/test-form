import React, { useContext } from "react";
import AppContext from "../Contexts/AppContext";

export const withComponents = WrappedConponent => ({ ...props }) => {
  const { components } = useContext(AppContext);
  return <WrappedConponent {...props} {...components} />;
};
