import React from "react";
import SearchForm from "./SearchForm";

export default function AppBar({ error, submitHandler, scroll }) {
  return (
    <div className={"app__bar"}>
      <SearchForm error={error} submitHandler={submitHandler} />
    </div>
  );
}