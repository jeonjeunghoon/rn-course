import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "신발 한 켤레",
    amount: 59000,
    date: new Date("2024-01-28"),
  },
  {
    id: "e2",
    description: "바지 한 벌",
    amount: 89000,
    date: new Date("2024-02-21"),
  },
  {
    id: "e3",
    description: "바나나",
    amount: 4900,
    date: new Date("2023-12-02"),
  },
  {
    id: "e4",
    description: "책",
    amount: 12900,
    date: new Date("2024-02-28"),
  },
  {
    id: "e5",
    description: "또 다른 책",
    amount: 18900,
    date: new Date("2024-02-27"),
  },
  {
    id: "e6",
    description: "바지 한 벌",
    amount: 89000,
    date: new Date("2024-02-21"),
  },
  {
    id: "e7",
    description: "바나나",
    amount: 4900,
    date: new Date("2023-12-02"),
  },
  {
    id: "e8",
    description: "책",
    amount: 12900,
    date: new Date("2024-02-28"),
  },
  {
    id: "e9",
    description: "또 다른 책",
    amount: 18900,
    date: new Date("2024-02-27"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();

      return [{ ...action.payload.expense, id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        ({ id }) => id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.expense };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case "DELETE":
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

export default function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expense) =>
    dispatch({ type: "ADD", payload: { expense } });

  const deleteExpense = (id) => dispatch({ type: "DELETE", payload: { id } });

  const updateExpense = (id, expense) =>
    dispatch({ type: "UPDATE", payload: { id, expense } });

  const value = {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
