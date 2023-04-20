import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Countries } from "../../controller/countries";

export default function NeighborCountry({ data, index }) {
  const [country, setCountry] = useState(null);
  const controller = new Countries(useDispatch);
  useEffect(() => {
    getNeighbor();
  }, [null]);

  const getNeighbor = async () => {
    const cdata = await controller.fetchByCode(data);
    setCountry(cdata);
  };
  return (
    <div className="country__neighbor" data-index={index}>
      <div className="country__neighbor-flag" data-index={index}>
        <img
          src={country && country.flags.png}
          alt={`${country && country?.name?.common} flag`}
          className="country__flag"
        />
      </div>
      <div className="country__neighbor-name" data-index={index}>
        <p>{country && country.name.common}</p>
      </div>
    </div>
  );
}
