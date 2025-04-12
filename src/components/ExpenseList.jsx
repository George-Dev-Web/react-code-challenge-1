import ExpenseItem from "./ExpenseItem";

function ExpenseList({ items }) {
  if (items.length === 0) {
    return <p>No expenses found!</p>;
  }

  return (
    <div>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
