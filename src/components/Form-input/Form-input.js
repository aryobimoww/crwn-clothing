import React from "react";

import "./Form-input.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} />
    {label ? (
      <label className={`${otherProps.value ? "shirnk" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
