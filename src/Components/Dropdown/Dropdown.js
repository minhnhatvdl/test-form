import React from "react";
import { dropdown } from "./Dropdown.module.css";

const Dropdown = ({ options, handleChange }) => (
  <select className={dropdown} onChange={handleChange}>
    {Array.isArray(options) &&
      options.length > 0 &&
      options.map(({ id, label }) => (
        <option key={id} value={id}>
          {label}
        </option>
      ))}
  </select>
);

export default Dropdown;
