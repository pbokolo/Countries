import React, { useState } from "react";

import { useDispatch } from "react-redux";

import TextInput from "./TextInput";
import { Countries } from "../../controller/countries";

export default function SearchForm() {
  const controller = new Countries(useDispatch);
  const [error, setError] = useState("");
  const [searchKeyWord, setSearchKeyword] = useState("");
  const handleChange = (e) => setSearchKeyword(e.target.value);
  /**
   *
   * @param {Event object} e
   * @param {Country name} keyWord
   */
  const handleSearch = async (e, keyWord) => {
    e.preventDefault();
    try {
      await controller.fetchByName(keyWord, setError);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSearch(e, searchKeyWord);
        setSearchKeyword("");
      }}
    >
      <TextInput
        type="search"
        value={searchKeyWord}
        changeHandler={handleChange}
        placeholder="Search for a country"
        label=""
        error={error}
      />
    </form>
  );
}
