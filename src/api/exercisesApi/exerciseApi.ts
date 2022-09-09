// import api from "../api";

import { ApiRequestConfig } from "../api-types";
import api from "../api";

const URLENDPOINT = {
  fetchBodyPartList: "bodyPartList",
  fetchExerciseByBodyPart: "bodyPart",
  fetchExerciseByName: "",
};

const APIconfig = {
  baseURL: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Key": "32a153d762msh42602d5b880c4dbp149887jsn50d3aa12666c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export type ExerciseBodyPart = string;

export const fetchBodyPart = (config: ApiRequestConfig) => {
  config = APIconfig;
  return api
    .get<ExerciseBodyPart[]>(URLENDPOINT.fetchBodyPartList, config)
    .then((res) => res.data);
};

export type Exercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: number;
  name: string;
  target: string;
};

export const fetchExerciseByBodyPart = (
  bodyPart?: string,
  config: ApiRequestConfig = APIconfig
) =>
  api
    .get<Exercise[]>(
      `${URLENDPOINT.fetchExerciseByBodyPart}/${bodyPart}`,
      config
    )
    .then((res) => res.data);
