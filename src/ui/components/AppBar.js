import React from "react";

import SearchForm from "./SearchForm";
import NavMenu from "./NavMenu";

export default function AppBar({ error, submitHandler }) {
  return (
    <div className={"app__bar"}>
      <SearchForm error={error} submitHandler={submitHandler} />
      <NavMenu />
    </div>
  );
}
