import React from "react";

import { AppBar, CountryContainer, LocateBtn } from "../components";

export default function Home() {
  return (
    <div className="page page__home">
      <AppBar />
      <CountryContainer />
      <div className="locate__container">
        <LocateBtn />
      </div>
    </div>
  );
}
