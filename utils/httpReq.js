import { API_BASE_URL, DATA_ENDPOINT } from "./constants/api.constant.js";

function fetcher(endpoint) {
  return fetch(`${API_BASE_URL}${endpoint}`);
}

const fetchData = async () => {
  const res = await fetcher(DATA_ENDPOINT);
  const json = await res.json();
  return json;
};

export { fetchData };
