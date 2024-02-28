import { atom } from "jotai";

import { getDateMinusDays } from "../utils/date";

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

export const expensesAtom = atom(DUMMY_EXPENSES);

export const recentExpensesAtom = atom((get) => {
  return get(expensesAtom).filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });
});
