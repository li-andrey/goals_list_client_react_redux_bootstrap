import React from "react";
import { useSelector } from "react-redux";
import Goal from "./Goal";

const GoalsList = ({ goals, remove, getNotAchievedGoals }) => {
  /*   const goals = useSelector((state) => {
    return state.filter((goal) => goal.achieved !== true);
  }); */
  if (!goals.length) {
    return (
      <div style={{ width: "90%" }}>
        <h2>Цели не найдены</h2>
      </div>
    );
  }

  return (
    <div>
      {goals.map((goal, index) => (
        <Goal
          key={goal.id}
          goal={goal}
          number={index + 1}
          remove={remove}
          getNotAchievedGoals={getNotAchievedGoals}
        />
      ))}
    </div>
  );
};

export default GoalsList;
