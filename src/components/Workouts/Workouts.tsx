import React from "react";

import { useQuery } from "@tanstack/react-query";

import {
  fetchExerciseByBodyPart,
  Exercise,
} from "../../api/exercisesApi/exerciseApi";

import "./Workouts.css";
import LazySpinner from "../LazySpinner/LazySpinner";

interface Props {
  workoutParams: string | "back";
}

const Workouts = (props: Props) => {
  const { workoutParams } = props;

  console.log(workoutParams);

  const { data: workout, isLoading } = useQuery<Exercise[]>(
    ["exercises", workoutParams],
    () => fetchExerciseByBodyPart(workoutParams)
  );

  return (
    <div className="workouts-container">
      {isLoading ? (
        <LazySpinner show={true} size={30} delay={400} color={"#441d32"} />
      ) : (
        workout?.map((workout) => (
          <div className="workout section__shadow" key={workout.id}>
            <img src={workout.gifUrl} alt={workout.bodyPart} />
            <div className="workout__footer">
              <h2 className="workout__name">
                <span className="workout__title">Name:</span>
                {workout.name}
              </h2>
              <p>
                <span className="workout__title">Target:</span>
                {workout.target}
              </p>
              <p>
                <span className="workout__title">Body part:</span>
                {workout.bodyPart}
              </p>
              <p>
                <span className="workout__title">Equipment:</span>
                {workout.equipment}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Workouts;
