import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeSelectedCountry } from "../../controller/countriesSlice";
import { Countries } from "../../controller/countries";

import NeighborCountry from "./NeighborCountry";
import CloseIcon from "@mui/icons-material/Close";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import TranslateIcon from "@mui/icons-material/Translate";
export default function DetailsDialog({ closeHandler }) {
  const data = useSelector((state) => state.countries.selectedCountry);
  const dispatch = useDispatch();
  const controller = new Countries(useDispatch);
  let codes = data.borders ? Object.values(data.borders) : [];
  let languages = data.languages
    ? Object.values(data.languages)
    : "Not official";

  const neighClickHandler = async (e) => {
    const neighCount = await controller.fetchByCode(
      codes[e.target.closest("div").dataset.index]
    );
    dispatch(changeSelectedCountry(neighCount));
  };
  return (
    <div id="overlay" className="dialog dialog__overlay" onClick={closeHandler}>
      <div className="dialog__container">
        <div id="close" className="dialog__close">
          <CloseIcon className="dialog__close-icon" />
        </div>
        <div className="flag__container">
          <img
            src={data.flags.png}
            alt={`${data?.name?.common} flag`}
            className="country__flag"
          />
        </div>
        <div className="neighbor__container" onClick={neighClickHandler}>
          {codes.map((neigh, index) => (
            <NeighborCountry key={index} data={neigh} index={index} />
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
