import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Countries } from "../../controller/countries";
import { CountryContainer, AppBar, DetailsDialog } from "../components";

export default function Home() {
  const countries = useSelector((state) => state.countries.list);
  const controller = new Countries(useDispatch);
  const [error, setError] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    controller.fetchAll();
  }, []);

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

  /**
   * Fetches all countries from a region
   * @param {Event object} e
   */
  const handleMenuClick = async (e) => {
    const [textContent] = e.target.childNodes;
    const { data } = textContent;
    controller.fetchByRegion(data.toLowerCase());
  };

  const handleCountryClick = (e) => {
    controller.handleCountryClick(e.target.closest("div").dataset.index);
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
        countries={countries}
        clickHandler={handleCountryClick}
      />

      {showDialog && (
        <DetailsDialog closeHandler={() => setShowDialog(false)} />
      )}
    </div>
  );
}
