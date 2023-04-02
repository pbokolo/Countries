import React from "react";
import spinner from "../../assets/spinner.svg";

export default function Loader() {
  return (
    <div className="loader">
      <img src={spinner} className="spinner" alt="Spinner img" />
    </div>
  );
}
