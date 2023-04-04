import React from "react";

export default function TextInput({
  type,
  value,
  changeHandler,
  placeholder,
  error,
  label,
}) {
  return (
    <div className="input">
      <input
        type={type}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
        className={`input__text ${error ? "input__text--error" : ""}`}
      />
      <label className={"input__label"}>{label}</label>
    </div>
  );
}
