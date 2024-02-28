import { useAtomValue } from "jotai";

import { recentExpensesAtom } from "../state/atom";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpenses() {
  const recentExpenses = useAtomValue(recentExpensesAtom);

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='최근 7일 간 지출'
    />
  );
}
