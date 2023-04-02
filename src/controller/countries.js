import axios from "axios";
const API = "https://restcountries.com/v3.1";

const fetchCountry = async (countName, setCountries, setError) => {
  setCountries([]);
  const result = await axios.get(`${API}/name/${countName}`);
  if (!result) throw new Error(`Country ${countName} not found`);
  const [data] = result.data;
  setCountries([data]);
  setError("");
};

const fetchRegion = async (region, setCountries, setError) => {
  setCountries([]);
  if (region === "all") {
    fetchAll(setCountries, setError);
    return;
  }
  const result = await axios.get(`${API}/region/${region}`);
  if (!result) throw new Error(`Country not found`);
  let { data } = result;
  data = data.sort((a, b) => {
    const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  setCountries(data);
};

const fetchAll = async (setCountries, setError) => {
  setCountries([]);
  const result = await axios.get(`${API}/all`);
  if (!result) throw new Error(`Country not found`);
  let { data } = result;
  data = data.sort((a, b) => {
    const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  setCountries(data);
  setError("");
};

export { fetchCountry, fetchAll, fetchRegion };
