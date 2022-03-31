import React, { useEffect } from "react";
import "../src/styles/App.css";
import AppRouter from "./component/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./component/UI/navbar/MyNavbar";
import { useDispatch, useSelector } from "react-redux";
import { initGoals } from "./reducers/goalsReducer";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initGoals())
  }, [dispatch])

  const goals = useSelector(state => state)
  console.log(goals)

  return (
    <div className="App">
      <MyNavbar />
      <AppRouter />
    </div >
  );
}

export default App;
