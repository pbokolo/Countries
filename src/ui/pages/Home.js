import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { Countries } from "../../controller/countries";
import { CountryContainer, AppBar, DetailsDialog } from "../components";

export default function Home() {
  const controller = new Countries(useDispatch);
  const [error, setError] = useState("");
  const [showDialog, setShowDialog] = useState(false);

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
      <CountryContainer clickHandler={handleCountryClick} />

      {showDialog && (
        <DetailsDialog closeHandler={() => setShowDialog(false)} />
      )}
    </div>
  );
}
