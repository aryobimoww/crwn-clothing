import React from "react";

import "./Form-input.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  console.log(otherProps.value);
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shirnk" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
