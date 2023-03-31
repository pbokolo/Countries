import React from "react";

export default function NavMenu() {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item--active">All</li>
        <li className="nav__list-item">Africa</li>
        <li className="nav__list-item">Antarctic</li>
        <li className="nav__list-item">Asia</li>
        <li className="nav__list-item">Europe</li>
        <li className="nav__list-item">Oceania</li>
      </ul>
    </div>
  );
}
