import React from "react";
import "../style.css";

const Input = ({ width = "100%", placeholder = "", type = "text", value, onChange }) => {

    return (
    <input
      className="input"
      style={{ width }}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

{/* Os inputs precisam ser renderizados no component Forms */}


export default Input;