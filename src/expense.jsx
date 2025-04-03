import React, { useState } from "react";

function ExpenseTracker() {
  const [selectExpense, setSelectExpense] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [expense, setExpense] = useState([]);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  function handleCategoryChange(event) {
    setSelectExpense(event.target.value);
    setModalOpen(true);
  }

  function handleAmount(event) {
    setAmount(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }
  function handlediscription(event) {
    setDescription(event.target.value);
  }
  function handleAddSubmit() {
    if ((!amount, !date, !description)) {
      alert("Please fill all the fields");
      return;
    }
    const newExpense = {
      category: selectExpense,
      amount: amount,
      date: date,
      description: description,
    };
    setExpense([...expense, newExpense]);
    setModalOpen(false);
    setAmount(0);
    setDate("");
    setDescription("");
  }
  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Categories</h2>
      <select
        className="category-selection"
        onChange={handleCategoryChange}
        value={selectExpense}
      >
        <option value="">Select</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
      </select>
      <h2>Expenses:</h2>
      {expense.length === 0 ? (
        <p>No Expenses are added</p>
      ) : (
        <ul>
          {expense.map((item, index) => (
            <li key={index}>
              <strong>{item.category}:</strong> ${item.amount} on {item.date} -{" "}
              {item.description}
            </li>
          ))}
        </ul>
      )}

      {modalOpen && (
        <div>
          <h2>Add Expense :{modalOpen}</h2>
          <p>category:{selectExpense}</p>
          <input type="number" value={amount} onChange={handleAmount} />
          <input type="Date" value={date} onChange={handleDate} />
          <input type="text" value={description} onChange={handlediscription} />
          <button onClick={handleAddSubmit}>Save</button>
          <button onClick={() => setModalOpen(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
export default ExpenseTracker;
