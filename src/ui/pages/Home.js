import React from "react";
import { useState } from "react";
import axios from "axios";


import {Country, LocateBtn} from "../components";

export default function Home(){
    const [country, setCountry] = useState(null);
  const fetch = async () => {
    if(country) return;
    const result = await axios.get('https://restcountries.com/v3.1/name/DR Congo');
    const [data] = result.data;
    setCountry(data)
  }
    return <div className="page page__home">
        {country ? <Country data={country}/> : null}
        <LocateBtn clickHandler={fetch}/>
    </div>
}