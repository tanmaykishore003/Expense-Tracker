import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
    const [expenses, setExpenses] = useState([]);

    // Create function to add an expense
    const addExpense = (data) => {
        setExpenses([...expenses, data])
    }

    // Create function to delete an expense
    const deleteExpense = (i) => {
        setExpenses(expenses.filter((expense, index) => i !== index))
    }

    return (
        <>
            <h2 className="mainHeading">Expense Tracker</h2>
            <div className="App">
                <ExpenseForm addExpense={addExpense} />
                <div className="expenseContainer">
                    <ExpenseInfo expenses={expenses} />
                    <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
                </div>
            </div>
        </>
    );
}

export default App;
