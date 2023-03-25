import React, {useState} from "react"

export default function SearchForm({submitHandler}){
    const [searchKeyWord, setSearchKeyword] = useState("");
    const handleChange = (e) => setSearchKeyword(e.target.value)
    return <form onSubmit={(e) => {submitHandler(e,searchKeyWord); setSearchKeyword("");}}>
        <input type="search" value={searchKeyWord} onChange={handleChange} placeholder="Search for a country" />
    </form>
}