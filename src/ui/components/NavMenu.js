import React from "react";

export default function NavMenu({ clickHandler }) {
  const regions = ["All", "Africa", "Antarctic", "Asia", "Europe", "Oceania"];
  return (
    <div className="nav">
      <ul className="nav__list" onClick={clickHandler}>
        {regions.map((region, index) => (
          <li key={index} className={`nav__list-item`} value={region}>
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
}
