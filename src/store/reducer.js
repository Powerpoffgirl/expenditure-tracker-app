import { ADD_EXPENSE, DELETE_EXPENSE, UPDATE_EXPENSE } from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      const newData = { ...action.data };
      newData.id = state.length + 1;
      return [...state, newData];
    case DELETE_EXPENSE:
      const newStore = state.filter((expenseObj) => {
        if (expenseObj.id !== action.id) return expenseObj;
      });
      return newStore;
    case UPDATE_EXPENSE:
      console.log(action.id);
      const updateData = state.filter((expenseObj) => {
        if (expenseObj.id === action.id) return expenseObj;
      });
      return updateData;
    default:
      return state;
  }
};
