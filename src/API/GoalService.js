import axios from "axios";
const baseUrl = "http://localhost:3001/"

export default class GoalService {
  static async getAll() {
    const response = await axios.get(`${baseUrl}goals`)
    return response.data
  }

  static async getById(id) {
    const response = await axios.get(`${baseUrl}goals/${id}`);
    return response;
  }

  static async addNewGoal(newObject) {
    const response = await axios.post(`${baseUrl}goals`, newObject);
    return response.data;
  }

  static async deleteGoal(id) {
    const response = await axios.delete(`${baseUrl}goals/${id}`);
    return response;
  }

  static async achievedGoals(goal) {
    const response = await axios.put(`${baseUrl}goals/${goal.id}`, goal);
    return response.data;
  }
}

