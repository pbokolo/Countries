import React from "react";

import NeighborCountry from "./NeighborCountry";

import CloseIcon from "@mui/icons-material/Close";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TranslateIcon from "@mui/icons-material/Translate";
export default function CountrySideBack({ data }) {
  const languages = data.languages
    ? Object.values(data.languages)
    : "Not official";
  const borders = data.borders ? Object.values(data.borders) : [];

  return (
    <div className="country__side country__side--back">
      <div id="close" className="close">
        <CloseIcon className="close__icon" />
      </div>
      <div className="country__capital">
        <span className="country__detail country__detail-icon">
          <LocationCityIcon />
        </span>
        <span className="country__detail country__detail-value">
          {data?.capital || "No official capital"}
        </span>
      </div>
      <div className="country__languages">
        <span className="country__detail country__detail-icon">
          <TranslateIcon />
        </span>
        <span className="country__detail country__detail-value">{`${languages}`}</span>
      </div>
      <div className="country__neighbors">
        <h4 className="country__neighbors-title">Neibors</h4>
        <div className="country__neighbors-container">
          {borders.map((neigh, index) => (
            <NeighborCountry key={index} index={index} data={neigh} />
          ))}
        </div>
      </div>
    </div>
  );
}
