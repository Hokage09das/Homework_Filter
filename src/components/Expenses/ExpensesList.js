import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses, filteredExpenses, selectedYear }) => {
  const getCurrentExpenses = () => {
    if (selectedYear === "All") {
      return expenses;
    }
    return filteredExpenses;
  };

  const renderedExpenses = getCurrentExpenses();
  if (renderedExpenses.length === 0) {
    return <h1 className={styles.expenses_list_fallback}>No ExpenseFound</h1>;
  }
  return (
    <ul className={styles.expenses_list}>
      {renderedExpenses.map((expense, id) => {
        return (
          <ExpenseItem
            key={id}
            expenseTitle={expense.title}
            expensePrice={expense.amount}
            expenseDate={expense.date}
          />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
