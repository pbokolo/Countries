import axios from "axios";
const API = "https://restcountries.com/v3.1";

const fetchCountry = async(name = "DR Congo") => {
    const result = await axios.get(`${API}/name/${name}`);
    if(!result) throw new Error(`Country ${name} not found`);
    const [data] = result.data;
    return data; 
}

const fetchAll = async() => {
    const result = await axios.get(`${API}/all`);
    if(!result) throw new Error(`Country not found`);
    const {data} = result;
    return data; 
}


export {fetchCountry, fetchAll}