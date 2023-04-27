import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import LocationCityIcon from "@mui/icons-material/LocationCity";

import TranslateIcon from "@mui/icons-material/Translate";
export default function CountrySideBack({ data }) {
  const languages = data.languages
    ? Object.values(data.languages)
    : "Not official";
  return (
    <div className="country__side country__side--back">
      <div id="close" className="close">
        <CloseIcon className="close__icon" />
      </div>
      <p className="country__region">
        <span className="country__detail">
          <LocationCityIcon />
          {data?.capital || "No official capital"}
        </span>
      </p>
      <p className="country__region">
        <span className="country__detail">
          <TranslateIcon />
          <span>{`${languages}`}</span>
        </span>
      </p>
      <button className="btn btn--visit">visit</button>
    </div>
  );
}
