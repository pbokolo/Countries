import React from "react";

import { useSelector } from "react-redux";

import NeighborCountry from "./NeighborCountry";
import CloseIcon from "@mui/icons-material/Close";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import TranslateIcon from "@mui/icons-material/Translate";
export default function DetailsDialog({ closeHandler }) {
  const { list, selectedCountry } = useSelector((state) => state.countries);
  const data = list[selectedCountry];
  let codes = data.borders ? Object.values(data.borders) : [];
  let languages = data.languages
    ? Object.values(data.languages)
    : "Not official";

  return (
    <div className="dialog dialog__overlay" onClick={closeHandler}>
      <div className="dialog__container">
        <span className="dialog__close">
          <CloseIcon className="dialog__close-icon" />
        </span>
        <div className="flag__container">
          <img
            src={data.flags.png}
            alt={`${data?.name?.common} flag`}
            className="country__flag"
          />
        </div>
        <div className="neighbor__container">
          {codes.map((neigh, index) => (
            <NeighborCountry key={index} data={neigh} />
          ))}
        </div>
        <div className="details__container">
          <p className="country__region">
            <span className="country__detail">
              <LocationCityIcon />
              {data.capital || "No official capital"}
            </span>
          </p>

          <p className="country__region">
            <span className="country__detail">
              <SouthAmericaIcon />
              {data.subregion || "No official"}
            </span>
          </p>
          <p className="country__region">
            <span className="country__detail">
              <TranslateIcon />
              {`${languages}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
