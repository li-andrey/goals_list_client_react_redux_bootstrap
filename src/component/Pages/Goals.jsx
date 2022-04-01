import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGoals } from "../../hooks/useGoals";
import GoalForm from "../GoalForm";
import GoalsFilter from "../GoalsFilter";
import GoalsList from "../GoalsList";

function Goals() {
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const newGoals = useSelector((state) => {
    return state.filter((g) => g.achieved !== true);
  });

  const sortedAndSearchedGoals = useGoals(newGoals, filter.sort, filter.query);

  return (
    <div>
      <h1>Твои цели:</h1>
      <div className="d-flex">
        <GoalForm />
      </div>
      <GoalsFilter filter={filter} setFilter={setFilter} />
      <GoalsList goals={sortedAndSearchedGoals} />
    </div>
  );
}

export default Goals;
