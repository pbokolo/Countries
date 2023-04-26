import React, { useState } from "react";

import CountrySideFront from "./CountrySideFront";
import CountrySideBack from "./CountrySideBack";

export default function Country({ index, data }) {
  const [side, setSide] = useState("front");
  const handleClick = (e) => {
    if (e.target.closest("div[id]").id === "front") {
      setSide("back");
    }
    if (e.target.closest("div[id]").id === "close") {
      setSide("front");
    }
  };
  return (
    <div
      className={`country country--${side}`}
      data-index={index}
      onClick={handleClick}
    >
      <CountrySideFront data={data} />
      <CountrySideBack data={data} />
    </div>
  );
}
