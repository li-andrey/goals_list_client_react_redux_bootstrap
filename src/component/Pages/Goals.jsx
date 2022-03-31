import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import GoalService from "../../API/GoalService";
import { useGoals } from "../../hooks/useGoals";
import GoalForm from "../GoalForm";
import GoalsFilter from "../GoalsFilter";
import GoalsList from "../GoalsList";
import MyLoader from "../UI/loader/MyLoader";
import MyNavbar from "../UI/navbar/MyNavbar";
import { delGoal, updateGoal } from "../../reducers/goalsReducer";
import { useDispatch, useSelector } from "react-redux";

function Goals() {
  const [goals, setGoals] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [isGoalsLoading, setIsGoalsLoading] = useState(false);
  const dispatch = useDispatch();

  const sortedAndSearchedGoals = useGoals(goals, filter.sort, filter.query);

  const newGoals = useSelector((state) => state);
  console.log(111, newGoals);
  const createGoal = async (goal) => {
    setGoals([...goals, goal]);
    setModal(false);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const removeGoal = async (goal) => {
    dispatch(delGoal(goal.id));
    setGoals(goals.filter((g) => g.id !== goal.id));
  };

  const getNotAchievedGoals = async (goal) => {
    dispatch(updateGoal(goal));
    const achievedGoals = await GoalService.achievedGoals(goal);
    const updatedGoals = goals.map((item) =>
      item.id === achievedGoals.id ? achievedGoals : item
    );
    setGoals(updatedGoals.filter((g) => g.achieved !== true));
  };

  const fetchGoals = async () => {
    setIsGoalsLoading(true);
    const goals = await GoalService.getAll();
    setGoals(goals);
    setIsGoalsLoading(false);
  };

  return (
    <div>
      <MyNavbar filter={filter} setFilter={setFilter} />
      {isGoalsLoading ? (
        <MyLoader />
      ) : (
        <div>
          <h1>Твои цели:</h1>
          <div className="d-flex">
            <Button variant="success" onClick={() => setModal(true)}>
              Добавить цель
            </Button>
            <GoalForm
              create={createGoal}
              visible={modal}
              setVisible={setModal}
            />
          </div>
          <GoalsFilter filter={filter} setFilter={setFilter} />

          <GoalsList
            getNotAchievedGoals={getNotAchievedGoals}
            goals={sortedAndSearchedGoals}
            remove={removeGoal}
          />
        </div>
      )}
    </div>
  );
}

export default Goals;
