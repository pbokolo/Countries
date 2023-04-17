import axios from "axios";
const API = "https://restcountries.com/v3.1";

const fetchCountry = async (countName, dispatch, setList, setError) => {
  const result = await axios.get(`${API}/name/${countName}`);
  if (!result) throw new Error(`Country ${countName} not found`);
  const [data] = result.data;
  dispatch(setList([data]));
  setError("");
};

const fetchNeighbor = async (code) => {
  const result = await axios.get(`${API}/alpha/${code}`);
  if (!result) throw new Error(`Country ${code} not found`);
  const [data] = result.data;
  return data;
};

const fetchRegion = async (region, dispatch, setList) => {
  if (region === "all") {
    fetchAll(dispatch, setList);
    return;
  }
  const result = await axios.get(`${API}/region/${region}`);
  if (!result) throw new Error(`Country not found`);
  const data = handleResult(result);
  dispatch(setList(data));
};

const fetchAll = async (dispatch, setList) => {
  const result = await axios.get(`${API}/all`);
  if (!result) throw new Error(`Country not found`);
  const data = handleResult(result);
  dispatch(setList(data));
};

const handleResult = (result) => {
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

  return data;
};

export { fetchCountry, fetchAll, fetchRegion, fetchNeighbor };
