import axios from "axios";
const API = "https://restcountries.com/v3.1";

const fetchCountry = async (name = "DR Congo") => {
  const result = await axios.get(`${API}/name/${name}`);
  if (!result) throw new Error(`Country ${name} not found`);
  const [data] = result.data;
  return data;
};

const fetchAll = async () => {
  const result = await axios.get(`${API}/all`);
  if (!result) throw new Error(`Country not found`);
  let { data } = result;
  data = data.sort((a, b) => {
    const nameA = a.name.common; // ignore upper and lowercase
    const nameB = b.name.common; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return data;
};

export { fetchCountry, fetchAll };
