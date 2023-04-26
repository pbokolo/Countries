import React from "react";

import { CountryContainer, AppBar } from "../components";

export default function Home() {
  return (
    <div className="page page__home">
      <AppBar />
      <CountryContainer />
    </div>
  );
}
