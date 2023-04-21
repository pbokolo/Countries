import React from "react";

import SearchForm from "./SearchForm";
import NavMenu from "./NavMenu";

export default function AppBar() {
  return (
    <div className={"app__bar"}>
      <SearchForm />
      <NavMenu />
    </div>
  );
}
