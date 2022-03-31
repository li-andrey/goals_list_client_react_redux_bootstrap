import React, { useEffect, useState } from "react";
import GoalService from "../../API/GoalService";
import Goal from "../Goal";
import { useFetching } from "../../hooks/useFetching";
import MyLoader from "../UI/loader/MyLoader";
import { useSelector } from "react-redux";

const AchievedGoals = () => {
  const [achievedGoals, setAchievedGoals] = useState([]);

  const [fetchGoalById, isLoading, error] = useFetching(async () => {
    const goals = await GoalService.getAll();
    setAchievedGoals(goals.filter((g) => g.achieved === true));
  });

  useEffect(async () => {
    fetchGoalById();
  }, []);

  /*   const goals = useSelector((state) => {
    state.filter((g) => g.achieved === true);
  }); */

  return (
    <div>
      {error}
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          <h1>Выполненные цели:</h1>
          {achievedGoals.map((goal, index) => (
            <div key={goal.id} className="achieved__wrapper">
              <Goal goal={goal} number={index + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AchievedGoals;
