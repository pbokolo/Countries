import React from "react";
import Country from "./Country";

export default function CountryContainer({ countries, clickHandler }) {
  return (
    <div className="container" onClick={clickHandler}>
      {countries.map((country, index) => (
        <Country key={index} index={index} data={country} />
      ))}
    </div>
  );
}
