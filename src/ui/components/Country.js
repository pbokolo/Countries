import React from "react";

import CountrySideFront from "./CountrySideFront";
import CountrySideBack from "./CountrySideBack";

export default function Country({ index, data }) {
  return (
    <div className="country" data-index={index}>
      <CountrySideFront data={data} />
      <CountrySideBack data={data} />
    </div>
  );
}
