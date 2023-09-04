import React from "react";
import '../css/login.css';
import Error from "./Error";

function FormGroup({ name, label, type, errorMessage }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <i className={`fa-solid fa-${name}`}></i>
        <input
          type={type}
          name={name}
          id={name}
          className="form-control"
          placeholder={label}
        ></input>
        <div id={`${name}-error`} className="error">
          {errorMessage}
        </div>
      </label>
    </div>
  );
}

export default FormGroup;