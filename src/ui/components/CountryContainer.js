import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Country from "./Country";
import Loader from "./Loader";

import { Countries } from "../../controller/countries";

export default function CountryContainer() {
  const controller = new Countries(useDispatch);
  let { loading, list } = useSelector((state) => state.countries);
  const region = window.location.hash.slice(1) || "all";

  useEffect(() => {
    getCountries();
  }, [region]);

  const getCountries = async () => {
    await controller.fetchByRegion(region);
  };

  const handleClick = (e) => {
    const frontClass = "country--front",
      backClass = "country--back";
    const container = e.target.closest("div[id='container']");
    const source = e.target.closest("div");
    if (source.id === "front") {
      container.classList.remove(frontClass);
      container.classList.add(backClass);
    }
    if (source.id === "close") {
      container.classList.remove(backClass);
      container.classList.add(frontClass);
    }
  };

  return (
    <div className="content" onClick={handleClick}>
      {loading ? (
        <Loader />
      ) : (
        list.map((country, index) => (
          <Country key={index} index={index} data={country} />
        ))
      )}
    </div>
  );
}
