import React, { useState } from "react";

import {
  fetchAll,
  fetchCountry,
  fetchRegion,
} from "../../controller/countries";
import { LocateBtn, CountryContainer, AppBar } from "../components";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  const getAll = async () => {
    const data = await fetchAll();
    setCountries(data);
    error && setError("");
  };
  const handleSearch = async (e, keyWord) => {
    e.preventDefault();
    try {
      const data = await fetchCountry(keyWord);
      setCountries([data]);
      error && setError("");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleMenuClick = async (e) => {
    const [textContent] = e.target.childNodes;
    const { data } = textContent;
    if (data.toLowerCase() === "all") {
      getAll();
      return;
    }

    const counts = await fetchRegion(data.toLowerCase());
    setCountries(counts);
  };
  return (
    <div className="page page__home">
      <AppBar
        error={error}
        submitHandler={handleSearch}
        menuClickHandler={handleMenuClick}
      />
      <div className="content">
        <CountryContainer countries={countries} />
      </div>
      <LocateBtn clickHandler={getAll} />
    </div>
  );
}
