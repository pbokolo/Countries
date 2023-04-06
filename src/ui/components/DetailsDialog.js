import React from "react";

export default function DetailsDialog({ data, closeHandler }) {
  return (
    <div className="dialog dialog__overlay" onClick={closeHandler}>
      <div className="dialog__container">
        <span className="dialog__close">X</span>
        <div className="flag__container">
          <img
            src={data.flags.png}
            alt={`${data?.name?.common} flag`}
            className="country__flag"
          />
        </div>
        <div className="details__container">Details</div>
      </div>
    </div>
  );
}
