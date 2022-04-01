import React from "react";
import { useSelector } from "react-redux";
import Goal from "../Goal";

const AchievedGoals = () => {
  const achievedGoals = useSelector((state) => {
    return state.filter((goal) => goal.achieved === true);
  });

  return (
    <div>
      <h1>Выполненные цели:</h1>
      {achievedGoals.map((goal, index) => (
        <div key={goal.id} className="achieved__wrapper">
          <Goal goal={goal} number={index + 1} />
        </div>
      ))}
    </div>
  );
};

export default AchievedGoals;
