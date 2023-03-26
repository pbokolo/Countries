import React from "react";

export default function TextInput({type, value, changeHandler, placeholder, error}){
    return <>
    <input type={type} value={value} onChange={changeHandler}
     placeholder={placeholder}
      className="textinput" />
      <label>{error || placeholder}</label>
    </>
}