import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setList } from "../../controller/countriesSlice";
import {
  fetchAllR,
  fetchCountry,
  fetchRegion,
} from "../../controller/countries";
import { CountryContainer, AppBar, DetailsDialog } from "../components";

export default function Home() {
  const countList = useSelector((state) => state.countries.list);
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [error, setError] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  /**
   * Fetches all countries in the world
   */
  const getAll = async () => {
    const results = await fetchAllR();
    () => dispatch(() => setList(results));
  };

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

  const handleCountryClick = (e) => {
    setSelectedCountry(countries[e.target.closest("div").dataset.index]);
    setShowDialog(true);
  };
  return (
    <div className="page page__home">
      <AppBar
        error={error}
        submitHandler={handleSearch}
        menuClickHandler={handleMenuClick}
      />
      <CountryContainer
        countries={countList}
        clickHandler={handleCountryClick}
      />

      {showDialog && selectedCountry && (
        <DetailsDialog
          data={selectedCountry}
          closeHandler={() => setShowDialog(false)}
        />
      )}
    </div>
  );
}
