import React from "react";
import { input } from "./Input.module.css";

const Input = ({ value, handleChange }) => (
  <input className={input} type="text" value={value} onChange={handleChange} />
);

export default Input;
