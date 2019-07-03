import React, { useContext } from "react";
import AppContext from "../Contexts/AppContext";

export const withListUser = WrappedConponent => ({ ...props }) => {
  const { data } = useContext(AppContext);
  return <WrappedConponent {...props} listUser={data} />;
};
