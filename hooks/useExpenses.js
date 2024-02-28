import { useAtom } from "jotai";

import { expensesAtom } from "../state/atom";

export const useExpenses = () => {
  const [expenses, setExpenses] = useAtom(expensesAtom);

  const addExpense = (expense) => {
    const id = new Date().toString() + Math.random().toString();

    setExpenses([...expenses, { ...expense, id }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const updateExpense = (id, updatedExpense) => {
    setExpenses(
      expenses.map((item) =>
        item.id === id ? { ...item, ...updatedExpense } : item
      )
    );
  };

  return {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
  };
};
