import React from "react";
import MenuItem from "./MenuItem";

export default function NavMenu() {
  const regions = ["All", "Africa", "Antarctic", "Asia", "Europe", "Oceania"];

  return (
    <nav className="nav">
      <ul className="nav__list">
        {regions.map((region, index) => (
          <MenuItem region={region} key={index} />
        ))}
      </ul>
    </nav>
  );
}
