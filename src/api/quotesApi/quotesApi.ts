import { ApiRequestConfig } from "../api-types";
import api from "../api";

const URLENDPOINT = {
  fetchQuotes: "/random-quote",
};

export type Quote = {
  id: number;
  quote: string;
  author: string;
  category: string;
};

export const fetchQuote = (config: ApiRequestConfig = {}) => {
  config = {
    baseURL: "https://bodybuilding-quotes1.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": "32a153d762msh42602d5b880c4dbp149887jsn50d3aa12666c",
      "X-RapidAPI-Host": "bodybuilding-quotes1.p.rapidapi.com",
    },
  };
  return api
    .get<Quote>(URLENDPOINT.fetchQuotes, config)
    .then((res) => res.data);
};
