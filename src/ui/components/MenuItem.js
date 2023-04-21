import React from "react";

export default function MenuItem({ region }) {
  const selectedRegion =
    window.location.hash.slice(1).toLocaleLowerCase() || "all";
  return (
    <li
      className={`nav__list-item ${
        region.toLocaleLowerCase() === selectedRegion
          ? "nav__list-item--active"
          : ""
      }`}
    >
      <a className="link" href={`#${region.toLocaleLowerCase()}`}>
        {region}
      </a>
    </li>
  );
}
