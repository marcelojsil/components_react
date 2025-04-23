import React from "react";
import "../style.css";

const ButtonSecondary = ({ text, actionType, actionValue, formId }) => {
  const handleClick = () => {
    if (actionType === "link") {
      window.open(actionValue, "_blank");
    } else if (actionType === "submit" && formId) {
      const form = document.getElementById(formId);
      if (form) form.requestSubmit();
    }
  };

  return (
    <div className="button-secondary" onClick={handleClick}>
      {text}
    </div>
  );
};

export default ButtonSecondary;