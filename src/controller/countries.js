import axios from "axios";
import { setList } from "./countriesSlice";

class Countries {
  #API = "https://restcountries.com/v3.1";
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
  }

  /**
   * Fetches all countries of a specific region
   * @param {region name} region
   * @returns An array of countries
   */
  async fetchByRegion(region) {
    if (region === "all") {
      this.fetchAll();
      return;
    }
    const result = await axios.get(`${this.#API}/region/${region}`);
    const data = this.#handleResult(result);
    this.#dispatch(setList(data));
  }

  /**
   * Fetches for a specific country in the world
   * @param {The name of the country} countName
   * @param {Error handler} setError
   */
  async fetchByName(countName, setError) {
    const result = await axios.get(`${this.#API}/name/${countName}`);
    if (!result) throw new Error(`Country ${countName} not found`);
    const [data] = result.data;
    this.#dispatch(setList([data]));
    setError("");
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
