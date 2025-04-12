function ExpenseItem({ title, amount, date }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>{title}</h3>
      <p>💰 Amount: ${amount}</p>
      <p>📅 Date: {new Date(date).toLocaleDateString()}</p>
    </div>
  );
}

export default ExpenseItem;
