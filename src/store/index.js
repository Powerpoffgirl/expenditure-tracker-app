import { createStore } from "redux";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const INITIAL_STORE = [
  {
    id: "VJHVAS",
    title: "Swiggy Order",
    Description: "I was feeling hungry",
    expenseType: "EXPENSE",
    amount: 20000,
    date: "2023-02-10",
  },
  {
    id: "VJHVAT",
    title: "Zomato Order",
    Description: "I was feeling hungry",
    expenseType: "EXPENSE",
    amount: 20000,
    date: "2023-02-10",
  },
  {
    id: "VJHVAU",
    title: "Salary",
    Description: "I was feeling hungry",
    expenseType: "INCOME",
    amount: 20000,
    date: "2023-02-10",
  },
  {
    id: "VJHVAV",
    title: "Mocaambo Order",
    Description: "I was feeling hungry",
    expenseType: "EXPENSE",
    amount: 50000,
    date: "2023-03-10",
  },
];

export const store = createStore(reducer, INITIAL_STORE, composeWithDevTools());
