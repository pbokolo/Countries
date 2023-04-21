import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setRegion } from "../../controller/countriesSlice";

export default function NavMenu() {
  const selectedRegion = useSelector((state) => state.countries.region);
  const dispatch = useDispatch();
  const regions = ["All", "Africa", "Antarctic", "Asia", "Europe", "Oceania"];
  return (
    <div className="nav">
      <ul className="nav__list">
        {regions.map((region, index) => (
          <li
            key={index}
            className={`nav__list-item ${
              region.toLocaleLowerCase() === selectedRegion
                ? "nav__list-item--active"
                : ""
            }`}
            value={region}
            data-region={region.toLocaleLowerCase()}
          >
            <a href={`#${region.toLocaleLowerCase()}`}>{region}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
