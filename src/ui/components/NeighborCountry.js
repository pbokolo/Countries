import React, { useEffect, useState } from "react";
import { fetchNeighbors } from "../../controller/countries";

export default function NeighborCountry({ data }) {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    getNeighbor();
  }, [null]);

  const getNeighbor = async () => {
    const cdata = await fetchNeighbors(data);
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
      <p className="country__neighbor-name">{country && country.name.common}</p>
    </div>
  );
}
