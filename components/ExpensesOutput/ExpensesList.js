import { FlatList } from "react-native";
import ExpensesItem from "./ExpensesItem";

function renderExpenseItem({ item }) {
  return <ExpensesItem {...item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
