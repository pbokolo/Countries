import React from "react";
import Country from "./Country";
import Loader from "./Loader";

export default function CountryContainer({ countries }) {
  return (
    <div className="container">
      {countries ? (
        countries.map((country, index) => (
          <Country key={index} data={country} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
