import React from "react";
import {Link} from "react-router-dom"

export default function Lost(){
    return <div className="page page__lost">
        You are lost. <Link to={"/"}>Go back home</Link>
    </div>
}