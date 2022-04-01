import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGoals } from "../../hooks/useGoals";
import GoalForm from "../GoalForm";
import GoalsFilter from "../GoalsFilter";
import GoalsList from "../GoalsList";
import MyLoader from "../UI/loader/MyLoader";

function Goals() {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [isGoalsLoading, setIsGoalsLoading] = useState(false);

  const newGoals = useSelector((state) => {
    return state.filter((g) => g.achieved !== true);
  });
  console.log(123, newGoals);

  const sortedAndSearchedGoals = useGoals(newGoals, filter.sort, filter.query);

  return (
    <div>
      {isGoalsLoading ? (
        <MyLoader />
      ) : (
        <div>
          <h1>Твои цели:</h1>
          <div className="d-flex">
            <GoalForm />
          </div>
          <GoalsFilter filter={filter} setFilter={setFilter} />

          <GoalsList goals={sortedAndSearchedGoals} />
        </div>
      )}
    </div>
  );
}

export default Goals;
