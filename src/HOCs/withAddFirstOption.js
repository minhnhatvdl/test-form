import React from "react";

// add a change of city
export const withAddFirstOption = WrappedConponent => ({ ...props }) => {
  const options = Array.isArray(props.data)
    ? [{ id: "", label: "Select a city" }, ...props.data]
    : [{ id: "", label: "Select a city" }];
  return <WrappedConponent {...props} options={options} />;
};
