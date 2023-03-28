import React, { useState } from "react";

import { fetchAll, fetchCountry } from "../../controller/countries";
import { LocateBtn, SearchForm, CountryContainer } from "../components";

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
  return (
    <div className="page page__home">
      <div className="content">
        <SearchForm error={error} submitHandler={handleSearch} />
        <CountryContainer countries={countries} />
      </div>
      <LocateBtn clickHandler={getAll} />
    </div>
  );
}
