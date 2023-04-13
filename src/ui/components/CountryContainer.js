import React from "react";
import Country from "./Country";
import Loader from "./Loader";

export default function CountryContainer({ countries, clickHandler }) {
  return (
    <div className="content" onClick={clickHandler}>
      {countries.length === 0 ? (
        <Loader />
      ) : (
        countries.map((country, index) => (
          <Country key={index} index={index} data={country} />
        ))
      )}
    </div>
  );
}
