import React, {useState} from "react"

import TextInput from "./TextInput";

export default function SearchForm({submitHandler, error}){
    const [searchKeyWord, setSearchKeyword] = useState("");
    const handleChange = (e) => setSearchKeyword(e.target.value)
    return <form onSubmit={(e) => {submitHandler(e,searchKeyWord); setSearchKeyword("");}}>
        <TextInput type="search" value={searchKeyWord} changeHandler={handleChange} placeholder="Search for a country" error={error} />
    </form>
}