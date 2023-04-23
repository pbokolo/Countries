import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { Countries } from "../../controller/countries";
import { CountryContainer, AppBar, DetailsDialog } from "../components";

export default function Home() {
  const controller = new Countries(useDispatch);
  const [showDialog, setShowDialog] = useState(false);

  const handleCountryClick = (e) => {
    controller.handleCountryClick(e.target.closest("div").dataset.index);
    setShowDialog(true);
  };

  const handleClodeDialog = (e) => {
    if (e.target.closest("div").id) {
      setShowDialog(false);
    }
  };
  return (
    <div className="page page__home">
      <AppBar />
      <CountryContainer clickHandler={handleCountryClick} />

      {showDialog && <DetailsDialog closeHandler={handleClodeDialog} />}
    </div>
  );
}
