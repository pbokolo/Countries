import React, { useState } from "react";

export default function NavMenu({ clickHandler }) {
  const [selected, setSelected] = useState(0);
  const regions = ["All", "Africa", "Antarctic", "Asia", "Europe", "Oceania"];
  return (
    <div className="nav">
      <ul className="nav__list" onClick={clickHandler}>
        {regions.map((region, index) => (
          <li
            key={index}
            className={`nav__list-item ${
              index === 0 ? "nav__list-item--active" : ""
            }`}
            value={region}
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
}
