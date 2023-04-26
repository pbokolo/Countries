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

  return (
    <div className="content">
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
