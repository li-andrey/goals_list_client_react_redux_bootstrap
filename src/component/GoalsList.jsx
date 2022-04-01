import React from "react";
import Goal from "./Goal";

const GoalsList = ({ goals }) => {
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
        <Goal key={goal.id} goal={goal} number={index + 1} />
      ))}
    </div>
  );
};

export default GoalsList;
