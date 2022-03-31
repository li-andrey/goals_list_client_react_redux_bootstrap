import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoalService from "../../API/GoalService";
import { useFetching } from "../../hooks/useFetching";
import MyLoader from "../UI/loader/MyLoader";

const GoalPage = () => {
  const params = useParams();
  const [goal, setGoal] = useState({});
  const [fetchGoalById, isLoading, error] = useFetching(async (id) => {
    const response = await GoalService.getById(params.goalId);
    setGoal(response.data);
  });

  useEffect(async () => {
    fetchGoalById(goal.id);
  }, []);

  return (
    <div>
      <h1>Цель номер - {goal.id}</h1>
      {error}
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          <h3>{goal.title}</h3>
          <p>{goal.completed}</p>
        </div>
      )}
    </div>
  );
};

export default GoalPage;
