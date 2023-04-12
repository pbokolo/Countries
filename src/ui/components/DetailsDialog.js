import React, { useState, useEffect } from "react";

import NeighborCountry from "./NeighborCountry";
import CloseIcon from "@mui/icons-material/Close";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import TranslateIcon from "@mui/icons-material/Translate";

import { fetchNeighbors } from "../../controller/countries";
export default function DetailsDialog({ data, closeHandler }) {
  let codes = data.borders
    ? Object.values(data.borders)
    : "No neightboring countries";
  const [neighbors, setNeighbors] = useState([]);
  let languages = data.languages
    ? Object.values(data.languages)
    : "Not official";

  const fetchNeib = async () => {
    /*await fetchNeighbors(
      ("COD", setNeighbors, () => console.log("There was an error"))
    );*/
  };
  useEffect(() => fetchNeib(), [codes]);

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
          {neighbors.map((neigh, index) => (
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
