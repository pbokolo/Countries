import { useState } from "react";
import axios from "axios";
import Country from "./Country";
import "../style/style.css";

function App() {
  const [country, setCountry] = useState(null);
  const fetch = async () => {
    const result = await axios.get('https://restcountries.com/v3.1/name/DR Congo');
    const [data] = result.data;
    setCountry(data)
  }
  return (
    <div className="app">
      {country && <Country data={country}/>}
      <button onClick={() => {
        if(!country)fetch();
      }} className="btn btn__click-me">Click me</button>
    </div>
  );
}

export default App;
