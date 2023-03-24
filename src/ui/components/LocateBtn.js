import React from "react";
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';

export default function LocateBtn({clickHandler}){
    return <button onClick={clickHandler} className="btn btn__locate"><MyLocationOutlinedIcon className="icon" /></button>
}