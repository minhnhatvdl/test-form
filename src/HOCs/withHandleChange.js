import React, { useContext } from "react";
import FormContext from "../Contexts/FormContext";

// handle change
export const withHandleChange = WrappedConponent => ({ ...props }) => {
  const { state, setState } = useContext(FormContext);
  const handleChange = event => {
    setState({ ...state, [props.component_identifier]: event.target.value });
  };
  return <WrappedConponent {...props} handleChange={handleChange} />;
};
