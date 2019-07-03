import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";
// context
import AppContext from "../Contexts/AppContext";
// Hook
import { useFetch } from "../Hooks/useFetch";
// api
import { apiComponents } from "../APIs/api";

const AppProvider = ({ ...props }) => {
  // theme
  const [theme, setTheme] = useState("light");
  // loading
  const [loading, setLoading] = useState(false);
  // error
  const [error, setError] = useState(false);
  // data
  const [data, setData] = useState([]);
  // components
  const [initComponents] = useFetch(
    apiComponents,
    { components: [] },
    setLoading,
    setError
  );
  // handle theme
  useEffect(() => {
    const handleTheme = () => {
      document.documentElement.classList.add("animationColorTheme");
      document.documentElement.setAttribute("data-theme", theme);
      window.setTimeout(() => {
        document.documentElement.classList.remove("animationColorTheme");
      }, 500);
    };
    handleTheme();
  }, [theme]);
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        components: initComponents.components[0],
        setLoading,
        setError,
        data,
        setData
      }}
    >
      {error && <Error />}
      {loading && <Loading />}
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
