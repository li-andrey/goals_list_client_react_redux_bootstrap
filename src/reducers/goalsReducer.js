import GoalService from "../API/GoalService"

const goalsReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_GOALS":
      return action.data
    case "ADD_GOAL":
      return state.concat(action.data)
    case "DEL_GOAL":
      return state.filter((g) => g.id !== action.data)
    case "ACHIEVE_GOAL": {
      const id = action.data.id
      const goalToAchieve = state.find((g) => g.id === id)
      const achievedGoal = {
        ...goalToAchieve,
        achieved: true
      }
      return state.map((goal) => goal.id !== id ? goal : achievedGoal)
    }
    default:
      return state
  }
}

export const initGoals = () => {
  return async dispatch => {
    const goals = await GoalService.getAll()
    dispatch({
      type: 'INIT_GOALS',
      data: goals,
    })
  }
}

export const addGoal = (goal) => {
  return async dispatch => {
    const newGoal = await GoalService.addNewGoal(goal)
    dispatch({
      type: 'ADD_GOAL',
      data: newGoal,
    })
  }
}

export const delGoal = (id) => {
  return async dispatch => {
    const deletedGoal = await GoalService.deleteGoal(id)
    dispatch({
      type: 'DEL_GOAL',
      data: id,
    })
  }
}

export const updateGoal = (goal) => {
  return async dispatch => {
    const updatedGoal = await GoalService.achievedGoals(goal)
    dispatch({
      type: 'ACHIEVE_GOAL',
      data: updatedGoal,
    })
  }
}

export default goalsReducer