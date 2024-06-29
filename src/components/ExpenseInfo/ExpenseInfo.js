import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
    // Add logic here to calculate the grand total, profit and expense amount here
    const totalAmount = props.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const totalProfit = props.expenses.filter(expense => expense.amount > 0)
        .reduce((acc, expense) => acc + expense.amount, 0);
    const totalExpense = props.expenses.filter(expense => expense.amount < 0)
        .reduce((acc, expense) => acc + expense.amount, 0);



    return (
        <div className={styles.expenseInfoContainer}>
            <div className={styles.balance}>
                <h4>YOUR BALANCE</h4>
                <h1>${totalAmount}</h1>
            </div>
            <div className={styles.incomeExpenseContainer}>
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
                        +${totalProfit}
                    </p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
                        -${totalExpense}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExpenseInfo;
