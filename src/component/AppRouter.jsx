import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Goals from "./Pages/Goals";
import GoalPage from "./Pages/GoalPage";
import AchievedGoals from "./Pages/AchievedGoals";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Goals />} />
        <Route path="goals" element={<Goals />} />
        <Route path="goals/:goalId" element={<GoalPage />} />
        <Route path="achieved" element={<AchievedGoals />} />
        <Route path="*" element={<Navigate to="/goals" />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
