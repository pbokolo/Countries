import React from "react";

export default function NeighborCountry({ data }) {
  return (
    <div className="country__neighbor">
      <div className="country__neighbor-flag"></div>
      <p className="country__neighbor-name">{data}</p>
    </div>
  );
}
