import React from "react";
import Country from "./Country";

export default function CountryContainer({countries}){
    
    return <div className="container">
    {/*countries.map((country, index) => (<Country key={index} data={country}/> ))*/}
    {countries.map((country, index) => (<Country key={index} data={country}/>))}
      </div> 
}