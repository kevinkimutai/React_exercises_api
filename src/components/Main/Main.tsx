import React, { useState } from "react";
import { ExerciseBodyPart } from "../../api/exercisesApi/exerciseApi";
import Menu from "../Menu/Menu";
import Workouts from "../Workouts/Workouts";

import "./Main.css";

const Main = () => {
  const [targetBody, setTargetBody] = useState<ExerciseBodyPart>("back");

  const targetBodyHandler = (val: string) => setTargetBody(val);

  return (
    <section className="main-section section__shadow">
      <Menu handleBodyPart={targetBodyHandler} />
      <Workouts workoutParams={targetBody} />
    </section>
  );
};

export default Main;
