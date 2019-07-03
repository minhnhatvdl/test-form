import React from "react";
import { form } from "./Form.module.css";

const Form = ({ handleForm, children }) => (
  <form className={form} onSubmit={handleForm}>
    {children}
  </form>
);

export default Form;
