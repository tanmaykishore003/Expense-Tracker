import { useRef, useEffect } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
    const expenseTextInput = useRef();
    const expenseAmountInput = useRef();

    useEffect(() => {
        expenseTextInput.current.focus()
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Logic to add expense here

        const text = expenseTextInput.current.value;
        const amount = parseFloat(expenseAmountInput.current.value)

        props.addExpense({
            text,
            amount
        })

        expenseTextInput.current.value = "";
        expenseAmountInput.current.value = "";
        expenseTextInput.current.focus();
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <h3>Add new transaction</h3>
            <label htmlFor="expenseText">Text</label>
            <input
                id="expenseText"
                ref={expenseTextInput}
                className={styles.input}
                type="text"
                placeholder="Enter text..."
                required
            />
            <div>
                <label htmlFor="expenseAmount">Amount</label>
                <div>(negative - expense,positive-income)</div>
            </div>
            <input
                className={styles.input}
                ref={expenseAmountInput}
                id="expenseAmount"
                type="number"
                placeholder="Enter amount..."
                required
            />
            <button className={styles.submitBtn}>Add Transaction</button>
        </form>
    );
};

export default ExpenseForm;
