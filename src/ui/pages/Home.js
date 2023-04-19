import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Countries } from "../../controller/countries";
import { CountryContainer, AppBar, DetailsDialog } from "../components";

export default function Home() {
  const countries = useSelector((state) => state.countries.list);
  const region = useSelector((state) => state.countries.region);
  const controller = new Countries(useDispatch);
  const [error, setError] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    getCountries();
  }, [region]);

  const getCountries = async () => {
    await controller.fetchByRegion(region);
  };

  /**
   *
   * @param {Event object} e
   * @param {Country name} keyWord
   */
  const handleSearch = async (e, keyWord) => {
    e.preventDefault();
    try {
      await controller.fetchByName(keyWord, setError);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleCountryClick = (e) => {
    controller.handleCountryClick(e.target.closest("div").dataset.index);
    setShowDialog(true);
  };
  return (
    <div className="page page__home">
      <AppBar error={error} submitHandler={handleSearch} />
      <CountryContainer
        countries={countries}
        clickHandler={handleCountryClick}
      />

      {showDialog && (
        <DetailsDialog closeHandler={() => setShowDialog(false)} />
      )}
    </div>
  );
}
