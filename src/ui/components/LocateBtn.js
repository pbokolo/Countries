import React from "react";
import { MdPersonPinCircle as Location } from 'react-icons/md'

export default function LocateBtn({clickHandler}){
    return <button onClick={clickHandler} className="btn btn__locate"><Location className="icon" /></button>
}