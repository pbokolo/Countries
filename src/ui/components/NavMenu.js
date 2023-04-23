import React, { useState, useEffect } from "react";
import SelectOption from "./SelectOption";

export default function NavMenu() {
  const regions = ["All", "Africa", "Antarctic", "Asia", "Europe", "Oceania"];
  const [region, setRegion] = useState(regions[0].toLowerCase());

  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    window.location.hash = `#${region}`;
  }, [region]);
  return (
    <nav className="nav">
      <select className="nav__options" value={region} onChange={handleChange}>
        {regions.map((region, index) => (
          <SelectOption key={index} option={region} />
        ))}
      </select>
    </nav>
  );
}
