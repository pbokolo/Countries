import React, { useState, useEffect } from "react";

import {
  fetchAll,
  fetchCountry,
  fetchRegion,
} from "../../controller/countries";
import { LocateBtn, CountryContainer, AppBar, Loader } from "../components";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const loading = countries.length === 0;

  useEffect(() => {
    getAll();
  }, []);

  /**
   * Fetches all countries in the world
   */
  const getAll = async () => await fetchAll(setCountries, setError);

  /**
   *
   * @param {Event object} e
   * @param {Country name} keyWord
   */
  const handleSearch = async (e, keyWord) => {
    e.preventDefault();
    try {
      await fetchCountry(keyWord, setCountries, setError);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  /**
   * Fetches all countries from a region
   * @param {Event object} e
   */
  const handleMenuClick = async (e) => {
    const [textContent] = e.target.childNodes;
    const { data } = textContent;
    await fetchRegion(data.toLowerCase(), setCountries, setError);
  };

  const handleGeoLoc = () => console.log("Should geolocate");
  return (
    <div className="page page__home">
      <AppBar
        error={error}
        submitHandler={handleSearch}
        menuClickHandler={handleMenuClick}
      />
      <div className="content">
        {loading ? <Loader /> : <CountryContainer countries={countries} />}
      </div>
      <LocateBtn clickHandler={handleGeoLoc} />
    </div>
  );
}
