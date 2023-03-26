import React, {useState} from "react";
import axios from "axios";

import {Country, LocateBtn, SearchForm} from "../components";

export default function Home(){
  const [country, setCountry] = useState(null);
  const [error, setError] = useState("");
  const fetch = async (name = "DR Congo") => {
    try{
    const result = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const [data] = result.data;
    setCountry(data);
    }catch(error){
      console.log(error.response.data);
      setError(error.response.data.message);
    }
  }

  const handleSearch = (e, keyWord) => {
    e.preventDefault();
    fetch(keyWord)
  }
    return <div className="page page__home">
      <SearchForm error={error} submitHandler={handleSearch}/>
        {country ? <Country data={country}/> : null}
        <LocateBtn clickHandler={() => fetch()}/>
    </div>
}