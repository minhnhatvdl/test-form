import React from "react";
import { button } from "./Button.module.css";

const Button = ({ style, handleClick, children }) => (
  <button className={button} style={style} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
