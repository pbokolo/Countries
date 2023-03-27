import React from "react";

export default function TextInput({type, value, changeHandler, placeholder, error}){
    return <>
    <input type={type} value={value} onChange={changeHandler}
     placeholder={placeholder}
      className={`textinput ${error ? 'textinput--error' : ''}`} />
      <label>{error || placeholder}</label>
    </>
}