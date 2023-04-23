import React from "react";

export default function SelectOption({ option }) {
  return (
    <option value={option.toLowerCase()} className="nav__options-option">
      {option}
    </option>
  );
}
