import React from "react";
import flag from "../../assets/drc.png"

export default function Country(){
    return <div className="country">
        <img src={flag} alt="Country flag" className="country__flag"/>
        <p className="country__name">Congo DR</p>
        <p className="country__name">Africa</p>
        <p className="country__name">100 M</p>
        <p className="country__name">Swahili, Lingala, Tshiluba, Kikongo, French</p>
        <p className="country__name">Congolese Franc(CDF)</p>
        </div>
}