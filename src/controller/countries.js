import axios from "axios";
import { GEOCODE_API_KEY } from "../keys";
import { setLoading, setList } from "./countriesSlice";

class Countries {
  #API = "https://restcountries.com/v3.1";
  #GEO_API = "https://api.opencagedata.com/geocode/v1/json?";
  #dispatch;

  constructor(dispatcher) {
    this.#dispatch = dispatcher();
  }

  /**
   * Fetches and retrieves all countries in the world
   */
  async fetchAll() {
    const result = await axios.get(`${this.#API}/all`);
    const data = this.#handleResult(result);
    this.#dispatch(setList(data));
    this.#dispatch(setLoading(false));
  }

  /**
   * Fetches all countries of a specific region
   * @param {region name} region
   * @returns An array of countries
   */
  async fetchByRegion(region) {
    this.#dispatch(setLoading(true));
    if (region === "all") {
      this.fetchAll();

      return;
    }
    const result = await axios.get(`${this.#API}/region/${region}`);
    const data = this.#handleResult(result);
    this.#dispatch(setList(data));
    this.#dispatch(setLoading(false));
  }

  /**
   * Fetches for a specific country in the world
   * @param {The name of the country} countName
   * @param {Error handler} setError
   */
  async fetchByName(countName, setError) {
    this.#dispatch(setLoading(true));
    const result = await axios.get(`${this.#API}/name/${countName}`);
    if (!result) throw new Error(`Country ${countName} not found`);
    const [data] = result.data;
    this.#dispatch(setList([data]));
    setError("");
    this.#dispatch(setLoading(false));
  }

  /**
   * Fetches a county based on its code
   * @param {The country's code} code
   * @returns Data about a country
   */
  async fetchByCode(code) {
    const result = await axios.get(`${this.#API}/alpha/${code}`);
    if (!result) throw new Error(`Country ${code} not found`);
    const [data] = result.data;
    return data;
  }

  async fetchByLocation(position) {
    const { latitude, longitude } = position;
    const result = await axios.get(
      `${this.#GEO_API}q=${latitude}+${longitude}&key=${GEOCODE_API_KEY}`
    );
    const { country_code } = result.data.results[0].components;
    const country = await this.fetchByCode(country_code);
    this.#dispatch(setList([country]));
    this.#dispatch(setLoading(false));
  }

  /**
   * Handles the result of the api
   * @param {The result object} result
   * @returns An sorted array of data
   */
  #handleResult(result) {
    if (!result) throw new Error(`Country not found`);
    let { data } = result;
    return this.#sortArray(data);
  }

  #sortArray(arr) {
    return arr.sort((a, b) => {
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
  }
}

export { Countries };
