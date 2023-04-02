import React, { useState } from "react";
export default function NavMenu({ clickHandler }) {
  const [selected, setSelected] = useState(0);
  const regions = ["All", "Africa", "Antarctic", "Asia", "Europe", "Oceania"];
  return (
    <div className="nav">
      <ul
        className="nav__list"
        onClick={(e) => {
          clickHandler(e);
          setSelected(Number(e.target.dataset.index));
        }}
      >
        {regions.map((region, index) => (
          <li
            key={index}
            className={`nav__list-item ${
              index === selected ? "nav__list-item--active" : ""
            }`}
            value={region}
            data-index={index}
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
}
