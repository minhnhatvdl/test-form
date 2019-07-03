import React from "react";

export const withOnTopRight = WrappedConponent => ({ ...props }) => {
  const onTopRight = {
    display: "block",
    position: "fixed",
    top: "20px",
    right: "20px"
  };
  return <WrappedConponent {...props} style={onTopRight} />;
};
