import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import TranslateIcon from "@mui/icons-material/Translate";
import GroupsIcon from "@mui/icons-material/Groups";

export default function DetailsDialog({ data, closeHandler }) {
  let languages = Object.values(data.languages);
  let neighbors = Object.values(data.borders);
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
        <div className="details__container">
          <p className="country__region">
            <span className="country__detail">
              <LocationCityIcon />
              {data.capital}
            </span>
          </p>

          <p className="country__region">
            <span className="country__detail">
              <SouthAmericaIcon />
              {data.subregion}
            </span>
          </p>
          <p className="country__region">
            <span className="country__detail">
              <TranslateIcon />
              {`${languages}`}
            </span>
          </p>
          <p className="country__region">
            <span className="country__detail">
              <GroupsIcon />
              {`${neighbors}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}