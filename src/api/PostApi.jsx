import axios from "axios";

const api = axios.create({
  baseURL: "https://api.restcountries.com/countries/v5",
});

export const getCounteryData = () => {
  return api.get("", {
    params: {
      "api-key": "rc_live_7639772fa90640f3996077b03ab0e77b",
      limit: 100,
    },
  });
};

//HTTP get method for idvi country
export const getCounteryIndData = (name) => {
  return api.get("", {
    params: {
      "api-key": "rc_live_7639772fa90640f3996077b03ab0e77b",
      q: name,
    },
  });
}