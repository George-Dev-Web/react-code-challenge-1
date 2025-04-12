import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import "./index.css";

const dummyExpenses = [
  { id: 1, title: "Groceries", amount: 50, date: "2025-04-01" },
  { id: 2, title: "Netflix", amount: 15, date: "2025-04-03" },
  { id: 3, title: "Transport", amount: 25, date: "2025-04-05" },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>💸 Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;
