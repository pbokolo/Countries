import React, { useEffect, useState } from "react";
import { fetchNeighbor } from "../../controller/countries";

export default function NeighborCountry({ data }) {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    getNeighbor();
  }, [null]);

  const getNeighbor = async () => {
    const cdata = await fetchNeighbor(data);
    setCountry(cdata);
  };
  return (
    <div className="country__neighbor">
      <div className="country__neighbor-flag">
        <img
          src={country && country.flags.png}
          alt={`${country && country?.name?.common} flag`}
          className="country__flag"
        />
      </div>
      <div className="country__neighbor-name">
        <p>{country && country.name.common}</p>
      </div>
    </div>
  );
}
