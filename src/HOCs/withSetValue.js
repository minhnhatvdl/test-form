import React, { useContext } from "react";
import FormContext from "../Contexts/FormContext";

// set value
export const withSetValue = WrappedConponent => ({ ...props }) => {
  const { state } = useContext(FormContext);
  const value = state[props.component_identifier]
    ? state[props.component_identifier]
    : "";
  return <WrappedConponent {...props} value={value} />;
};
