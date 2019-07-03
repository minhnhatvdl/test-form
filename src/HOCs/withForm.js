import React, { useState, useEffect, useContext } from "react";
import Button from "../Components/Button/Button";
import DynamicComponent from "../Containers/DynamicComponent/DynamicComponent";
// api
import { apiUsers } from "../APIs/api";
// contexts
import FormContext from "../Contexts/FormContext";
import AppContext from "../Contexts/AppContext";

export const withForm = WrappedConponent => ({ ...props }) => {
  const { setLoading, setError, setData } = useContext(AppContext);
  const [state, setState] = useState({});
  useEffect(() => {
    props.children.forEach(e => {
      setState(prevState => ({ ...prevState, [e.component_identifier]: "" }));
    });
  }, [props.children]);
  // handle a form
  const handleForm = async event => {
    event.preventDefault();
    if (!state.search.toLowerCase().trim() && state.dropdown === "") {
      setData([]);
      return false;
    }
    setError(false);
    setLoading(true);
    try {
      const res = await fetch(apiUsers);
      const listUser = await res.json();
      const listUserResult = listUser.filter(
        ({ ville, nom, prenom }) =>
          (state.search.toLowerCase().trim()
            ? `${prenom} ${nom}`
                .toLowerCase()
                .includes(state.search.toLowerCase().trim())
            : true) &&
          (state.dropdown === ""
            ? true
            : ville.toLowerCase().includes(state.dropdown.toLowerCase()))
      );
      setData(listUserResult);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  return (
    <FormContext.Provider value={{ state, setState }}>
      <WrappedConponent {...props} handleForm={handleForm}>
        {Array.isArray(props.children) &&
          props.children.length > 0 &&
          props.children.map(component => (
            <DynamicComponent
              key={component.component_identifier}
              {...component}
            />
          ))}
        <Button>Submit</Button>
      </WrappedConponent>
    </FormContext.Provider>
  );
};
