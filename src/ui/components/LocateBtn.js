import React from "react";
import { useDispatch } from "react-redux";
import { Countries } from "../../controller/countries";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";

export default function LocateBtn() {
  const controller = new Countries(useDispatch);
  const clickHandler = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await controller.fetchByLocation({ latitude, longitude });
      },
      (error) => console.log(error)
    );
  };
  return (
    <button onClick={clickHandler} className="btn btn__locate">
      <MyLocationOutlinedIcon className="icon" />
    </button>
  );
}
