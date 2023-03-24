import React from "react";

export default function Country({data}){
    return <div className="country">
        <img src={data.flags.svg} alt={`${data.name.common} flag`} className="country__flag"/>
       
        <p className="country__name">{data.name.common}</p>
        <p className="country__region">{data.region}</p>
        <p className="country__pop">{data.population}</p>
        <p className="country__lang">{data.languages.fra}</p>
        <p className="country__currency">{`${data.currencies.CDF.name} (${data.currencies.CDF.symbol})`}</p>
       
        </div>
}