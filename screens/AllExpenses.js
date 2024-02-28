import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpenses } from "../hooks/useExpenses";

export default function AllExpenses() {
  const { expenses } = useExpenses();

  return <ExpensesOutput expenses={expenses} expensesPeriod='전체 지출' />;
}
